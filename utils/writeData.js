const fs = require('fs')

/**
 * 将模块数据写入为前台用的接口文件
 */
const writeData = (writeData, writeFilePath) => {
  for (let i = 0; i < writeData.length; i++) {
    const moduleData = writeData[i];
    fs.writeFile(writeFilePath, '', () => {});
    fs.appendFile(writeFilePath, joinModuleText(moduleData), (res) => {});
  }
}
const apiNameFormat = (apiUrl) => {
  return apiUrl.replace('/v1/', "")
    .replace(/\/(\w)/g, (all, letter) => letter.toUpperCase())
    .replace(/\_(\w)/g, (all, letter) => letter.toUpperCase())
    .replace(/\/{.*?\}/g, "")
    .replace(/\{.*?\}/g, "");
}
const apiUrlFormat = (apiUrl) => {
  return apiUrl.replace('/v1', "")
    .replace(/\/{.*?\}/g, "")
    .replace(/\{.*?\}/g, "");
}
const typeConvert = (type) => {
  let tsType = type;
  switch (type) {
    case 'array':
      tsType = 'Array<any>'
      break;
    case 'integer':
      tsType = 'number'
      break;
  }
  return tsType;
}
const hasParams = (params) => {
  return params && Object.keys(params).length;
}
/**
 * 把模块信息转换为模块的字符串,用于写入文件
 * @param {*} moduleData 
 */
const joinModuleText = (moduleData, lastItemFlag) => {
  let interfaceContent = '';
  moduleData.methodInfos.map(item => {
    const apiName = apiNameFormat(item.apiUrl);
    const methodParameters = item.methodParameters;
    const paramsName = apiName + 'Params';
    const interfaceName = paramsName.charAt(0).toUpperCase() + paramsName.slice(1);
    interfaceContent += hasParams(methodParameters) ?
      `interface ${interfaceName} {
  ${Object.keys(methodParameters).map((key,index)=>{
    let interfaceDetail = `${key}:${typeConvert(methodParameters[key].type)}, //${methodParameters[key].description}${index !== Object.keys(methodParameters).length-1 && '\n'}  `;
    return interfaceDetail;
  }).join('')}
}\n\n` : '';
  });
  let mainModuleText = `import { post } from '@/server'
${interfaceContent}
export default {`
  moduleData.methodInfos.map(item => {
    const apiName = apiNameFormat(item.apiUrl);
    const apiUrl = apiUrlFormat(item.apiUrl);
    const methodParameters = item.methodParameters;
    const paramsName = apiName + 'Params';
    const interfaceName = paramsName.charAt(0).toUpperCase() + paramsName.slice(1);
    let methodItem = `
   /*
    * ${item.methodDesc}  
    * type: ${item.methodType}
    * parammeters: ${hasParams(methodParameters) ? '有' : '无' }请求参数
    */
    ${apiName}: (${hasParams(methodParameters) ? paramsName + ': ' + interfaceName : ''}) => {
        return post('${apiUrl}', ${hasParams(methodParameters) ? paramsName : '{}'});
    },
`
    mainModuleText += methodItem;
  });
  mainModuleText += '\n}\n';
  writeEndFlag = lastItemFlag;
  return mainModuleText;
}

module.exports = writeData;
