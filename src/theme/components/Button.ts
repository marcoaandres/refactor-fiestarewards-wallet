import { defineStyleConfig  } from '@chakra-ui/react'

const Button =  defineStyleConfig({
    baseStyle: {
        fontWeight: 'light', 
        px: 4,
        py: 2,
        fontSize: 'md',
        borderRadius: 'base',
    },
    variants: {
        'primary': {
            bg: 'primary.10',
            color: 'white',
            _hover: {
                bg: 'primary.100',
                transition: '300ms',
                _disabled: {
                    bg: 'neutral.20',
                    opacity: 1,
                }
            },
            _disabled: {
                bg: 'neutral.20',
                opacity: 1,
            }
        },
        'secondary': {
            bg: 'white',
            color: 'primary.10',
            _hover: {
                bg: 'primary.50',
                transition: '300ms',
                _disabled: {
                    bg: 'neutral.20',
                    opacity: 1,
                }
            },
        },
        'ghost':{
            color: 'primary.10',
            _hover: {
                bg: 'primary.50',
                transition: '300ms',
                _disabled: {
                    bg: 'neutral.20',
                    opacity: 1,
                }
            },
        }
    },
    defaultProps: {
        variant: 'primary',
        size: 'sm',
    },
})
    

export default Button