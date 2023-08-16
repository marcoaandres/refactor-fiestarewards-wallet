import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import {cardTheme} from './components/Card'
import Heading from './components/Heading'
import {settings} from './settings'
import {linkTheme} from './components/Link'

const theme = extendTheme({
    ...settings,
    fonts: {
        heading: `'Gotham', 'sans-serif'`,
        body: `'Gotham', 'sans-serif'`,
    },
    components: {
        Button,
        Heading,
        Card: cardTheme,
        Link: linkTheme
    },
})

export default theme