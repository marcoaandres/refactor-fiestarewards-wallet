import { Box, Flex, Grid, GridItem, Image, Spacer, Text } from "@chakra-ui/react"
import logoPosadas from "../assets/img/Posadas.png";
import { useTranslation } from "react-i18next";

export const WalletFooter = () => {

    const {t} = useTranslation()
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
                    <Text fontSize="sm" fontWeight="light" mt={{base:"24px", md:"0"}}>Copyright © 2024, {t('footer.copy')}</Text>
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
