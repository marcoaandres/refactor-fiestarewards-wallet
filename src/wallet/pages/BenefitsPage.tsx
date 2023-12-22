import { useEffect, useState } from "react"
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react"
import { PrimarySection, SecondaryCard } from "../components"
import { ResponsePromotion } from "../../interfaces/interfaces"
import { PrimaryModal } from "../components/PrimaryModal"
import { useAppSelector, usePromotionStore } from "../../hooks"

export const BenefitsPage = () => {

  const { startLoadingPromotions } = usePromotionStore()
  const { promotions } = useAppSelector( state => state.promotions )

  useEffect(() => {
    startLoadingPromotions()
  }, [])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalPromo, setModalPromo] = useState<ResponsePromotion>();

  const showModalPromotion = (id: string) => {
    const promo = promotions.find(({idPromo}) => idPromo == id)
    setModalPromo(promo)
    onOpen()
  }

  return (
    <>
    <PrimarySection
        title="Experiencias pensadas para ti"
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
    </>
  )
}
