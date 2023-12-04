import { Button } from '@chakra-ui/react'
import { useSwiper } from "swiper/react"

export const SwiperButtonPrev = () => {
  const swiper = useSwiper();

  return (
    <Button onClick={ () =>swiper.slidePrev() }>Prev</Button>
  )
}
