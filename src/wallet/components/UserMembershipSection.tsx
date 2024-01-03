import { Button, Flex, Text } from "@chakra-ui/react"
import { PrimarySection, PrimarySlider } from "."
import { SwiperSlide } from "swiper/react"
import { TirthCard } from "./TirthCard"
import { Link as ReactLink } from 'react-router-dom';
import { useAppSelector, usePartnerProgramStore } from "../../hooks";
import { useEffect } from "react";
import { UserMembershipSectionLoader } from "./UserMembershipSectionLoader";


export const UserMembershipSection = () => {

    const { startLoadingPartnerPrograms } = usePartnerProgramStore()

    const {user} = useAppSelector(state => state.auth)
    const {programs, isLoadingPartnerPrograms} = useAppSelector(state => state.partnerPrograms)

    useEffect(() => {
    startLoadingPartnerPrograms()
  }, [])

  if(isLoadingPartnerPrograms)
    return <UserMembershipSectionLoader/>


  return (
    <>
    <PrimarySection
        title={`Hola, ${user?.name} ${user?.lastName}`}
        subtitle="Estas son tus membresías. Para ver más información, haz clic sobre la tarjeta."
        node={
          <>
            <Text fontSize='base' fontWeight='300' lineHeight='base' color='primary.10'>Si no ubicas alguna de tus membresías comunícate a la Línea Fiesta Rewards  (*8585).</Text>
            <Flex justifyContent="right" mt="36px"><Button as={ReactLink} variant="outline" to={`/my-memberships?program=${programs[0]?.program}`}>Ver todos</Button></Flex>
          </>
        }>
        <PrimarySlider slides={2}>
          {
            programs.map(({ programImage, member, program }) => (
              <SwiperSlide key={member.ownerNumber}>
                <ReactLink to={`/my-memberships?program=${program}`} >
                  <TirthCard 
                    image={programImage}
                    imageDescription="Description"
                    membershipNumber={member.ownerNumber}
                    pointsAvailable={member.availablePoints}  />
                </ReactLink>
              </SwiperSlide>
            ))
          }
        </PrimarySlider>
      </PrimarySection>
    
    </>
  )
}
