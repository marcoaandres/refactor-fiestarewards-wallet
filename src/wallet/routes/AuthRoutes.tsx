import { Route, Routes } from 'react-router-dom'
import { MembershipDetails } from '../pages/MembershipDetailsPage'
import { ProfilePage } from '../pages/ProfilePage'

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/my-memberships' element={ <MembershipDetails/> }/>
        <Route path='/my-profile' element={ <ProfilePage/> }/>
      </Routes>
    </>
  )
}








