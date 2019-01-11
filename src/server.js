import idio from '@idio/core'
import initRoutes, { watchRoutes } from '@idio/router'
import staticCache from 'koa-static-cache'
import linkedIn from '@idio/linkedin'
import { join } from 'path'
import read from '@wrote/read'
import transpileJSX from '@a-la/jsx'
import { makeLinkedinFinish } from './lib'
import es from './es'

const {
  NODE_ENV,
  HOST = 'https://technation.sucks',
  FRONT_END = 'https://www.technation.sucks',
  CLOSURE, // for /comments page
} = process.env
const PROD = NODE_ENV == 'production'

/**
 * Starts the server.
 */
export default async ({
  client, port, client_id, client_secret,
  watch = !PROD,
}) => {
  const { app, router, url, middleware } = await idio({
    cors: {
      use: true,
      origin: PROD && [FRONT_END, HOST],
      config: { credentials: true },
    },
    logger: { use: !PROD },
    compress: { use: true },
    es,
    ...(!PROD ? {
      /** @type {import('koa').Middleware} */
      async jsx(ctx, next) {
        if (!ctx.path.endsWith('.jsx')) {
          await next()
          return
        }
        const p = join('frontend', ctx.path)
        const r = await read(p)
        const jsx = transpileJSX(r)
        ctx.type = 'text/javascript'
        ctx.body = jsx
      },
    } : {}),
    sc: staticCache('static'),
    static: { use: true, root: ['closure', 'frontend'] },
    session: { keys: [process.env.SESSION_KEY] },
    bodyparser: {},
  }, { port })
  Object.assign(app.context, {
    prod: PROD,
    HOST: PROD ? HOST : url,
    CLOSURE: PROD || CLOSURE,
    client, appName: 'technation.sucks',
  })
  if (CLOSURE)
    console.log('Testing Closure bundle: %s', 'closure/comments.js')
  const li = {
    session: middleware.session,
    client_id,
    client_secret,
    scope: 'r_liteprofile,r_basicprofile',
  }
  linkedIn(router, {
    ...li,
    finish: makeLinkedinFinish('/comments'),
  })
  linkedIn(router, {
    ...li,
    error(ctx, error) {
      ctx.redirect(`/callback?error=${error}`)
    },
    path: '/linkedin',
    finish: makeLinkedinFinish('/callback'),
  })
  const w = await initRoutes(router, 'routes', {
    middleware,
  })
  if (watch) watchRoutes(w)
  app.use(router.routes())
  app.use((ctx) => {
    ctx.redirect(FRONT_END)
  })
  return { app, url }
}

// /** @type {import('koa').Middleware} */
// async sourceMaps(ctx, next) {
//   if (!ctx.path.endsWith('.js')) return await next()
//   try {
//     const file = await read(join('closure', ctx.path))
//     const f = `${file}\n//# sourceMappingURL=${ctx.path}.map`
//     ctx.type = 'application/javascript'
//     ctx.body = f
//   } catch (err) {
//     await next()
//   }
// },