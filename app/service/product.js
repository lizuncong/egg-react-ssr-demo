'use strict';
const BaseService = require('./base');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

class ProductService extends BaseService {
  constructor(...args) {
    super(...args);
    this.productJsonFilePath = path.resolve(__dirname, '../../storage/product.json')
  }
  async list(pageNum, pageSize, where) {
    const ctx = this.ctx;
    const productJson = await this.readJSONFromFile(this.productJsonFilePath)
    const list = Object.values(productJson)
    return {
      list,
      count: list.length
    }
  }
  async create(entity) {
    const { name, price, description } = entity;
    const productJson = await this.readJSONFromFile(this.productJsonFilePath)
    const id = uuidv4();
    productJson[id] = {
      image: "/public/imgs/default-01.png",
      status: 1,
      id,
      name,
      price,
      description,
      updatedAt: new Date(),
      createdAt: new Date()
    }
    await this.writeJSONToFile(this.productJsonFilePath, productJson)
    return productJson[id]
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
    const productJson = await this.readJSONFromFile(this.productJsonFilePath)
    const data = productJson[id];
    if (!data) {
      console.log('update error，商品不存在, id:', id)
      return null;
    }
    productJson[id] = {
      ...entity,
      updatedAt: new Date()
    };
    await this.writeJSONToFile(this.productJsonFilePath, productJson)
    return productJson[id]
  }

  async destroy(id) {
    const ctx = this.ctx;
    const productJson = await this.readJSONFromFile(this.productJsonFilePath)
    const data = productJson[id]
    if (!data) {
      console.log('删除失败，商品不存在。id：', id)
      return;
    }
    delete productJson[id]
    await this.writeJSONToFile(this.productJsonFilePath, productJson)

    return data
  }
}

module.exports = ProductService;
