import { Box, Flex, Heading, Image } from "@chakra-ui/react"

type SectionWithImageProps = {
  title: string,
  subtitle: string,
  picture: string,
  background: string,
  revert?: boolean,
  child: React.ReactNode;
}
export const SectionWithImage = ({title, subtitle, picture, background, child, revert} : SectionWithImageProps) => {
  return (
    <Flex alignItems='center' backgroundColor={background} flexDirection={{
      base: 'column',
      md: 'column',
      xl: 'row'
    }}>
      <Box w={['100%', '100%', '50%']} order={ revert ? 2 : 1}>
            <Image src={picture}/>
        </Box>
        <Box  w={['100%', '100%', '50%']} order={ revert ? 1 : 2}>
            <Flex alignItems='center' justifyContent='center'>
              <Box w={['100%', '70%' ]}
              p={{
                base: '64px 24px',
                md: '0'
              }}  
                >
                <Heading size="title" mb="24px">{title}</Heading>
                <Heading size="subtitle">{subtitle}</Heading>
                {child}
              </Box>
            </Flex>
        </Box>
        
    </Flex>
  )
}
