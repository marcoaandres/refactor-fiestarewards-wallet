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
            /**
             * TypeScript permitirá acceder a cualquier propiedad de un objeto de tipo Record<any, any>aunque no se conozcan las claves específicas, ya que el primer parámetro genérico es any.
             */
            memberships.map((membership: Record<string, any>) => (
              <SwiperSlide key={membership['id']}>
                <AuxCard 
                  image={membership['desktopImage'+lang]} 
                  imageDescription={membership['titleBenefits'+lang]}
                  title={membership['nameMembership'+lang]} 
                  subtitle={membership['titleBenefits'+lang]}
                  benefits={membership['benefits'+lang]}
                  redirect={membership['url'+lang]}
                  textButton={membership['buttonText'+lang]}
                />
              </SwiperSlide>
            ))
          }    
        </PrimarySlider>
      </PrimarySection>
  )
}
