import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from './schema'
// const db = drizzle(process.env.DATABASE_URL!)
export const db = drizzle({
  connection: process.env.DATABASE_URL!,
  casing: 'snake_case',
  schema,
})