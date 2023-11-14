import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

type PrivateRouteProps = {
  children: JSX.Element
}

export const PublicRoute = ({children}: PrivateRouteProps) => {
  const {isLogged} = useAuth()
  return (!isLogged)
    ? children
    : <Navigate to="/" />
}
