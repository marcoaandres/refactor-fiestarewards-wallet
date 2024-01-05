import { useEffect, useState } from "react"
import { Box, useDisclosure } from "@chakra-ui/react"
import { useAppSelector, usePromotionStore } from "../../hooks"
import { Promotion } from "../../interfaces/interfaces"
import { BenefitSectionLoader, PrimarySection, SecondaryCard, PrimaryModal } from "../components"
import { useTranslation } from "react-i18next"

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
  if(isLoadingPromotions)
    return <BenefitSectionLoader/>

  return (
    <Box mb="32px" >
    <PrimarySection
        title={ t('benefits.title') }
      >
        {
            promotions.map(({idPromo, titulo, texto, terminos, producto, imagenSlider, url, textoBoton}) => (
              <SecondaryCard 
                  key={idPromo}
                  id={idPromo}
                  image={imagenSlider}
                  imageDescription={idPromo} 
                  title={titulo}
                  description={texto}
                  terms={terminos}
                  tag={producto}
                  redirect={url}
                  textButton={textoBoton}
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
