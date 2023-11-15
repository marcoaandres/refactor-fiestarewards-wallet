import { useEffect, useState } from "react"
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react"
import { SecondaryCard } from "../components"
import { ResponsePromotion } from "../../interfaces/interfaces"
import { PrimaryModal } from "../components/PrimaryModal"

export const BenefitsPage = () => {
  const [promotions, setPromotions] = useState<ResponsePromotion[]>([])

  useEffect(() => {
    fetch(' http://localhost:5000/promotions')
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      setPromotions(data)
    })  
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
      <h1>Benefits</h1>
      <Grid templateColumns='repeat(12, 1fr)' gap="4">
        <GridItem colSpan={1}/>
        <GridItem colSpan={10} my="16px">
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
        </GridItem>
        <GridItem colSpan={1}/>
      </Grid>
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
