const template = (content, TEST_CLOSURE, HOST) => {
  return `<!doctype html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
  ${content}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/preact/8.4.2/preact.min.js" integrity="sha256-PlZR9F40jop06jDR6IgvCXP2vZl4pnOdhqWDW8dqO8w=" crossorigin="anonymous"></script>
  ${TEST_CLOSURE
    ? `<script src="/comments.js"></script>`
    : `<script type="module" src="/comments/index.jsx"></script>`}
  <script${!TEST_CLOSURE ? ' type="module"': ''}>
    window.comments({ host: '${HOST}' })
  </script>
  </body>
</html>`
}

export default (ctx) => {
  const { CLOSURE, HOST } = ctx
  const user = JSON.stringify(ctx.session.user, null, 2)
  const { csrf } = ctx.session
  const auth = user ? `<form action="/signout" method="post">
  <input name="csrf" type="hidden" value="${csrf}">
  <button type="submit">Sign Out</button>
  </form>` : '<a href="/auth/linkedin">Sign In</a>'
  const User = ctx.session.user ? `<pre>${user}</pre>` : ''
  ctx.body = template(`
    ${User}
    ${auth}
    <div id="preact"></div>`, CLOSURE, HOST)
}

export const middleware = (route) => ['session', route]