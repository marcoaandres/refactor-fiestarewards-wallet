import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks'

type PrivateRouteProps = {
  children: JSX.Element
}

export const PrivateRoute = ({children}: PrivateRouteProps) => {
    const { status } = useAppSelector(state => state.auth)
    const isLogged = (status === 'authenticated')

  return (isLogged)
    ? children
    : <Navigate to="/:locale/login" />
}
