import { Link as ReactLink } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import Home1  from '../../assets/img/home_1.jpg'
import Home2  from '../../assets/img/home_2.jpg'
import BannerHome from '../../assets/img/banner_1.jpg'
import { useAppSelector  } from '../../hooks'
import { PrimaryBanner, SectionWithImage, UserMembershipSection, PromotionSection, MembershipSection } from '../components'

export const HomePage = () => {
  
  const { status } = useAppSelector(state => state.auth)
  
  const isLogged = (status === 'authenticated')

  return (
    <>  
      { 
      !isLogged && <PrimaryBanner
        title="Fiesta Rewards Wallet"
        imageDescription="Descipción de imagen"
        image={BannerHome}
        child={<Button as={ReactLink} to="/login" display={{base: 'none', md:'block'}}>Conocer más</Button>}
      />
      }
      {
        isLogged &&
        <UserMembershipSection />
      }
      
      <PromotionSection/>

      <SectionWithImage 
        title="Discover Fiesta Rewards" 
        subtitle="You'll be surprised by the Fiesta Rewards experience at all of our destinations. Sign up today for free." 
        picture={Home1}
        background="primary.60"
        child={<Button as={ReactLink} to='/login' mt="6">Sign up</Button>}
      />
      <MembershipSection/>
      <SectionWithImage 
        title="¡Comencemos!" 
        subtitle="Este espacio es para ti, descubre todo lo que puedes hacer con tus membresías." 
        picture={Home2}
        background="primary.60"
        revert={true}
        child={<Button as={ReactLink} to='/login' mt="6">Ingresar</Button>}
      />
    </>
  )
}
