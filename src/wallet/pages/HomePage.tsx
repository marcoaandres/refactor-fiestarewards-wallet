import { useEffect, useState } from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { PrimaryBanner, PrimarySlider, PrimarySection, SectionWithImage, PrimaryCard } from '../components'
import Home1  from '../../assets/img/home_1.jpg'
import Home2  from '../../assets/img/home_2.jpg'
import BannerHome from '../../assets/img/banner_1.jpg'
import { SwiperSlide } from 'swiper/react'
import { TirthCard } from '../components/TirthCard'
import { useAuth } from '../../hooks/useAuth'
import { PrimaryModal } from '../components/PrimaryModal'
import { ResponseMemberships, ResponsePromotion } from '../../interfaces/interfaces'
import { AuxCard } from '../components/AuxCard'

export const HomePage = () => {
  const {isLogged} = useAuth();
  const [promotions, setPromotions] = useState<ResponsePromotion[]>([])
  const [memberships, setMemberships] = useState<ResponseMemberships[]>([])
  useEffect(() => {
    fetch(' http://localhost:5000/promotions')
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      setPromotions(data)
    })  
  }, [])

  useEffect(() => {
    fetch(' http://localhost:5000/memberships')
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      setMemberships(data)
    })  
  }, [])
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalPromo, setModalPromo] = useState<ResponsePromotion>();

  const showModalPromotion = (id: string) => {
    const promo = promotions.find(({idPromo}) => idPromo == id)
    setModalPromo(promo)
    onOpen()
  }

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
        node={<Flex justifyContent="right" mt="36px"><Button as={ReactLink} to='/benefits'>Ver todos</Button></Flex>}
      >
        <PrimarySlider>
          {
            promotions.map(({idPromo, titulo, texto, terminos, producto, imagenSlider, url, textoBoton}) => (
              <SwiperSlide key={idPromo}>
                <PrimaryCard 
                  id={idPromo}
                  image={imagenSlider}
                  imageDescription={idPromo} 
                  title={titulo}
                  description={texto}
                  terms={terminos}
                  tag={producto}
                  redirect={url}
                  textButton={textoBoton}
                  showModalPromotion={showModalPromotion} />
            </SwiperSlide>
            ))
          }
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
      >
        <PrimarySlider>
          {
            memberships.map(({ desktopImage, titleBenefits, nameMembership, benefits, url, buttonText   }) => (
              <SwiperSlide key={titleBenefits}>
                <AuxCard 
                  image={desktopImage} 
                  imageDescription={'Imagen random'}
                  title={nameMembership} 
                  subtitle={titleBenefits}
                  benefits={benefits}
                  redirect={url}
                  textButton={buttonText}
                />
              </SwiperSlide>
            ))
          }    
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

      {
        !!modalPromo && 
        <PrimaryModal 
          isOpen={isOpen} 
          onClose={onClose}  
          terminos={modalPromo.terminos} 
          textoBoton={modalPromo.textoBoton}
          redirectTo={modalPromo.url}
        />
      }
    </>
  )
}
