import { useEffect, useState } from "react"
import { Box, useDisclosure } from "@chakra-ui/react"
import { useAppSelector, usePromotionStore } from "../../hooks"
import { Promotion } from "../../interfaces/interfaces"
import { BenefitSectionLoader, PrimarySection, SecondaryCard, PrimaryModal } from "../components"
import { useTranslation } from "react-i18next"
import i18next from "i18next"

export const BenefitsPage = () => {

  const { startLoadingPromotions } = usePromotionStore()
  const { promotions, isLoadingPromotions } = useAppSelector( state => state.promotions )

  useEffect(() => {
    startLoadingPromotions()
  }, [])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalPromo, setModalPromo] = useState<Promotion>();

  const showModalPromotion = (id: string) => {
    const promo = promotions.find(({idPromo}) => idPromo == id)
    setModalPromo(promo)
    onOpen()
  }
  const {t} = useTranslation() 
  const resolvedLanguage: string = i18next.resolvedLanguage
  const lang =  resolvedLanguage == 'en' ? 'En' : ''

  if(isLoadingPromotions)
    return <BenefitSectionLoader/>

  return (
    <Box mb="32px" >
    <PrimarySection
        title={ t('benefits.title') }
      >
        {
            promotions.map((promo: Promotion) => (
              <SecondaryCard 
                  key={promo['idPromo']}
                  id={promo['idPromo']}
                  image={promo['imagenSlider'+lang]}
                  imageDescription={promo['idPromo']} 
                  title={promo['titulo'+lang]}
                  description={promo['texto'+lang]}
                  terms={promo['terminos'+lang]}
                  tag={promo['producto'+lang]}
                  redirect={promo['url'+lang]}
                  textButton={promo['textoBoton'+lang]}
                  showModalPromotion={showModalPromotion}
                />
            ))
          }
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
    </Box>
  )
}
