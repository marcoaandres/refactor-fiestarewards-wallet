import { Navigate, Route, Routes } from 'react-router-dom'
import { BenefitsPage, DemoPage, HomePage, LoginPage, RegisterPage } from '../pages'
import {Navbar} from '../../ui'
 
export const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={ <HomePage/> }/>
          <Route path='/benefits' element={ <BenefitsPage/> }/>
          <Route path='/register' element={ <RegisterPage/> }/>
          <Route path='/login' element={ <LoginPage/> }/>

          <Route path='/demo' element={<DemoPage/>}/>
          <Route path='/*' element={ <Navigate to ={'/'}/> }/>
      </Routes>
    </>
  )
}
