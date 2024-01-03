import { useEffect, useState } from "react"
import { Link as ReactLink } from 'react-router-dom'
import { Button, Flex, useDisclosure } from "@chakra-ui/react"
import { SwiperSlide } from "swiper/react"
import { useAppSelector, usePromotionStore } from "../../hooks"
import { Promotion } from "../../interfaces/interfaces"
import { SectionLoader, PrimaryModal, PrimaryCard, PrimarySection, PrimarySlider } from "./"

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
    if(isLoadingPromotions)
    return <SectionLoader/>

  return (
    <>
        <PrimarySection
            title="Promociones especiales para ti"
            subtitle="Desliza y descubre todas las opciones."
            node={<Flex justifyContent="right" mt="36px"><Button as={ReactLink} variant="outline" to='/benefits'>Ver todos</Button></Flex>}
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
