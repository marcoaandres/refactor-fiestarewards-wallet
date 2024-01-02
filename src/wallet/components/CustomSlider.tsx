import { Button, Flex, Grid, GridItem } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

type PrimarySliderProps = {
  slides?: number,
  children: React.ReactNode | React.ReactNode[],
}

export const PrimarySlider = ({children, slides = 3}: PrimarySliderProps)  => {
  
  const swiperRef = useRef<SwiperType>()
  const btnPrev= useRef<HTMLDivElement>()
  const btnNext = useRef<HTMLDivElement>()

  const handlerClickPrev = () =>{
    swiperRef.current?.slidePrev()
  }

  const handlerClickNext = () =>{
    swiperRef.current?.slideNext()
  }

  return (
    <Grid templateColumns='repeat(12, 1fr)' gap="4">
      <GridItem colSpan={{md:1, '2xl':2}}></GridItem>
      <GridItem colSpan={{base:12, md:10, '2xl': 8}} pb="32px">
        <Swiper
          modules={[Keyboard, Pagination, Navigation]}
          slidesPerGroup={1}
          spaceBetween={16}
          loop={false}
          navigation={{
           prevEl: btnPrev.current, 
           nextEl: btnNext.current, 
          }}
          breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                centeredSlides: true
              },
              480: {
                slidesPerView: 1.2,
              },
              695: {
                slidesPerView: 2,
                slidesPerGroup: 3,

              },
              1024: {
                slidesPerView: slides,
                slidesPerGroup: slides,
                centeredSlides: false,
              },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
       }}
        >
          {children}
          <Flex mt="3" gap="2" justifyContent="center" display={{ base: 'none', md:'flex' }}>
          <Button onClick={ () => handlerClickPrev() }
            borderRadius="full"
            padding="8px"
            height="auto"
          >
            
            <ChevronLeftIcon boxSize="5" />
          </Button>

          <Button onClick={ () => handlerClickNext() }
              borderRadius="full"
              padding="8px"
              height="auto"
            >
              <ChevronRightIcon boxSize="5" />
              
            </Button>
          </Flex>
        </Swiper>
      </GridItem>
      <GridItem colSpan={{md:1, '2xl':2}}></GridItem>
    </Grid>
  )
}
