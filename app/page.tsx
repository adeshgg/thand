import { auth } from '@/auth'

export default async function Home() {
  const session = await auth()

  return <>{JSON.stringify(session?.user, null, 2)}</>
}
