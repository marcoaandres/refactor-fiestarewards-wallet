import { Button, Card, CardBody, CardFooter, Heading, Image, Link, Stack, Tag, Text } from "@chakra-ui/react"
type primaryCardProps = {
    image: string,
    imageDescription: string,
    title: string,
    description: string,
    terms: string,
    tag: string;
    textButton: string,
    redirect: string
}
export const PrimaryCard = ({image, imageDescription, title, description, terms, tag, textButton, redirect} : primaryCardProps) => {
  return (
    <Card variant="primary">
        <Image
            src={image}
            alt={imageDescription}
            borderRadius='sm'
        />
        <CardBody>
        <Stack mt='1' spacing='3'>
            <Heading fontSize='md'>{title}</Heading>
            <Text fontSize='sm' fontWeight="300">
            {description}
            </Text>
            <Text color='blue.600' fontSize="xs" textDecoration="underline">
            * {terms}
            </Text>
            <Tag size="md" fontSize="xs" >
            {tag}
            </Tag>
        </Stack>
        </CardBody>
        <CardFooter>
            <Button as={Link} href={redirect} isExternal>
            {textButton}
            </Button>
        </CardFooter>
    </Card>
  )
}
