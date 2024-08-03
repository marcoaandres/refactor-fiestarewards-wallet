import { useEffect, useState } from "react"
import { Link as ReactLink } from 'react-router-dom'
import { Button, Flex, useDisclosure } from "@chakra-ui/react"
import { SwiperSlide } from "swiper/react"
import { useAppSelector, usePromotionStore } from "../../hooks"
import { Promotion } from "../../interfaces/interfaces"
import { SectionLoader, PrimaryModal, PrimaryCard, PrimarySection, PrimarySlider } from "./"
import { useTranslation } from "react-i18next"

export const PromotionSection = () => {

    const { startLoadingPromotions } = usePromotionStore()
    const { promotions, isLoadingPromotions } = useAppSelector(state => state.promotions)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalPromo, setModalPromo] = useState<Promotion>();

    useEffect(() => {
        startLoadingPromotions()
      }, [])

    const showModalPromotion = (id: string) => {
        const promo = promotions.find(({idPromo}) => idPromo == id)
        setModalPromo(promo)
        onOpen()
    }

    const {i18n, t} =useTranslation() 
  const currentLanguaje = i18n.resolvedLanguage 

    if(isLoadingPromotions)
    return <SectionLoader/>

  return (
    <>
        <PrimarySection
            title={ t('home.promotionSection.title') }
            subtitle={ t('home.promotionSection.subtitle') }
            node={<Flex justifyContent="right" mt="36px"><Button as={ReactLink} variant="outline" to={`/${currentLanguaje}/benefits`}>{ t('home.promotionSection.button') }</Button></Flex>}
          >
            <PrimarySlider>
              {
                promotions.map(({idPromo, titulo, texto, terminos, producto, imagenSlider, url, textoBoton}) => (
                  <SwiperSlide key={idPromo}>
                    <PrimaryCard 
                      id={idPromo}
                      image={imagenSlider}
                      imageDescription={idPromo} 
                      title={titulo}
                      description={texto}
                      terms={terminos}
                      tag={producto}
                      redirect={url}
                      textButton={textoBoton}
                      showModalPromotion={showModalPromotion} />
                </SwiperSlide>
                ))
              }
            </PrimarySlider>
          </PrimarySection>
          {
            !!modalPromo && 
            <PrimaryModal 
            isOpen={isOpen} 
            onClose={onClose}  
            terminos={modalPromo.terminos} 
            textoBoton={modalPromo.textoBoton}
            redirectTo={modalPromo.url}
            />
        }
    </>
  )
}
