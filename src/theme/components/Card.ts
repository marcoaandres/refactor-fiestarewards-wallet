import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    
  },
  header: {
  },
  body: {
    
  },
  footer: {
  },
})


export  const cardTheme = defineMultiStyleConfig({ baseStyle })