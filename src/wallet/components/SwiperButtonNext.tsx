import { Button } from '@chakra-ui/react'
import { useSwiper } from "swiper/react"

export const SwiperButtonNext = () => {

    const swiper = useSwiper();

  return (
    <Button onClick={ () =>swiper.slideNext() }>Next</Button>
  )
}
