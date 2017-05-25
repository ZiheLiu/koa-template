const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  // ctx.body = 'this is a INDEX!'
  await ctx.render('index', {
    title: 'hello'
  })
})

module.exports = router
