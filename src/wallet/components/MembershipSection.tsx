import { useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import { useAppSelector, useMembershipStore } from '../../hooks'
import { AuxCard,PrimarySection, PrimarySlider, SectionLoader } from './'
import { useTranslation } from 'react-i18next'

export const MembershipSection = () => {

    const { startLoadingMemberships } = useMembershipStore()
    const { memberships, isLoadingMemberships } = useAppSelector(state => state.memberships)
    useEffect(() => {
        startLoadingMemberships()
    }, [])

    const {t} = useTranslation()

    if(isLoadingMemberships)
    return <SectionLoader/>
  return (
    
    <PrimarySection
        title={ t('home.membershipPromotionSection.title') }
        subtitle={ t('home.membershipPromotionSection.subtitle') }
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
