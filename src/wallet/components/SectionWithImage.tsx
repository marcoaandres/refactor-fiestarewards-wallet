import { Box, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react"

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
      <Box w={{base:'100%', "md": '100%', "xl": '50%'}} order={ revert ? 2 : 1}>
            <Image src={picture}/>
        </Box>
        <Box  w={{base:'100%', "md": '100%', "xl": '50%'}} order={ revert ? 1 : 2}>
          <Grid templateColumns='repeat(12, 1fr)' gap="4">
              <GridItem colSpan={{base:1, xl:2}}/>
              <GridItem colSpan={{base:10, xl:8}}>
                  <Box my="56px">
                      <Heading size="title">{title}</Heading>
                      <Heading size="subtitle">{subtitle}</Heading>
                      {child}
                  </Box>
              </GridItem>
              <GridItem colSpan={{base:1, xl:2}}/>
          </Grid>
        </Box>
        
    </Flex>
  )
}
