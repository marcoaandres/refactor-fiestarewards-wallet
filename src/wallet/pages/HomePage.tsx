import { Link as ReactLink } from 'react-router-dom'
import { Button, Flex } from '@chakra-ui/react'
import { PrimaryBanner, PrimarySlider, PrimarySection, SectionWithImage } from '../components'
// import { BenefitsCard } from '../components';
import Home1  from '../../assets/img/home_1.jpg'
import Home2  from '../../assets/img/home_2.jpg'
import BannerHome from '../../assets/img/banner_1.jpg'

export const HomePage = () => {
  return (
    <>  
      <PrimaryBanner
        title="Fiesta Rewards Wallet"
        imageDescription="Descipción de imagen"
        image={BannerHome}
        child={<Button display={{base: 'none', md:'block'}}>Conocer más</Button>}
      />
      <PrimarySection
        title="Promociones especiales para ti"
        subtitle="Desliza y descubre todas las opciones."
        node={<Flex justifyContent="right" mt="36px"><Button as={ReactLink} to='/'>Ver todos</Button></Flex>}
        child={<PrimarySlider/>}
      />
      <SectionWithImage 
        title="Discover Fiesta Rewards" 
        subtitle="You'll be surprised by the Fiesta Rewards experience at all of our destinations. Sign up today for free." 
        picture={Home1}
        background="primary.60"
        child={<Button as={ReactLink} to='/login' mt="6">Sign up</Button>}
      />
      <PrimarySection
        title="Nuestras membresías"
        subtitle="Asómbrate con todo lo que tenemos para ti."
        child={<PrimarySlider/>}
      />
      <SectionWithImage 
        title="¡Comencemos!" 
        subtitle="Este espacio es para ti, descubre todo lo que puedes hacer con tus membresías." 
        picture={Home2}
        background="primary.60"
        revert={true}
        child={<Button as={ReactLink} to='/login' mt="6">Ingresar</Button>}
      />



    {/* item nuestras membresias  */}
      {/* <BenefitsCard
        image='https://via.placeholder.com/274x175' 
        imageDescription='Green double couch with wooden legs' 
        title='Live Aqua Residence Club' 
        subtitle='Club de Residencias Vacacionales y experiencias de viaje'
        benefits={['Early Check in y Late Check out.', 'Up grade de habitación.', '25% o 15% de descuento en servicio de Spa.', '25% de descuento en alimentos y bebidas.']} 
        redirect='https://wallet.fiestarewards.com' 
        textButton='Más información'
      /> */}
    </>
  )
}
