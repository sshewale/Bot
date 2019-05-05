const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const respond = require('koa-respond');

const app = new Koa();
const router = new Router();

if (process.env.NODE_ENV === 'development') {
  app.use(Logger());
}

app.use(respond());

require('./routes')(router);

app.use(router.routes());

module.exports = app;
