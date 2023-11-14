import { useContext } from "react"
import { AuthContext } from "../auth/context"

export const useAuth = () => {

    const {authState, login, logout} = useContext(AuthContext)
  return {
   ...authState,
    login,
    logout
  }
}
