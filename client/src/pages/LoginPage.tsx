
import { loginRequest, profileRequest } from '../api/auth'
import {useAuthStore} from "../store/auth"
import { useNavigate} from "react-router-dom"

function LoginPage() {
  const setToken = useAuthStore((state) => state.setToken)
  const setProfile = useAuthStore((state) => state.getProfile)
  const navigate = useNavigate()


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value


    const resLogin = await loginRequest(email, password)
    setToken(resLogin.data.token)
    console.log(resLogin)

    const resProfile = await profileRequest()
    setProfile(resProfile.data.profile)
    console.log(resProfile)


    navigate("/profile")
  }



  return (
    <div className="flex h-[calc(100vh-150px)] items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 max-w-md p-7 rounded-md">
        <h1 className="my-5 font-bold text-5xl">Login</h1>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="user@mail.com"
          className="bg-gray-900 px-4 py-2 rounded-md w-full my-2"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="********"
          className="bg-gray-900 px-4 py-2 rounded-md w-full my-2"
        />
        <button className="bg-indigo-500 px-4 py-2 w-full rounded-md">
          Login
        </button>
        <p className="mt-7 text-slate-400 flex justify-between">
          Don't Have an Account?{" "}
          {/* <Link to="/register" className="text-indigo-100 font-bold">
            Register
          </Link> */}
        </p>
      </form>
    </div>
  )
}

export default LoginPage

// Request profile
// https://youtu.be/KQbgKizEjxw?t=3403