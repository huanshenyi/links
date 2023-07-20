import Layout from "../components/Layout"
import { SignupForm } from "../components/SignupForm"

export const SignupPage: React.FC = () => {
  return <Layout children={<SignupForm />} />
}
