'use strict';
const BaseService = require('./base');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

class UserService extends BaseService {
  constructor(...args) {
    super(...args);
    this.jsonFilePath = path.resolve(this.storageDir, './user.json')
  }
  async list(pageNum, pageSize, where) {
    const ctx = this.ctx;
    const jsonData = await this.readJSONFromFile(this.jsonFilePath)
    const list = Object.values(jsonData)
    return {
      list,
      count: list.length
    }
  }

  async create(entity) {
    const { userName, password, phone } = entity;
    const jsonData = await this.readJSONFromFile(this.jsonFilePath)
    const id = uuidv4();
    jsonData[id] = {
      gender: 1,
      id,
      userName,
      password,
      phone,
      updatedAt: new Date(),
      createdAt: new Date()
    }
    await this.writeJSONToFile(this.jsonFilePath, jsonData)
    return jsonData[id]
  }
  async update(entity) {
    const {
      id,
      userName,
      password,
      phone,
      gender,
      avatar,
    } = entity;
    const jsonData = await this.readJSONFromFile(this.jsonFilePath)
    const data = jsonData[id];
    if (!data) {
      console.log('update error，用户不存在, id:', id)
      return null;
    }
    jsonData[id] = {
      ...data,
      ...entity,
      updatedAt: new Date()
    };
    await this.writeJSONToFile(this.jsonFilePath, jsonData)
    return jsonData[id]
  }

  async destroy(id) {
    const ctx = this.ctx;
    const jsonData = await this.readJSONFromFile(this.jsonFilePath)
    const data = jsonData[id]
    if (!data) {
      console.log('删除失败，用户不存在。id：', id)
      return;
    }
    delete jsonData[id]
    await this.writeJSONToFile(this.jsonFilePath, jsonData)

    return data
  }
}

module.exports = UserService;
