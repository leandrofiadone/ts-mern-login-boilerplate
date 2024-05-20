import create from "zustand"
import { persist } from 'zustand/middleware'
import { profileRequest } from '../api/auth';


type State = {
  token: string | null;
  profile: string
  isAuth: boolean
//   errors: any
}

type Actions = {
  setToken: (token: string | null) => void
  getProfile: (profile: string | null) => void
  //   register: (user: createUser) => void
    logout: () => void
  //   cleanErrors: () => void
}

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: null,
      profile: "",
      isAuth: false,
      //   errors: null,
      setToken: (token: string | null) =>
        set(() => ({
          token,
          isAuth: !!token
        })),

      getProfile: async () => {
        const resProfile = await profileRequest()
        set(() => ({
          profile: resProfile.data
        }))
      },
      //   register: async (user: createUser) => {
      //     try {
      //       const resRegister = await registerRequest(user)
      //       set(() => ({
      //         token: resRegister.data.token,
      //         isAuth: true
      //       }))
      //     } catch (error) {
      //       set(() => ({errors: error.response.data}))
      //     }
      //   },
      // logout: () => set(() => ({
      //   token: '', 
      //   profile: null, 
      //   isAuth: false
      // }))

      logout: () => set(()=>({
        token: '',
        isAuth: false,
        profile: ''

      }))

      //   cleanErrors: () => set(() => ({errors: null}))
    }),
    {
      name: "auth"
    }
  )
)