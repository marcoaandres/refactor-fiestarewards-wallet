
import {Button, Card, CardBody, CardFooter, Heading, Image, Stack, Tag, Text, Wrap, WrapItem} from '@chakra-ui/react'
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons'
export const DemoPage = () => {
  return (
    <>
    {/* Headings */}
    <Heading size='title'> h2 - Promociones especiales para ti</Heading>
    <Heading as="h3" size='subtitle'> h3 - Desliza y descubre todas las opciones.</Heading>

    {/* BOTONES */}
      <Wrap spacing={4}>
        <WrapItem>
          <Button>¡Reserva ya!</Button>
        </WrapItem>
        <WrapItem>
          <Button isDisabled={true}>¡Reserva ya!</Button>
        </WrapItem>
        <WrapItem>
          <Button leftIcon={<EmailIcon/>}>¡Reserva ya!</Button>
        </WrapItem>
        <WrapItem>
          <Button leftIcon={<ArrowForwardIcon />} isLoading loadingText="Submitting...">¡Reserva ya!</Button>
        </WrapItem>
      </Wrap>

      {/* CARDS */}
      <Wrap spacing={2} m={6}>
        <WrapItem>
        <Card maxW='sm' variant="primary">
            <Image
              src='' fallbackSrc='https://via.placeholder.com/274x175'
              alt='Green double couch with wooden legs'
              borderRadius='sm'
            />
          <CardBody>
            <Stack mt='1' spacing='3'>
              <Heading fontSize='md'>Martes y jueves de puntos FR a precio especial</Heading>
              <Text fontSize='sm'>
              Ahora, ya puedes comprar los puntos Fiesta Rewards que necesites para tener los mejores beneficios en todas las estancias que realizas de ahora en adelante.
              </Text>
              <Text color='blue.600' fontSize="xs">
              * Consulta términos y condiciones.
              </Text>
              <Tag size="md" fontSize="xs" >
              Fiesta Rewards
              </Tag>
            </Stack>
          </CardBody>
          <CardFooter>
              <Button>
                Conocer más
              </Button>
          </CardFooter>
        </Card>
        </WrapItem>
      </Wrap>

    </>
  )
}
