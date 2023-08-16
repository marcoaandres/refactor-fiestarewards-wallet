import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../wallet/pages/HomePage'
import { BenefitsPage } from '../wallet/pages/BenefitsPage'
import { DemoPage } from '../wallet/pages/DemoPage'
import {Navbar} from '../ui/Navbar'
import { RegisterPage } from '../wallet/pages/RegisterPage'
import { LoginPage } from '../wallet/pages/LoginPage'
 
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
