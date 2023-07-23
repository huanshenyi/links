import type { GetServerSideProps } from "next"
import { getSession, signOut } from "next-auth/react"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session || session?.user.id === null) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    }
  }
  return { props: { user: session.user } }
}

type User = {
  id: string
  name: string | null
  image: string | null
}

interface Iprops {
  user: User
}

const userPage: React.FC<Iprops> = ({ user }) => {
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.id}</div>
      <div>user page</div>
      <button onClick={() => void signOut()}>logout</button>
    </div>
  )
}

export default userPage
