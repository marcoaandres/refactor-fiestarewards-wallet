import { tagAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys)

  const sm = defineStyle({
    p: '8px 16px',
    fontSize: '12px',
  })

const FR = definePartsStyle({
  container: {
    bg: '#faefd4',
    color: '#a17d23'
  },
})

const OH = definePartsStyle({
    container: {
        bg: '#0F0F85',
        color: '#ffffff',
    },
})

const KC = definePartsStyle({
    container: {
        bg: '#1B6E8A',
        color: '#ffffff',
    },
})

const sizes = {
    sm: definePartsStyle({ container: sm, label: sm }),
}

const tagTheme = defineMultiStyleConfig({
    sizes,
    variants: {
        FR,
        KC,
        OH
    },
    defaultProps:{
        size: 'sm',
        variant: 'FR',
    }
})

export default tagTheme
