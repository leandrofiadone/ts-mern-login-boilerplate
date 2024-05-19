import create from "zustand"
import { persist } from 'zustand/middleware'


type State = {
  token: string | null;
//   profile: Profile
//   isAuth: boolean
//   errors: any
}

type Actions = {
  setToken: (token: string | null) => void
  //   register: (user: createUser) => void
//   logout: () => void
//   cleanErrors: () => void
}

export const useAuthStore = create(
  persist<State & Actions>((set) => 
    ({
      token: null,
    //   profile: null,
    //   isAuth: false,
    //   errors: null,
      setToken: (token: string | null) =>
        set(() => ({
          token,
        //   isAuth: !!token
        })),
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
    //   getProfile: async () => {
    //     const resProfile = await profileRequest()
    //     set(() => ({
    //       profile: resProfile.data
    //     }))
    //   },
    //   logout: () => set(() => ({token: null, profile: null, isAuth: false})),
    //   cleanErrors: () => set(() => ({errors: null}))
    }),
    {
      name: "auth"
    }
  )
)