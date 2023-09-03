'use strict';
const { Controller } = require('egg');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

class Index extends Controller {
  async render() {
    const { ctx, app } = this;
    const isLocal = app.config.env === 'local';
    const serverEntryPath = path.resolve(__dirname, '../../dist/server-entry.js');
    const context = { test: '服务端渲染时，react组件会接收到这个context' }; // 传递给StaticRouter的context

    if (isLocal) {
      // 只在开发环境才允许这么做。。。。
      // 本地开发环境下每次刷新的时候清空require服务端文件的缓存，保证服务端与客户端渲染结果一致
      delete require.cache[serverEntryPath];
    }
    const renderHtml = require(serverEntryPath).default;

    try {
      const html = await renderHtml({ ctx, context });

      // 如果遇到路由中有<Redirect />组件的，react-router-config会往context里面注入action等重定向信息字段
      if (context.action === 'REPLACE') {
        // 需要重定向
        ctx.redirect(context.url);
        return;
      }
      // 如果访问的页面路径不存在，则会重定向到404页面，404页面会往context里面添加status字段
      if (context.status) {
        ctx.status = context.status;
      }

      ctx.body = html;
    } catch (err) {
      // 降级，当服务端渲染失败时，使用客户端渲染
      const clientHtml = await this.getClientHtml();
      ctx.body = clientHtml;
    }
  }

  async getClientHtml() {
    // 获取客户端html文件。
    // 生产模式时，客户端渲染需要的html文件可以直接从dist目录读取
    // 本地开发模式时，客户端渲染需要的html文件需要从localhost:8008服务读取
    const { ctx, app } = this;
    const isLocal = app.config.env === 'local';
    if (!isLocal) {
      // 生产环境直接读取dist目录
      let clientHtmlPath = path.resolve(__dirname, '../../dist/web/assets/index.html');
      return fs.readFileSync(clientHtmlPath).toString()
    }
    // 开发环境从localhost:8008端口请求
    const res = await axios.get('http://localhost:8008/public/web/assets/index.html', {})
    return res.data;
  }
  async notFound() {
    // 直接重定向前端404
    this.ctx.redirect('/404');
  }
}

module.exports = Index;
