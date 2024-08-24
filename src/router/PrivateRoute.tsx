import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks'
import i18next from 'i18next'

type PrivateRouteProps = {
  children: JSX.Element
}

export const PrivateRoute = ({children}: PrivateRouteProps) => {
  const currentLanguaje = i18next.resolvedLanguage 
    const { status } = useAppSelector(state => state.auth)
    const isLogged = (status === 'authenticated')

  return (isLogged)
    ? children
    : <Navigate to={`/${currentLanguaje}/login`} />
}
