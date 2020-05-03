const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params;
  ctx.body = {
    title:"this is profile page!",
    userName
  }
})

router.get('/loadmore/:userName/:indexPage', async (ctx, next) => {
  const { userName, indexPage } = ctx.params;
  ctx.body = {
    title: "this is loadmore page!",
    userName,
    indexPage
  }
})

module.exports = router
