import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import {cardTheme} from './components/Card'
import Heading from './components/Heading'
import {settings} from './settings'
import {linkTheme} from './components/Link'
import tagTheme from './components/Tag'
import { inputTheme } from './components/Input'

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
        Link: linkTheme,
        Tag: tagTheme,
        Input: inputTheme
    },
})

export default theme