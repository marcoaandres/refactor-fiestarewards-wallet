import { useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import { useAppSelector, useMembershipStore } from '../../hooks'
import { AuxCard,PrimarySection, PrimarySlider, SectionLoader } from './'

export const MembershipSection = () => {

    const { startLoadingMemberships } = useMembershipStore()
    const { memberships, isLoadingMemberships } = useAppSelector(state => state.memberships)
    useEffect(() => {
        startLoadingMemberships()
    }, [])

    if(isLoadingMemberships)
    return <SectionLoader/>
  return (
    
    <PrimarySection
        title="Nuestras membresías"
        subtitle="Asómbrate con todo lo que tenemos para ti."
      >
        <PrimarySlider>
          {
            memberships.map(({ desktopImage, titleBenefits, nameMembership, benefits, url, buttonText   }) => (
              <SwiperSlide key={titleBenefits}>
                <AuxCard 
                  image={desktopImage} 
                  imageDescription={'Imagen random'}
                  title={nameMembership} 
                  subtitle={titleBenefits}
                  benefits={benefits}
                  redirect={url}
                  textButton={buttonText}
                />
              </SwiperSlide>
            ))
          }    
        </PrimarySlider>
      </PrimarySection>
  )
}
