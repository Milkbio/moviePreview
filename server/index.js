const Koa = require('koa')
const logger = require('koa-logger')
const {normal} = require('./tpl/')
const app = new Koa()

app.use(logger())
app.use(async (ctx, next) => {
  ctx.body = normal
})

app.listen(3333)
