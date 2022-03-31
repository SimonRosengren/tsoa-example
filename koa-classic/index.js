const Koa = require('koa');
const Router = require('@koa/router')
const router = new Router()
const app = new Koa()
const helloController = require('./helloController')

app.use(ctx => {
    ctx.body = 'Hello Koa';
  });

//router.use('/hello', helloController.routes())

// app
//   .use(router.routes())
//   .use(router.allowedMethods());

app.listen(3000, () => console.log('Server is listening...'))