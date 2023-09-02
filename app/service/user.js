'use strict';
const BaseService = require('./base');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

class UserService extends BaseService {
  constructor(...args) {
    super(...args);
    this.jsonFilePath = path.resolve(__dirname, '../../storage/user.json')
  }
  async list(pageNum, pageSize, where) {
    const ctx = this.ctx;
    return {
      "list": [
        {
          "id": 27,
          "userName": "张三6",
          "password": "123456",
          "phone": "18812345676",
          "gender": "1",
          "avatar": null,
          "createdAt": "2021-02-14T04:01:57.000Z",
          "updatedAt": "2021-02-14T04:01:57.000Z"
        }
      ],
      "count": 5
    }
  }
  async create(entity) {
    // entity: { userName: '3243434', password: '43434', phone: '18812121214' }
    return {
      "gender": 1,
      "id": 35,
      "userName": "3243434",
      "password": "43434",
      "phone": "18812121214",
      "updatedAt": "2023-08-30T15:28:27.199Z",
      "createdAt": "2023-08-30T15:28:27.199Z"

    }
  }
  async update(entity) {
    // entity : {
    //   id: 27,
    //   userName: '张三6',
    //   password: '12345678988',
    //   phone: '18812345676',
    //   gender: '1',
    //   avatar: null,
    //   createdAt: '2021-02-14T04:01:57.000Z',
    //   updatedAt: '2023-08-31T14:33:23.000Z'
    // }
    return {
      "id": 27,
      "userName": "张三6",
      "password": "12345678988111",
      "phone": "18812345676",
      "gender": "1",
      "avatar": null,
      "createdAt": "2021-02-14T04:01:57.000Z",
      "updatedAt": "2023-08-31T14:35:10.227Z"
    }
  }

  async destroy(id) {
    const ctx = this.ctx;
    const idTemp = Number(id);
    return {
      "id": 27,
      "userName": "张三6",
      "password": "12345678988111",
      "phone": "18812345676",
      "gender": "1",
      "avatar": null,
      "createdAt": "2021-02-14T04:01:57.000Z",
      "updatedAt": "2023-08-31T14:35:10.000Z"
    }
  }
}

module.exports = UserService;
