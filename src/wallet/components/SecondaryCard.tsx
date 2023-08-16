import { Button, Card, CardBody, CardFooter, Heading, Image, Link, Stack, Tag, Text } from "@chakra-ui/react"
type secondaryCardProps = {
    image: string,
    imageDescription: string,
    title: string,
    description: string,
    terms: string,
    tag: string;
    textButton: string,
    redirect: string

}

export const SecondaryCard = ({image, imageDescription, title, description, terms, tag, textButton, redirect ,} :secondaryCardProps) => {
  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    mt="16px"
    >
    <Image
        src={image}
        alt={imageDescription}
        borderRadius='sm'
    />
    <Stack mt='1' spacing='3'>
        <CardBody px="32px" py="16px">
            <Heading fontSize='md'>{title}</Heading>
            <Text fontSize='sm' fontWeight="300" my="16px">
            {description}
            </Text>
            <Text color='blue.600' fontSize="xs" textDecoration="underline" mb="16px">
            * {terms}
            </Text>
            <Tag size="md" fontSize="xs" >
            {tag}
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
