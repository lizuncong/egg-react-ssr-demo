'use strict';
const BaseService = require('./base');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const MAX_LENGTH = 100;
class ProductService extends BaseService {
  constructor(...args) {
    super(...args);
    this.jsonFilePath = path.resolve(this.storageDir, './product.json')
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
    const { name, price, description } = entity;
    const jsonData = await this.readJSONFromFile(this.jsonFilePath)
    const list = Object.values(jsonData)
    if (list.length > MAX_LENGTH) {
      console.log(`最多只能创建${MAX_LENGTH}条记录`)
      return
    }
    const id = uuidv4();
    jsonData[id] = {
      image: "/public/imgs/default-01.png",
      status: 1,
      id,
      name,
      price,
      description,
      updatedAt: new Date(),
      createdAt: new Date()
    }
    await this.writeJSONToFile(this.jsonFilePath, jsonData)
    return jsonData[id]
  }
  async update(entity) {
    const {
      id,
      name,
      price,
      image,
      status,
      description,
      createdAt,
      updatedAt
    } = entity;
    const jsonData = await this.readJSONFromFile(this.jsonFilePath)
    const data = jsonData[id];
    if (!data) {
      console.log('update error，商品不存在, id:', id)
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
      console.log('删除失败，商品不存在。id：', id)
      return;
    }
    delete jsonData[id]
    await this.writeJSONToFile(this.jsonFilePath, jsonData)

    return data
  }
}

module.exports = ProductService;
