import { Button, Card, CardBody, CardFooter, Heading, Image, Link, Tag, Text } from "@chakra-ui/react"
import {typeProgram} from '../../utils/utils'
type primaryCardProps = {
    id: string,
    image: string,
    imageDescription: string,
    title: string,
    description: string,
    terms: string,
    tag: string,
    textButton: string,
    redirect: string,
    showModalPromotion: (id: string)=> void
}

export const PrimaryCard = ({ id, image, imageDescription, title, description, terms, tag, textButton, redirect, showModalPromotion} : primaryCardProps) => {
    
    const handleIdTerms = () => {
        showModalPromotion(id)
    }
  return (
    <Card variant="primary" boxShadow='base' minH={'600px'}>
        <Image
            maxW="100%"
            maxH="185px"
            src={image}
            alt={imageDescription}
            borderRadius='sm'
        />
        <CardBody mt='1'>
            <Heading fontSize='md' mb="16px">{title}</Heading>
            <Text fontSize='sm' fontWeight="300" mb="16px" noOfLines={2}>
                {description}
            </Text>
            <Text color='blue.600' fontSize="xs" my="16px" textDecoration="underline" noOfLines={2} onClick={handleIdTerms}>
                * {terms}
            </Text>
            <Tag size="md" fontSize="xs" variant={tag} >
                {typeProgram(tag)}
            </Tag>
        </CardBody>
        <CardFooter>
            <Button as={Link} href={redirect} isExternal pos="absolute" bottom="20px" left="20px">
                {textButton}
            </Button>
        </CardFooter>
    </Card>
  )
}
