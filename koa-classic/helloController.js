const Router = require('@koa/router')
const router = new Router()

router.get('/', ctx => {
    const name = ctx.query.name
    ctx.body = `Hello ${name}`
})

module.exports = router