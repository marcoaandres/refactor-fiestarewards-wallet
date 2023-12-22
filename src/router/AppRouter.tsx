import { Route, Routes } from 'react-router-dom'
import { BenefitsPage, HomePage, LoginPage, RegisterPage } from '../wallet/pages'
import { AuthRoutes } from '../wallet/routes/AuthRoutes'
import { WalletNavbar } from '../ui'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { useAuthStore } from '../hooks'
import { useEffect } from 'react'
 
export const AppRouter = () => {

  //* Validacion para saber si el usuario esta autenticado o no en base al jwt
  const {checkAuthToken, status} = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if(status === 'checking')
  return 'cargando...'

  return (
    <>
      <WalletNavbar/>
      <Routes>

        {/* RUTAS ACCECIBLES AL PUBLICO */}
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/benefits' element={ <BenefitsPage/> }/>

        {/* ROTAS SOLO PARA USUARION NO AUTENTICADOS */}
        <Route path='/register' element= {
          <PublicRoute>
            <RegisterPage/>
          </PublicRoute>
        }
        />
        <Route path='/login' element= {
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }
        />

        {/* RUTAS SOLO PARA USUARIOS AUTENTICADOS */}
        <Route path='/*' element= {
          <PrivateRoute>
            <AuthRoutes/>
          </PrivateRoute>
        }
        />

      </Routes>
    </>
  )
}
