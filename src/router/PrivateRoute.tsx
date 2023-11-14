import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

type PrivateRouteProps = {
  children: JSX.Element
}

export const PrivateRoute = ({children}: PrivateRouteProps) => {

    const {isLogged} = useAuth()
    const { pathname } = useLocation()
    const lastPath = pathname

    localStorage.setItem('lastPath', lastPath);

  return (isLogged)
    ? children
    : <Navigate to="/login" />
}
