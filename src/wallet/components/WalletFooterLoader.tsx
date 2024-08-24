import { Box, Flex, Grid, GridItem, Image, Skeleton, Spacer, Text } from "@chakra-ui/react"
import logoPosadas from "../assets/img/Posadas.png";
import { useTranslation } from "react-i18next";

export const WalletFooterLoader = () => {

  return (
    <>
        <Skeleton
            startColor='primary.5'
            endColor='primary.40'
            width='100%'
            height='75px' />
        <Grid templateColumns='repeat(12, 1fr)' gap="4" boxShadow={{base: "base"}} >
        <GridItem colSpan={1}/>
        <GridItem colSpan={10} my="64px">
            <Flex flexDirection={{ base: "column", md:"row" }}>
                <Box>
                <Skeleton
                    startColor='primary.5'
                    endColor='primary.40'
                    width={'200px'}
                    height={{base: '40px', md: '30px'}} />
                </Box>
                <Spacer/>
                <Box>
                <Skeleton
                    startColor='primary.5'
                    endColor='primary.40'
                    mt={{base: '16px'}}
                    width={{base: '250px', md: '350x'}}
                    height='20px' />
                </Box>
            </Flex>
            <Box>
            </Box>
        </GridItem>
        <GridItem colSpan={1}/>
    </Grid>
    </>
  )
}
