import { Link as ReactLink } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import Home1  from '../../assets/img/home_1.jpg'
import Home2  from '../../assets/img/home_2.jpg'
import BannerHome from '../../assets/img/banner_1.jpg'
import { useAppSelector  } from '../../hooks'
import { PrimaryBanner, SectionWithImage, UserMembershipSection, PromotionSection, MembershipSection } from '../components'
import { useTranslation } from 'react-i18next'

export const HomePage = () => {
  
  const { status } = useAppSelector(state => state.auth)
  
  const isLogged = (status === 'authenticated')

  const {i18n, t} =useTranslation() 
  const currentLanguaje = i18n.resolvedLanguage 

  return (
    <>  
      { 
        !isLogged && 
        <PrimaryBanner
          title={ t('home.bannerSection.title') }
          imageDescription="Descipción de imagen"
          image={BannerHome}
          child={<Button as={ReactLink} to={`/${currentLanguaje}/login`} display={{base: 'none', md:'block'}}>{ t('home.bannerSection.button') }</Button>}
        />
      }
      {
        isLogged &&
        <UserMembershipSection />
      }
      
      <PromotionSection/>

      {
        !isLogged &&
        <SectionWithImage 
        title={ t('home.discoverSection.title') }
        subtitle={ t('home.discoverSection.subtitle') }
        picture={Home1}
        background="primary.60"
        child={<Button as={ReactLink} to={`/${currentLanguaje}/login`} mt="6">{ t('home.discoverSection.button') }</Button>}
      />
      }
      <MembershipSection/>

      {
        !isLogged &&
        <SectionWithImage 
          title={ t('home.letStartSection.title') }
          subtitle={ t('home.letStartSection.subtitle') }
          picture={Home2}
          background="primary.60"
          revert={true}
          child={<Button as={ReactLink} to={`/${currentLanguaje}/login`} mt="6">{ t('home.letStartSection.button') }</Button>}
        />
      }
    </>
  )
}
