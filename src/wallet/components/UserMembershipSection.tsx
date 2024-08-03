import { Button, Flex, Text } from "@chakra-ui/react"
import { PrimarySection, PrimarySlider } from "."
import { SwiperSlide } from "swiper/react"
import { TirthCard } from "./TirthCard"
import { Link as ReactLink } from 'react-router-dom';
import { useAppSelector, usePartnerProgramStore } from "../../hooks";
import { useEffect } from "react";
import { UserMembershipSectionLoader } from "./UserMembershipSectionLoader";
import { useTranslation } from "react-i18next";


export const UserMembershipSection = () => {

    const { startLoadingPartnerPrograms } = usePartnerProgramStore()

    const {user} = useAppSelector(state => state.auth)
    const {programs, isLoadingPartnerPrograms} = useAppSelector(state => state.partnerPrograms)

    useEffect(() => {
    startLoadingPartnerPrograms()
  }, [])

  const {i18n, t} =useTranslation() 
  const currentLanguaje = i18n.resolvedLanguage 

  if(isLoadingPartnerPrograms)
    return <UserMembershipSectionLoader/>


  return (
    <>
    <PrimarySection
        title={ t('home.userMembershipSection.title', { name: `${user?.name} ${user?.lastName }` })}
        subtitle={ t('home.userMembershipSection.subtitle') }
        node={
          <>
            <Text fontSize='base' fontWeight='300' lineHeight='base' color='primary.10'>{ t('home.userMembershipSection.text') }</Text>
            <Flex justifyContent="right" mt="36px"><Button as={ReactLink} variant="outline" to={`/${currentLanguaje}/my-memberships?program=${programs[0]?.program}`}>{ t('home.userMembershipSection.button') }</Button></Flex>
          </>
        }>
        <PrimarySlider slides={2}>
          {
            programs.map(({ programImage, member, program }) => (
              <SwiperSlide key={member.ownerNumber}>
                <ReactLink to={`/${currentLanguaje}/my-memberships?program=${program}`} >
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
