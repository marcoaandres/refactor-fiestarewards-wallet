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

    const {i18n, t} = useTranslation()
    const currentLanguaje = i18n.resolvedLanguage 
  const lang =  currentLanguaje == 'en' ? 'En' : ''

    if(isLoadingMemberships)
    return <SectionLoader/>
  return (
    
    <PrimarySection
        title={ t('home.membershipPromotionSection.title') }
        subtitle={ t('home.membershipPromotionSection.subtitle') }
      >
        <PrimarySlider>
          {
            memberships.map((membersahihp) => (
              <SwiperSlide key={membersahihp['id']}>
                <AuxCard 
                  image={membersahihp['desktopImage'+lang]} 
                  imageDescription={membersahihp['titleBenefits'+lang]}
                  title={membersahihp['nameMembership'+lang]} 
                  subtitle={membersahihp['titleBenefits'+lang]}
                  benefits={membersahihp['benefits'+lang]}
                  redirect={membersahihp['url'+lang]}
                  textButton={membersahihp['buttonText'+lang]}
                />
              </SwiperSlide>
            ))
          }    
        </PrimarySlider>
      </PrimarySection>
  )
}
