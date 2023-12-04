import { Button, Card, CardBody, CardFooter, Heading, Image, Link, Stack, Tag, Text } from "@chakra-ui/react"
import { typeProgram } from "../../utils/utils"
type secondaryCardProps = {
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

export const SecondaryCard = ({id, image, imageDescription, title, description, terms, tag, textButton, redirect, showModalPromotion} :secondaryCardProps) => {
    const handleIdTerms = () => {
        showModalPromotion(id)
    }
  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    mt="16px"
    >
    <Image
        maxW="400px"
        src={image}
        alt={imageDescription}
        borderRadius='sm'
    />
    <Stack mt='1' spacing='3'>
        <CardBody px="32px" py="16px">
            <Heading fontSize='md' noOfLines={2}>{title}</Heading>
            <Text fontSize='sm' fontWeight="300" my="16px" noOfLines={2}>
            {description}
            </Text>
            <Text color='blue.600' fontSize="xs" textDecoration="underline" mb="16px" noOfLines={2} onClick={handleIdTerms}>
            * {terms}
            </Text>
            <Tag size="md" fontSize="xs" variant={tag}>
            {typeProgram(tag)}
            </Tag>
        </CardBody>
        <CardFooter px="32px" pt="0" pb="16px">
            <Button as={Link} href={redirect} isExternal>
            {textButton}
            </Button>
        </CardFooter>
    </Stack>
</Card>
  )
}
