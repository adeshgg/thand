import GitHub from '@auth/core/providers/github'
import Google from '@auth/core/providers/google'
import { NextAuthConfig } from 'next-auth'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from './db'

export default {
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // session: {},
  // events: {},
  // callbacks: {},
  // pages: {}
} satisfies NextAuthConfig
