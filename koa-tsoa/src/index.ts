const Koa = require('koa');
const Router = require('@koa/router')
const router = new Router()
const app = new Koa()
const helloController = require('./controllers/UserController')
const { RegisterRoutes } = require('../build/routes')


RegisterRoutes(router)

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Server is listening...'))