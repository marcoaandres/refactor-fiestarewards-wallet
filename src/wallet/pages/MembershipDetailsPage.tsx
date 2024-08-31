import { useEffect, useMemo } from "react"
import { Link as ReactLink, useLocation } from "react-router-dom"
import { Box, Button, Flex, Grid, GridItem, Image, Progress, Spacer, Text } from "@chakra-ui/react"
import { ChevronLeftIcon, QuestionOutlineIcon } from "@chakra-ui/icons"
import { useAppSelector, usePartnerProgramStore } from "../../hooks"
import { PrimarySection } from "../components"
import { WalletSidebar } from "../../ui"
import { MembershipDetailSectionLoader } from "../components/MembershipDetailSectionLoader"
import {formatDate, formatNumbers, getPorcentProgress} from "../../helpers/helpers"
import { useTranslation } from "react-i18next"

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

  const {t} = useTranslation()
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
  
            <PrimarySection title={ t('myMemberships.mainSection.title') }
              node={
                <Flex mt="8px">
                  <Button as={ReactLink} 
                  to="/"
                  leftIcon={<ChevronLeftIcon   boxSize={5} ml={{base:"0", md:"8px"}}/> } 
                  variant="secondary"
                  fontSize="16px" 
                  fontWeight="350" 
                  color="primary.10" 
                  mt="16px">
                        { t('myMemberships.mainSection.button') }
                  </Button>
                  <Spacer/>
                  <Text fontSize="16px" fontWeight="300" align="right" mt="16px">
                        <QuestionOutlineIcon boxSize={3} mr="8px"/> 
                        { t('myMemberships.mainSection.textInfo') }
                  </Text>
                </Flex>
              }
            >
              <Grid templateColumns='repeat(12, 1fr)' gap="1" my="32px">
                <GridItem colSpan={{ base:12, md:5, lg:5}}>
                  <Image 
                  borderRadius="8px"
                  src={program?.programImage}
                  alt='imagen de la membresía' />
                </GridItem>
                <GridItem colSpan={{ base:12, md: 1, lg:2}}/>
                <GridItem colSpan={{ base:12, md:6, lg:5}}>
                        <Box my="32px">
                          <Text fontSize="20px" color="neutral.10" fontWeight="350">{ t('myMemberships.cardInfoSection.availablePoints') }</Text>
                            <Text fontSize="48px" color="primary.10" fontWeight="400">{formatNumbers(program?.member.availablePoints ? program?.member.availablePoints : '0')}</Text>  
                          <Box display={program?.member.pointsNextLevel ? 'block': 'none'}>
                            <Progress value={program?.member.availablePoints && program?.member.pointsNextLevel ? getPorcentProgress(program?.member.availablePoints, program?.member.pointsNextLevel) : 0} borderRadius="50px" my="16px" />
                            <Text fontSize="16px" color="neutral.10" fontWeight="325">{formatNumbers(program?.member.pointsNextLevel ? program?.member.pointsNextLevel : '0')} { t('myMemberships.cardInfoSection.text', {level: program?.member.nextLevel}) } </Text>
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
                        <Text fontSize="24px" color="primary.10" my="16px">{ t('myMemberships.redemtionSection.title') }</Text>
                        <Text fontSize="16px" fontWeight="300">{ t('myMemberships.redemtionSection.subtitle') }</Text>
                      </Box>
                      {
                        program?.Redemtions?.map((el, i) => (
                          <Box boxShadow='base' p="24px 32px" mb="16px" key={`redemtion-${i}`}>
                            <Text color="primary.10" fontWeight="350" fontSize="20px">{el.concept}</Text>
                            <Flex mt="8px">
                              <Text color="neutral.10" fontWeight="300" fontSize="16px">{formatDate(el.processDate)}</Text>
                              <Spacer/>
                              <Text color="primary.20" fontWeight="350" fontSize="16px">{formatNumbers(el ? el.points : '0' )}&nbsp;pts</Text>
                            </Flex>
                          </Box>
                        ))
                      }
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base:12, md:6}} display={program?.accreditations ? 'block': 'none'}>
                    <Box>
                      <Box mb="32px">
                        <Text fontSize="24px" color="primary.10" my="16px">{ t('myMemberships.accreditationSection.title') }</Text>
                        <Text fontSize="16px" fontWeight="300">{ t('myMemberships.accreditationSection.subtitle') }</Text>
                      </Box>
                      {
                        program?.accreditations?.map((el, i) => (
                          <Box key={`accreditation-${i}`} boxShadow='base' p="24px 32px" mb="16px">
                            <Text color="primary.10" fontWeight="350" fontSize="20px">{el.concept}</Text>
                            <Flex mt="8px">
                              <Text color="neutral.10" fontWeight="300" fontSize="16px">{formatDate(el.processDate)}</Text>
                              <Spacer/>
                              <Text color="primary.20" fontWeight="350" fontSize="16px">{formatNumbers(el ? el.points : '0' )}&nbsp;pts</Text>
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
