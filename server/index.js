const Koa = require('koa')
const App = new Koa()

App.use(async (ctx, next) => {
    ctx.body = 'Hi luke'
}).listen(3333)
