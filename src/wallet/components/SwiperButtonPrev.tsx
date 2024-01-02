import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react'
import { useSwiper } from "swiper/react"

export const SwiperButtonPrev = () => {
  const swiper = useSwiper();

  return (
    <Button onClick={ () =>swiper.slidePrev() }
      borderRadius="full"
      padding="8px"
      height="auto"
    >
      
      <ChevronLeftIcon boxSize="5" />
    </Button>
  )
}
