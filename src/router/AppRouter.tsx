import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { BenefitsPage, HomePage, LoginPage, RegisterPage } from '../wallet/pages'
import { AuthRoutes } from '../wallet/routes/AuthRoutes'
import { WalletFooter, WalletNavbar } from '../ui'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { useAuthStore } from '../hooks'
 
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
        {/* RUTA CON IDIOMA DEFAULT */}
        <Route path='/' element={ <HomePage /> }/>

        {/* RUTAS ACCECIBLES AL PUBLICO */}
        <Route path='/:locale' element={ <HomePage /> }/>
        <Route path='/:locale/benefits' element={ <BenefitsPage/> }/>

        {/* ROTAS SOLO PARA USUARION NO AUTENTICADOS */}
        <Route path='/:locale/register' element= {
          <PublicRoute>
            <RegisterPage/>
          </PublicRoute>
        }
        />
        <Route path='/:locale/login' element= {
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }
        />

        {/* RUTAS SOLO PARA USUARIOS AUTENTICADOS */}
        <Route path='/:locale/*' element= {
          <PrivateRoute>
            <AuthRoutes/>
          </PrivateRoute>
        }
        />

      </Routes>
      <WalletFooter/>
    </>
  )
}
