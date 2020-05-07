const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')

// 引入环境
const { REDIS_CONF } = require('./conf/db');
const { isProd } = require('./utils/env');

const errorViewRouter = require('./routes/views/error')
const index = require('./routes/index')
const users = require('./routes/users')

// error handler
let onerrorConf = {};
if (isProd) {
  onerrorConf = {
    redirect: '/error'
  }
}

onerror(app, onerrorConf)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// session 配置
app.keys = ['UNicoco_1222*'];
app.use(session({
  key: 'blog.sid', // cookie name 默认是 koa.sid
  prefix: 'blog:sess:', // redis key 前缀 默认是 koa:sess:
  cookie: {
    path: '/',
    httpOnly: true,  // cookie 限制
    maxAge: 24 * 60 * 120 * 1000  // cookie 过期时间
  },
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
