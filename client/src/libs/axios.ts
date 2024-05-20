import axios from 'axios'
import { useAuthStore } from '../store/auth'

const authApi = axios.create({
  baseURL: "https://ts-mern-login-boilerplate-1.onrender.com",
//   baseURL: "http://localhost:3000",
  withCredentials: true
})

authApi.interceptors.request.use(config => {
    const token = useAuthStore.getState().token
    config.headers["Authorization"] = `Bearer ${token}`
    return config
})

export default authApi

