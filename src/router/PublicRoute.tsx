import {useContext} from 'react'
import { AuthContext } from '../auth/context'
import { Navigate } from 'react-router-dom'

type PrivateRouteProps = {
  children: JSX.Element
}

export const PublicRoute = ({children}: PrivateRouteProps) => {
    const {isLogged} = useContext(AuthContext)
  return (!isLogged)
    ? children
    : <Navigate to="/" />
}
