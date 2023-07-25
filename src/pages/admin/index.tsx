import type { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import { AdminPage } from "src/features/admin"

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

const adminPage: React.FC<Iprops> = ({ user }) => {
  return (
    <div>
      <AdminPage user={user} />
    </div>
  )
}

export default adminPage
