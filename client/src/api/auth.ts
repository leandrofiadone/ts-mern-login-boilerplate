
// import {createUser} from "../interface/user"

import axios from '../libs/axios'


export const loginRequest = async (email: string, password: string) =>
  axios.post("/login", {
    email,
    password
  })

// export const registerRequest = async (data: createUser) =>
//   axios.post("/api/auth/register", data)

export const profileRequest = async () =>
  axios.get("/profile")
