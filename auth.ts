import NextAuth from 'next-auth'
import authConfig from './auth.config'

// We can only use the exports of handlers, signIn, signOut, auth in server components or server actions
export const { handlers, signIn, signOut, auth } = NextAuth({
  //   session: {},
  ...authConfig,
})
