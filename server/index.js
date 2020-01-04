const Koa = require('koa')
const logger = require('koa-logger')
const ejs = require('ejs')
const {htmlTpl, ejsTpl} = require('./tpl/')

const app = new Koa()

app.use(logger())
app.use(async (ctx, next) => {
  ctx.body = ejs.render(ejsTpl, {
    you: 'Luke',
    me: 'Scott'
  })
})

app.listen(3333)
