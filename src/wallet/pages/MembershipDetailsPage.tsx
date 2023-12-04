import { Box, Button, Flex, Grid, GridItem, Image, Progress, Spacer, Text } from "@chakra-ui/react"
import { WalletSidebar } from "../../ui"
import { PrimarySection } from "../components"
import { ChevronLeftIcon, QuestionOutlineIcon } from "@chakra-ui/icons"

export const MembershipDetails = () => {
  return (
    <>
     <Grid templateColumns='repeat(12, 1fr)' gap={{base:1, md:4}}>
        <GridItem colSpan={{base:12, md:2}}>
          <WalletSidebar/>
        </GridItem>
        <GridItem colSpan={{base: 12, md: 10}} mt={{ base: "120px", md: "0" }}>

          <PrimarySection title="Mis membresías"
            node={
              <Flex mt="8px">
                <Button 
                leftIcon={<ChevronLeftIcon   boxSize={5} ml="8px"/> } 
                variant="secondary"
                fontSize="16px" 
                fontWeight="350" 
                color="primary.10" 
                mt="16px">
                      Inicio
                </Button>
                <Spacer/>
                <Text fontSize="16px" fontWeight="300" align="right" mt="16px">
                      <QuestionOutlineIcon boxSize={3} mr="8px"/> 
                      La información mostrada puede tardar hasta 24 horas en actualizarse.
                </Text>
              </Flex>
            }
          >
            <Grid templateColumns='repeat(12, 1fr)' gap="4">
              <GridItem colSpan={{ base:12, md:5}}>
                <Image 
                borderRadius="8px"
                src='https://cms-wallet.fiestarewards.com/documents/8401127/8401240/FR_Platino.png' 
                alt='imagen de la membresía' />
              </GridItem>
              <GridItem colSpan={{ base:12, md:2}}/>
              <GridItem colSpan={{ base:12, md:5}}>
                    <Box mb="32px">
                      <Button variant="outline">
                        Ver detalle de mi membresía
                      </Button>
                      <Box mt="32px">
                        <Text fontSize="20px" color="neutral.10" fontWeight="350">Puntos disponibles</Text>
                        <Text fontSize="48px" color="primary.10" fontWeight="400">334,000</Text>  
                        <Progress value={80} borderRadius="50px" my="16px" />
                        <Text fontSize="16px" color="neutral.10" fontWeight="325">70,000 puntos necesarios para ascender a membresía FR platino</Text>
                      </Box>
                     
                    </Box>
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(12, 1fr)' gap="4" mb="56px">
              <GridItem colSpan={{ base:12}}>
                <Text fontSize="24px" color="primary.10" textAlign="center" my="16px">Próximos vencimientos</Text>
              </GridItem>

              <GridItem boxShadow='base' p="24px 32px" colSpan={{ base:12, md: 4}}>
                <Text color="neutral.10" fontWeight="350">Diciembre</Text>
                <Text color="primary.10" fontWeight="350" fontSize="24px" display="inline">100,000</Text>
                <Text color="primary.10" fontWeight="350" fontSize="16px"  display="inline">&nbsp;pts</Text>
              </GridItem>
              <GridItem boxShadow='base' p="24px 32px" colSpan={{ base:12, md: 4}}>
                <Text color="neutral.10" fontWeight="350">Enero</Text>
                <Text color="primary.10" fontWeight="350" fontSize="24px" display="inline">123,456</Text>
                <Text color="primary.10" fontWeight="350" fontSize="16px"  display="inline">&nbsp;pts</Text>
              </GridItem>
              <GridItem boxShadow='base' p="24px 32px" colSpan={{ base:12, md: 4}}>
                <Text color="neutral.10" fontWeight="350">Febrero</Text>
                <Text color="primary.10" fontWeight="350" fontSize="24px" display="inline">700</Text>
                <Text color="primary.10" fontWeight="350" fontSize="16px"  display="inline">&nbsp;pts</Text>
              </GridItem>
            </Grid>

            <Grid templateColumns='repeat(12, 1fr)' gap="4">
              <GridItem colSpan={{ base:12, md:6}}>
                  <Box>
                    <Box mb="32px">
                      <Text fontSize="24px" color="primary.10" my="16px">Puntos utilizados</Text>
                      <Text fontSize="16px" fontWeight="300">Movimientos del último mes</Text>
                    </Box>
                    <Box boxShadow='base' p="24px 32px" mb="16px">
                      <Text color="primary.10" fontWeight="350" fontSize="20px">Premium Night Redemption</Text>
                      <Flex mt="8px">
                        <Text color="neutral.10" fontWeight="300" fontSize="16px">15/09/2022</Text>
                        <Spacer/>
                        <Text color="primary.20" fontWeight="350" fontSize="16px">120,220&nbsp;pts</Text>
                      </Flex>
                    </Box>

                    <Box boxShadow='base' p="24px 32px" mb="16px">
                      <Text color="primary.10" fontWeight="350" fontSize="20px">Premium Night Redemption</Text>
                      <Flex mt="8px">
                        <Text color="neutral.10" fontWeight="300" fontSize="16px">15/09/2022</Text>
                        <Spacer/>
                        <Text color="primary.20" fontWeight="350" fontSize="16px">120,220&nbsp;pts</Text>
                      </Flex>
                    </Box>

                    <Box boxShadow='base' p="24px 32px" mb="16px">
                      <Text color="primary.10" fontWeight="350" fontSize="20px">Premium Night Redemption</Text>
                      <Flex mt="8px">
                        <Text color="neutral.10" fontWeight="300" fontSize="16px">15/09/2022</Text>
                        <Spacer/>
                        <Text color="primary.20" fontWeight="350" fontSize="16px">120,220&nbsp;pts</Text>
                      </Flex>
                    </Box>
                  </Box>
              </GridItem>
              <GridItem colSpan={{ base:12, md:6}}>
                  <Box>
                    <Box mb="32px">
                      <Text fontSize="24px" color="primary.10" my="16px">Puntos acumulados</Text>
                      <Text fontSize="16px" fontWeight="300">Movimientos del último mes</Text>
                    </Box>
                    <Box boxShadow='base' p="24px 32px" mb="16px">
                      <Text color="primary.10" fontWeight="350" fontSize="20px">Premium Night Redemption</Text>
                      <Flex mt="8px">
                        <Text color="neutral.10" fontWeight="300" fontSize="16px">15/09/2022</Text>
                        <Spacer/>
                        <Text color="primary.20" fontWeight="350" fontSize="16px">120,220&nbsp;pts</Text>
                      </Flex>
                    </Box>

                    <Box boxShadow='base' p="24px 32px" mb="16px">
                      <Text color="primary.10" fontWeight="350" fontSize="20px">Premium Night Redemption</Text>
                      <Flex mt="8px">
                        <Text color="neutral.10" fontWeight="300" fontSize="16px">15/09/2022</Text>
                        <Spacer/>
                        <Text color="primary.20" fontWeight="350" fontSize="16px">120,220&nbsp;pts</Text>
                      </Flex>
                    </Box>

                    <Box boxShadow='base' p="24px 32px" mb="16px">
                      <Text color="primary.10" fontWeight="350" fontSize="20px">Premium Night Redemption</Text>
                      <Flex mt="8px">
                        <Text color="neutral.10" fontWeight="300" fontSize="16px">15/09/2022</Text>
                        <Spacer/>
                        <Text color="primary.20" fontWeight="350" fontSize="16px">120,220&nbsp;pts</Text>
                      </Flex>
                    </Box>
                  </Box>
              </GridItem>
            </Grid>


          </PrimarySection>
        </GridItem>
      </Grid>

    </>
  )
}
