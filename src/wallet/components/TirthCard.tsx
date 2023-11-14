import { Button, Card, CardBody, CardFooter, Heading, Image, Link, Stack, Tag, Text } from "@chakra-ui/react"
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
        mt="16px"
        bgImage={`url(${image})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        >
        <CardBody p="24px">
            <Text fontSize='16px' color="#FFF" fontWeight="350">
                No. de socio
            </Text>
            <Text fontSize='18px' color="#FFF" fontWeight="350" mb="32px">
                {membershipNumber}
            </Text>
            <Text fontSize='16px' color="#FFF" fontWeight="350">
                Puntos disponibles
            </Text>
            <Text fontSize='32px' color="#FFF" fontWeight="400" mb="32px">
                {pointsAvailable}
            </Text>
            <Text fontSize='16px' color="#FFF" fontWeight="350">
                Puntos contratados
            </Text>
            <Text fontSize='32px' color="#FFF" fontWeight="400">
                {contractedPoints}
            </Text>
        </CardBody>
    </Card>
      )
}
