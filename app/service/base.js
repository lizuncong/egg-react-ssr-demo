'use strict';
const fs = require('fs')
const path = require('path');
const { Service } = require('egg');

class BaseService extends Service {
  constructor(...args) {
    super(...args);
    this.storageDir = path.resolve(__dirname, '../../storage')
  }
  writeJSONToFile = (filePath, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, JSON.stringify(data), err => {
        if (err) {
          if (err.code === 'ENOENT') {
            // 文件不存在，创建storage目录
            this.makeDir(this.storageDir)
            return resolve({})
          }
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
          if (err.code === 'ENOENT') {
            // 文件不存在，创建storage目录
            this.makeDir(this.storageDir)
            return resolve({})
          }
          return reject(err)
        }
        // 目前都是使用json文件持久化缓存数据，因此这里都统一当成json数据了
        resolve(JSON.parse(data))
      })
    })
  }
  makeDir = (dir) => {
    return new Promise((resolve, reject) => {
      fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) {
          return reject(err);
        } else {
          resolve();
        }
      });
    });
  };
}

module.exports = BaseService;
