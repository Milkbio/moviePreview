const Koa = require('koa')
const logger = require('koa-logger')
const views = require('koa-views')
const {resolve} = require('path')

const app = new Koa()

app.use(logger())
app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))
app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'Luke',
    me: 'Scott'
  })
})

app.listen(3333)
