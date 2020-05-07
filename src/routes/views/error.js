/**
 * @description error 404 路由
 * @author Uni
 */

const router = require('koa-router')();

// error 页面路由
router.get('/error', async (ctx, next) => {
    await ctx.render('error')
})

// 404 页面路由
router.get('*', async (ctx, next) => {
    await ctx.render('404')
})

module.exports = router;