# react-ssr-demo

react服务端渲染demo

## QuickStart
由于本项目只是用于熟悉react服务端渲染原理，因此不使用mysql之类的持久化缓存方案，而是使用本地json文件持久化存储。`storage`目录下的json文件就是持久化存储数据用的。项目限制商品和用户各自最多只能创建100条

## 环境
- node：16

### Development

本地开发环境需要**同时**启动egg服务以及react开发服务。遵循以下步骤：

- 1.首先安装依赖。由于项目依赖版本较旧，短期内没时间升级，因此安装以来时需要使用的node版本是16

```bash
$ npm i 
```

- 2.启动egg服务。需要使用node16版本运行服务

```bash
$ npm run dev 
```
- 3.启动react开发服务

```bash
$ npm run dev-react
```

### Deploy
部署遵循以下步骤：

- 1.打包构建react

```bash
$ npm run build-react
```

- 2.启动egg服务：

```bash
$ npm start
```

如果需要停止服务，则运行：

```bash
$ npm stop
```

### npm scripts
下面这些命令都是egg脚手架自带的命令

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org