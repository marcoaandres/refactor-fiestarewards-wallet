import { Box, Flex, Grid, GridItem, Image, Spacer, Text } from "@chakra-ui/react"
import logoPosadas from "../assets/img/Posadas.png";

export const WalletFooter = () => {
  return (
    <>
        <Box bgColor="primary.10" height="75px"></Box>
        <Grid templateColumns='repeat(12, 1fr)' gap="4" boxShadow={{base: "base"}} >
        <GridItem colSpan={1}/>
        <GridItem colSpan={10} my="64px">
            <Flex flexDirection={{ base: "column", md:"row" }}>
                <Box>
                    <Image width="200px" src={logoPosadas} />
                </Box>
                <Spacer/>
                <Box>
                    <Text fontSize="sm" fontWeight="light" mt={{base:"24px", md:"0"}}>Copyright © 2024, All rights reserved.</Text>
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
