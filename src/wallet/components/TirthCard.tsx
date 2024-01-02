import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react"
type TirthCardProps = {
    image: string,
    imageDescription: string,
    membershipNumber: string,
    pointsAvailable: string,
}

export const TirthCard = ({image, membershipNumber, pointsAvailable}: TirthCardProps )  => {
    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        borderColor="transparent"
        >
        <CardBody p={0} borderRadius="lg">
        <Image src={image} alt='' borderRadius="lg" />
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
        </Box>
        </CardBody>
    </Card>
      )
}
