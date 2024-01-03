import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)


const variantCustom = definePartsStyle({
    field: {
        fontFamily: 'Gotham',
        bg: 'primary.50',
        border: 'none',
        padding: '16px',
        fontSize: '16px',
        fontWeight: '350',
        color: '#4a4a4a',
        borderRadius: '4px',
        height: '9',
        _active:{
            border: '1px solid',
            borderColor: 'primary.100'
        },
        _focus:{
            border: '1px solid',
            borderColor: 'primary.100'
        },
        _invalid:{
            border: '1px solid red'
        }
      }
})

const variants = {
    custom: variantCustom
}


export const inputTheme = defineMultiStyleConfig({ 
    variants,
    defaultProps:{
        variant: "custom"
    }
 })