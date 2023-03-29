import readData from './utils/readData';
import writeData from './utils/writeData';

const axios = require('axios')
const requestConfig = {
  url: 'http://192.168.1.75:9999/swagger/doc.json',
  fileUrl: 'src/plugins/swagger/api.ts'
}
const swaggerPlugin = (api, opts = {}) => {
  api.registerCommand({
    name: 'swagger',
    fn: async ({
      args
    }) => {
      console.log('开始采集接口');
      /*
       * 根据后台接口swagger文档地址,拼装后台接口,获取全部返回数据中的paths节点,也就是全部的接口数据
       */
      axios.get(requestConfig.url).then((res) => {
        const paths = res.data.paths;
        const definitions = res.data.definitions;
        //整理数据
        const collectedData = readData(paths, definitions);
        //将数据生成js文件
        writeData(collectedData, requestConfig.fileUrl);
      });
    },
  });

};

export default swaggerPlugin;
