const util = require('./util')
/**
 * 将传进来的数据按要求整理后进行返回,需要方法名称,接口url,方法类型,获取方法说明,获取类说明
 * @param {*} inputData
 */

const methodInfo = {
  methodName: '',
  apiUrl: '',
  methodType: '',
  methodDesc: '',
  methodParameters: ''
}

const readDataModule = {
  //所属模块名称
  moduleName: '',
  methodInfos: []
}

const readData = (paths, definitions) => {
  let collectedApiData = [];
  let apiCount = 0;
  for (const urlKey in paths) {
    //获取swagger获取数据对象所属模块信息
    let inputDataItem = paths[urlKey];
    let methodType = '';
    for (const methodTypeKey in inputDataItem) {
      methodType = methodTypeKey;
    }
    let inputMethodInfo = inputDataItem[methodType];
    let moduleName = inputMethodInfo.tags[0];
    //收集方法信息
    let cloneMethodInfo = util.deepClone(methodInfo);
    cloneMethodInfo.methodName = !!inputMethodInfo.description ? inputMethodInfo.description : inputMethodInfo.summary;
    cloneMethodInfo.apiUrl = urlKey;
    cloneMethodInfo.methodType = methodType;
    cloneMethodInfo.methodDesc = inputMethodInfo.summary;
    cloneMethodInfo.methodParameters = util.collectMethodParameters(inputMethodInfo.parameters, definitions);
    collectMethodInfoToArraysByKey(moduleName, cloneMethodInfo, collectedApiData);
    apiCount++;
  }
  console.log(`本次共收集了${apiCount}个接口`)
  return collectedApiData;
}

/**
 * 根据key将方法数据进行分组
 * @param {*} key
 * @param {*} methodInfo
 * @param {*} resArr
 */
const collectMethodInfoToArraysByKey = (key, methodInfo, resArr) => {
  let hasModuleIndex = -1;
  for (let i = 0; i < resArr.length; i++) {
    let resItem = resArr[i];
    if (resItem.moduleName == util.convertModuleName(key)) {
      hasModuleIndex = i;
      break;
    }
  }
  // -1说明没有,添加新元素,有的话在原先的元素中添加元素
  let cloneCollectDataModule = null;
  if (hasModuleIndex == -1) {
    cloneCollectDataModule = util.deepClone(readDataModule);
    cloneCollectDataModule.moduleName = util.convertModuleName(key);
    resArr.push(cloneCollectDataModule);
  } else {
    cloneCollectDataModule = resArr[hasModuleIndex];
  }
  cloneCollectDataModule.methodInfos.push(methodInfo);
}

module.exports = readData;
