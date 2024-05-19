import axios from 'axios'
// import {createUser} from "../interface/user"


export const loginRequest = async (email: string, password: string) =>
  axios.post("https://ts-mern-login-boilerplate-1.onrender.com/login", {
    email,
    password
  })

// export const registerRequest = async (data: createUser) =>
//   axios.post("/api/auth/register", data)

export const profileRequest = async () => axios.get("/api/auth/profile")
