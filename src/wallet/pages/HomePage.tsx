import { Link as ReactLink } from 'react-router-dom'
import { Box, Button, Flex, FormLabel, Grid, GridItem, Heading, Input, InputGroup, Stack, Text } from '@chakra-ui/react'
import { PrimaryBanner, PrimarySlider, PrimarySection, SectionWithImage, PrimaryCard } from '../components'
// import { BenefitsCard } from '../components';
import Home1  from '../../assets/img/home_1.jpg'
import Home2  from '../../assets/img/home_2.jpg'
import BannerHome from '../../assets/img/banner_1.jpg'
import { SwiperSlide } from 'swiper/react'
import { TirthCard } from '../components/TirthCard'
import { useAuth } from '../../hooks/useAuth'

export const HomePage = () => {
  const {isLogged} = useAuth();
  return (
    <>  
      { 
      !isLogged && <PrimaryBanner
        title="Fiesta Rewards Wallet"
        imageDescription="Descipción de imagen"
        image={BannerHome}
        child={<Button display={{base: 'none', md:'block'}}>Conocer más</Button>}
      />
      }
      {
        isLogged &&
        <PrimarySection
        title="Hola, Marco Andrés"
        subtitle="Estas son tus membresías. Para ver más información, haz clic sobre la tarjeta."
        node={
          <>
            <Text fontSize='base' fontWeight='300' lineHeight='base' color='primary.10'>Si no ubicas alguna de tus membresías comunícate a la Línea Fiesta Rewards  (*8585).</Text>
            <Flex justifyContent="right" mt="36px"><Button as={ReactLink} to='/'>Ver todos</Button></Flex>
          </>
        }>
        <PrimarySlider slides={2}>
          <SwiperSlide>
            <TirthCard 
              image='https://via.placeholder.com/600x365' 
              imageDescription='Green double couch with wooden legs' 
              membershipNumber='T-45561' 
              pointsAvailable='33,000' 
              contractedPoints='44,000'  />
          </SwiperSlide>
    
          <SwiperSlide>
            <TirthCard 
              image='https://via.placeholder.com/600x365' 
              imageDescription='Green double couch with wooden legs' 
              membershipNumber='453453453453' 
              pointsAvailable='220,000' 
              contractedPoints='1,200,000' />
          </SwiperSlide>
          <SwiperSlide>
            <TirthCard 
              image='https://via.placeholder.com/600x365' 
              imageDescription='Green double couch with wooden legs' 
              membershipNumber='XER32423523' 
              pointsAvailable='98,000' 
              contractedPoints='123,000' />
          </SwiperSlide>
        </PrimarySlider>
      </PrimarySection>

      }
      
      
      <PrimarySection
        title="Promociones especiales para ti"
        subtitle="Desliza y descubre todas las opciones."
        node={<Flex justifyContent="right" mt="36px"><Button as={ReactLink} to='/'>Ver todos</Button></Flex>}
        // child={<PrimarySlider/>}
      >
        <PrimarySlider>
        <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='1 Martes y jueves de puntos FR a precio especial' 
            description='1 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='1 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='1 Conocer más' />
          </SwiperSlide>
    
          <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='2 Martes y jueves de puntos FR a precio especial' 
            description='2 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='2 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='2 Conocer más' />
          </SwiperSlide>
    
          <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='3 Martes y jueves de puntos FR a precio especial' 
            description='3 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='3 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='3 Conocer más' />
          </SwiperSlide>
    
          <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='4 Martes y jueves de puntos FR a precio especial' 
            description='4 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='4 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='4 Conocer más' />
          </SwiperSlide>
    
          <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='5 Martes y jueves de puntos FR a precio especial' 
            description='5 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='5 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='5 Conocer más' />
          </SwiperSlide>
    
          <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='6 Martes y jueves de puntos FR a precio especial' 
            description='6 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='6 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='6 Conocer más' />
          </SwiperSlide>
        </PrimarySlider>
      </PrimarySection>
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
        // child={<PrimarySlider/>}
      >
        <PrimarySlider>
        <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='1 Martes y jueves de puntos FR a precio especial' 
            description='1 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='1 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='1 Conocer más' />
          </SwiperSlide>
    
          <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='2 Martes y jueves de puntos FR a precio especial' 
            description='2 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='2 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='2 Conocer más' />
          </SwiperSlide>
    
          <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='3 Martes y jueves de puntos FR a precio especial' 
            description='3 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='3 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='3 Conocer más' />
          </SwiperSlide>
    
          <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='4 Martes y jueves de puntos FR a precio especial' 
            description='4 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='4 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='4 Conocer más' />
          </SwiperSlide>
    
          <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='5 Martes y jueves de puntos FR a precio especial' 
            description='5 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='5 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='5 Conocer más' />
          </SwiperSlide>
    
          <SwiperSlide>
            <PrimaryCard 
            image='https://via.placeholder.com/274x175' 
            imageDescription='Green double couch with wooden legs' 
            title='6 Martes y jueves de puntos FR a precio especial' 
            description='6 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='6 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='6 Conocer más' />
          </SwiperSlide>
        </PrimarySlider>
      </PrimarySection>
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
