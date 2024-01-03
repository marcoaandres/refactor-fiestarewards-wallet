import { useEffect, useMemo } from "react"
import { Link as ReactLink, useLocation } from "react-router-dom"
import { Box, Button, Flex, Grid, GridItem, Image, Progress, Spacer, Text } from "@chakra-ui/react"
import { ChevronLeftIcon, QuestionOutlineIcon } from "@chakra-ui/icons"
import { useAppSelector, usePartnerProgramStore } from "../../hooks"
import { PrimarySection } from "../components"
import { WalletSidebar } from "../../ui"
import { MembershipDetailSectionLoader } from "../components/MembershipDetailSectionLoader"

export const MembershipDetails = () => {

  const { programs } = useAppSelector( state => state.partnerPrograms )
  const { isLoadingPartnerPrograms, startLoadingPartnerPrograms } = usePartnerProgramStore()
  const query =  new URLSearchParams(useLocation().search);
  const queryProgram = query.get('program')

  useEffect(() => {
    startLoadingPartnerPrograms()
  }, [])

  const program = useMemo(() => programs.find((el) => ( el.program === queryProgram )), [queryProgram, programs])
  const sideBarPrograms = programs.map((el) => ( el.program ))

  {
    if(isLoadingPartnerPrograms)
    return <MembershipDetailSectionLoader/>
     return (
    
      <>
       <Grid templateColumns='repeat(12, 1fr)' gap={{base:1, md:4}}>
          <GridItem colSpan={{base:12, md:3, lg: 2}}>
            <WalletSidebar programs={sideBarPrograms} />
          </GridItem>
          <GridItem colSpan={{base: 12, md: 9, lg: 10}} mt={{ base: "120px", md: "0" }}>
  
            <PrimarySection title="Mis membresías"
              node={
                <Flex mt="8px">
                  <Button as={ReactLink} 
                  to="/"
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
              <Grid templateColumns='repeat(12, 1fr)' gap="1">
                <GridItem colSpan={{ base:12, md:5, lg:5}}>
                  <Image 
                  borderRadius="8px"
                  src={program?.programImage}
                  alt='imagen de la membresía' />
                </GridItem>
                <GridItem colSpan={{ base:12, md: 1, lg:2}}/>
                <GridItem colSpan={{ base:12, md:6, lg:5}}>
                        <Box my="32px">
                          <Text fontSize="20px" color="neutral.10" fontWeight="350">Puntos disponibles</Text>
                            <Text fontSize="48px" color="primary.10" fontWeight="400">{program?.member.availablePoints}</Text>  
                          <Box display={program?.member.pointsNextLevel ? 'block': 'none'}>
                            <Progress value={50} borderRadius="50px" my="16px" />
                            <Text fontSize="16px" color="neutral.10" fontWeight="325">{program?.member.pointsNextLevel} puntos necesarios para ascender a membresía FR {program?.member.nextLevel}</Text>
                          </Box>
                        </Box>                       
                </GridItem>
              </Grid>
  
              {/* <Grid templateColumns='repeat(12, 1fr)' gap="4" mb="56px">
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
              </Grid> */}
  
              <Grid templateColumns='repeat(12, 1fr)' gap="4">
                <GridItem colSpan={{ base:12, md:6}} display={program?.Redemtions ? 'block': 'none'}>
                    <Box>
                      <Box mb="32px">
                        <Text fontSize="24px" color="primary.10" my="16px">Puntos utilizados</Text>
                        <Text fontSize="16px" fontWeight="300">Movimientos del último mes</Text>
                      </Box>
                      {
                        program?.Redemtions?.map((el, i) => (
                          <Box boxShadow='base' p="24px 32px" mb="16px" key={`redemtion-${i}`}>
                            <Text color="primary.10" fontWeight="350" fontSize="20px">{el.concept}</Text>
                            <Flex mt="8px">
                              <Text color="neutral.10" fontWeight="300" fontSize="16px">{el.processDate}</Text>
                              <Spacer/>
                              <Text color="primary.20" fontWeight="350" fontSize="16px">{el.points}&nbsp;pts</Text>
                            </Flex>
                          </Box>
                        ))
                      }
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base:12, md:6}} display={program?.accreditations ? 'block': 'none'}>
                    <Box>
                      <Box mb="32px">
                        <Text fontSize="24px" color="primary.10" my="16px">Puntos acumulados</Text>
                        <Text fontSize="16px" fontWeight="300">Movimientos del último mes</Text>
                      </Box>
                      {
                        program?.accreditations?.map((el, i) => (
                          <Box key={`accreditation-${i}`} boxShadow='base' p="24px 32px" mb="16px">
                            <Text color="primary.10" fontWeight="350" fontSize="20px">{el.concept}</Text>
                            <Flex mt="8px">
                              <Text color="neutral.10" fontWeight="300" fontSize="16px">{el.processDate}</Text>
                              <Spacer/>
                              <Text color="primary.20" fontWeight="350" fontSize="16px">{el.points}&nbsp;pts</Text>
                            </Flex>
                          </Box>
                        ))
                      }
                      </Box>
                </GridItem>
              </Grid>
  
  
            </PrimarySection>
          </GridItem>
        </Grid>
  
      </>
    )
  }
  
}
