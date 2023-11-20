import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react"
type TirthCardProps = {
    image: string,
    imageDescription: string,
    membershipNumber: string,
    pointsAvailable: string,
    contractedPoints: string
}

export const TirthCard = ({image, membershipNumber, pointsAvailable, contractedPoints}: TirthCardProps )  => {
    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <CardBody p={0}>
        <Image src={image} alt='Dan Abramov'/>
        <Box position="absolute" top="0" left="0" p="24px">
            <Text fontSize={{base: '14px'}} color="#FFF" fontWeight="350">
            No. de membresía
            </Text>
            <Text fontSize={{base: '14px'}} color="#FFF" fontWeight="350" mb="24px">
                {membershipNumber}
            </Text>
            <Text fontSize={{base: '14px'}} color="#FFF" fontWeight="350">
                Puntos disponibles
            </Text>
            <Text fontSize={{ base: '14px', md: '24px'}} color="#FFF" fontWeight="400" mb="24px">
                {pointsAvailable}
            </Text>
            <Box display={ contractedPoints ? '' : 'none'}>
                <Text fontSize={{base: '14px'}} color="#FFF" fontWeight="350">
                    Puntos Vencidos
                </Text>
                <Text fontSize={{ base: '14px', md: '24px'}} color="#FFF" fontWeight="400">
                    {contractedPoints}
                </Text>
            </Box>
        </Box>
        </CardBody>
    </Card>
      )
}
