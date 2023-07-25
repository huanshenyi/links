import Layout from "../components/Layout"

type User = {
  id: string
  name: string | null
  image: string | null
}

interface Iprops {
  user: User
}

export const AdminPage: React.FC<Iprops> = ({}) => {
  return (
    <>
      <Layout />
      {/* <div>admin page</div>
      <div>{user.name}</div>
      <div>{user.id}</div>
      <button onClick={() => void signOut()}>logout</button> */}
    </>
  )
}
