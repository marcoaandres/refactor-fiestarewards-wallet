// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PrimaryCard } from './PrimaryCard';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const PrimarySlider = () => {
  return (
  <Grid templateColumns='repeat(12, 1fr)' gap="4">
      <GridItem colSpan={1}>
          <Flex height="100%" alignItems="center" justifyContent="left">
            <Box as='button'  bg="primary.100" color="white" borderRadius="full" p="1" display={{base: 'none', md: 'block'}} className='swiper-button-prev-bm'>
              <ChevronLeftIcon boxSize={"40px"}/>
            </Box>
          </Flex>
      </GridItem>
     <GridItem colSpan={{base:12, md:10}} pb="32px">
        <Swiper
          modules={[Keyboard, Pagination, Navigation]}
          slidesPerGroup={1}
          spaceBetween={30}
          loop
          centeredSlides
          navigation= {{
            nextEl: ".swiper-button-next-bm",
            prevEl: ".swiper-button-prev-bm",
          }}
          breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                centeredSlides: false,
                loop: false
              },
          }}
        >
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
          
        </Swiper>
     </GridItem>
      <GridItem colSpan={1}>
        <Flex height="100%" alignItems="center" justifyContent="right">
          <Box bg="primary.100" color="white" borderRadius="full" p="1" display={{base: 'none', md: 'block'}} className='swiper-button-next-bm'>
            <ChevronRightIcon boxSize={"40px"}/>
          </Box>
        </Flex>
      </GridItem>
  </Grid>
  )
}
