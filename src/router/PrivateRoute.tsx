import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/context'

type PrivateRouteProps = {
  children: JSX.Element
}

export const PrivateRoute = ({children}: PrivateRouteProps) => {

    const {isLogged} = useContext(AuthContext)

    const { pathname } = useLocation()
    const lastPath = pathname

    localStorage.setItem('lastPath', lastPath);

  return (isLogged)
    ? children
    : <Navigate to="/login" />
}
