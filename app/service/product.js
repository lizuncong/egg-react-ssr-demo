'use strict';


class ProductService {
  async list(pageNum, pageSize, where) {
    const ctx = this.ctx;
    return {
      "code": 0,
      "data": {
        "list": [
          {
            "id": 43,
            "name": "隆江猪脚饭23",
            "price": 202,
            "image": "http://localhost:7001/public/imgs/default-01.png",
            "status": "1",
            "description": "猪脚肥而不腻2",
            "createdAt": "2021-02-14T08:24:09.000Z",
            "updatedAt": "2021-02-14T08:44:21.000Z"
          }
        ],
        "count": 5
      }
    }
  }
  async create(entity) {
    // entity: { name: 'fdaf', price: '434', description: 'ff' }
    return {
      "image": "http://localhost:7001/public/imgs/default-01.png",
      "status": 1,
      "id": 59,
      "name": "444",
      "price": "455",
      "description": "fff",
      "updatedAt": "2023-08-31T14:44:23.997Z",
      "createdAt": "2023-08-31T14:44:23.997Z"
    }
  }
  async update(entity) {
    // entity : {
    // id: 43,
    // name: '隆江猪脚饭23',
    // price: '20244',
    // image: 'http://localhost:7001/public/imgs/default-01.png',
    // status: '1',
    // description: '猪脚肥而不腻2',
    // createdAt: '2021-02-14T08:24:09.000Z',
    // updatedAt: '2021-02-14T08:44:21.000Z'
    // }
    return {
      "id": 45,
      "name": "螺狮粉",
      "price": "1000",
      "image": "http://localhost:7001/public/imgs/default-01.png",
      "status": "1",
      "description": "螺狮粉没有螺狮",
      "createdAt": "2021-02-14T08:37:59.000Z",
      "updatedAt": "2023-08-31T14:44:52.716Z"
    }
  }

  async destroy(id) {
    const ctx = this.ctx;
    const idTemp = Number(id);
    return {
      "id": 43,
      "name": "隆江猪脚饭23",
      "price": 20244,
      "image": "http://localhost:7001/public/imgs/default-01.png",
      "status": "1",
      "description": "猪脚肥而不腻2",
      "createdAt": "2021-02-14T08:24:09.000Z",
      "updatedAt": "2023-08-31T14:46:08.000Z"
    }
  }
}

module.exports = ProductService;
