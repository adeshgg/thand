import { AuthConfig, initAuthConfig } from '@hono/auth-js'
import { Context, Hono } from 'hono'
import { handle } from 'hono/vercel'
import provider from '@/auth.config'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.use('*', initAuthConfig(getAuthConfig))

app.get('/hello', c => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

function getAuthConfig(c: Context): AuthConfig {
  return {
    secret: process.env.AUTH_SECRET,
    ...provider,
  }
}
