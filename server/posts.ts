import { Hono } from 'hono'

const app = new Hono().get('/', async c => {
  return c.json({ message: 'Hi from posts' })
})

export default app