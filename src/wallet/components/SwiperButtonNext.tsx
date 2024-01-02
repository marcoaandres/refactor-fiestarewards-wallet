import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react'
import { useSwiper } from "swiper/react"

export const SwiperButtonNext = () => {

    const swiper = useSwiper();

  return (
    <Button onClick={ () =>swiper.slideNext() }
      borderRadius="full"
      padding="8px"
      height="auto"
    >
      <ChevronRightIcon boxSize="5" />
      
    </Button>
  )
}
