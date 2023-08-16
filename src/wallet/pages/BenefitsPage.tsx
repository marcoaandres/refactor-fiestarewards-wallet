import { Grid, GridItem } from "@chakra-ui/react"
import { SecondaryCard } from "../components/SecondaryCard"

export const BenefitsPage = () => {
  return (
    <>
      <h1>Benefits</h1>
      <Grid templateColumns='repeat(12, 1fr)' gap="4">
        <GridItem colSpan={1}/>
        <GridItem colSpan={10} my="16px">
          <SecondaryCard 
            image='https://via.placeholder.com/401x256' 
            imageDescription='Green double couch with wooden legs' 
            title='5 Martes y jueves de puntos FR a precio especial' 
            description='5 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='5 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='5 Conocer más' 
          />
          <SecondaryCard 
            image='https://via.placeholder.com/401x256' 
            imageDescription='Green double couch with wooden legs' 
            title='5 Martes y jueves de puntos FR a precio especial' 
            description='5 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='5 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='5 Conocer más' 
          />
          <SecondaryCard 
            image='https://via.placeholder.com/401x256' 
            imageDescription='Green double couch with wooden legs' 
            title='5 Martes y jueves de puntos FR a precio especial' 
            description='5 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='5 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='5 Conocer más' 
          />
          <SecondaryCard 
            image='https://via.placeholder.com/401x256' 
            imageDescription='Green double couch with wooden legs' 
            title='5 Martes y jueves de puntos FR a precio especial' 
            description='5 Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.' 
            terms='5 Consulta términos y condiciones.' 
            tag=' Fiesta Rewards' 
            redirect='https://wallet.fiestarewards.com' 
            textButton='5 Conocer más' 
          />
        </GridItem>
      <GridItem colSpan={1}/>
  </Grid>
    </>
  )
}
