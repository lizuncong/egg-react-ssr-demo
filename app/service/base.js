'use strict';
const fs = require('fs')

const { Service } = require('egg');

class BaseService extends Service {
  writeJSONToFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, JSON.stringify(data), err => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    })
  }

  readJSONFromFile = (filePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          return reject(err)
        }
        // 目前都是使用json文件持久化缓存数据，因此这里都统一当成json数据了
        resolve(JSON.parse(data))
      })
    })
  }


}

module.exports = BaseService;
