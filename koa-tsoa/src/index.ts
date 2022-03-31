const Koa = require('koa');
const Router = require('@koa/router')
const router = new Router()
const app = new Koa()
const { koaSwagger } = require('koa2-swagger-ui')
const helloController = require('./controllers/UserController')
const { RegisterRoutes } = require('../build/routes')
const spec = require('../build/swagger.json')

RegisterRoutes(router)

app.use(router.routes()).use(router.allowedMethods());


app.use(
    koaSwagger({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            spec
        },
    }),
);

app.listen(3000, () => console.log('Server is listening...'))