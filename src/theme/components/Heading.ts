import { defineStyleConfig } from "@chakra-ui/react";


const Headings = defineStyleConfig({
    sizes: {
        'title': {
            fontSize: '4xl',
            fontWeight: '500',
            lineHeight: 'base',
            color: 'primary.10',
        },
        'subtitle': {
            fontSize: 'xl',
            fontWeight: '350',
            lineHeight: 'base',
            color: 'neutral.10',
        },
        'title-base':{
            fontSize: '2xl',
            fontWeight: '500',
            lineHeight: 'base',
            color: 'primary.10',
        },
        'subtitle-base': {
            fontSize: 'md',
            fontWeight: '350',
            lineHeight: 'base',
            color: 'neutral.10',
        },

    }
})

export default Headings