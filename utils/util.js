const util = { //返回传递给他的任意对象的类
  isClass: (o) => {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
  },
  deepClone: function deepClone(obj) {
    var result, oClass = util.isClass(obj);
    //确定result的类型
    if (oClass === "Object") {
      result = {};
    } else if (oClass === "Array") {
      result = [];
    } else {
      return obj;
    }
    for (key in obj) {
      var copy = obj[key];
      if (util.isClass(copy) === "Object") {
        result[key] = arguments.callee(copy); //递归调用
      } else if (util.isClass(copy) === "Array") {
        result[key] = arguments.callee(copy);
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  },
  title(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  },
  /**
   * 将 user-company-controller 格式转化为 userCompany 格式
   * @param {*} key
   */
  convertModuleName(key) {
    let splitKeyArr = key.split("-");
    splitKeyArr.splice(splitKeyArr.length - 1, 1);
    for (let i = 0; i < splitKeyArr.length; i++) {
      splitKeyArr[i] = util.title(splitKeyArr[i]);
    }
    return splitKeyArr.join("");
  },
  collectMethodParameters(parameters, definitions) {
    let obj = {};
    if (!parameters || !parameters.length) {
      return obj;
    }
    parameters.forEach(parameter => {
      if (parameter.schema) {
        const paramsKey = parameter.schema['$ref'].replace("#/definitions/", "");
        obj = definitions[paramsKey].properties;
      }
    });

    return obj;
  }
}
module.exports = util
