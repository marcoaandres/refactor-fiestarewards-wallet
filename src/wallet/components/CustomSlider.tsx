// Import Swiper React components
import { Swiper } from 'swiper/react';
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


type PrimarySliderProps = {
  slides?: number
  children: React.ReactNode | React.ReactNode[]
}

export const PrimarySlider = ({children, slides = 3}: PrimarySliderProps)  => {
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
                slidesPerView: slides,
                slidesPerGroup: slides,
                centeredSlides: false,
                loop: false
              },
          }}
        >
          {children}
          
        </Swiper>
     </GridItem>
      <GridItem colSpan={1}>
        <Flex height="100%" alignItems="center" justifyContent="right">
          <Box as='button' bg="primary.100" color="white" borderRadius="full" p="1" display={{base: 'none', md: 'block'}} className='swiper-button-next-bm'>
            <ChevronRightIcon boxSize={"40px"}/>
          </Box>
        </Flex>
      </GridItem>
  </Grid>
  )
}
