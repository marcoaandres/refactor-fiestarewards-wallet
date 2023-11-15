import { Button, Card, CardBody, CardFooter, Heading, Image, Link, ListItem, Tag, Text, UnorderedList } from "@chakra-ui/react"
type AuxCardProps = {
    image: string,
    imageDescription: string,
    title: string,
    subtitle: string,
    benefits: string[],
    textButton: string,
    redirect: string
}
export const AuxCard = ({image, imageDescription, title, subtitle, benefits, textButton, redirect} : AuxCardProps) => {
    
  return (
    <Card variant="primary" boxShadow='base' minH={'600px'}>
        <Image
            src={image}
            alt={imageDescription}
            borderRadius='sm'
        />
        <CardBody mt='1'>
            <Heading fontSize='md' mb="16px" color="primary.10">{title}</Heading>
            <Text fontSize='sm' fontWeight="300" mb="16px" color="primary.20" noOfLines={2}>
                {subtitle}
            </Text>
            <UnorderedList>
                {
                    benefits.map((el, i)=> (
                        <ListItem key={i}  fontSize="xs" fontWeight="300" my="16px" noOfLines={2}>{el}</ListItem>
                    ))
                }
            </UnorderedList>
            
            
        </CardBody>
        <CardFooter>
            <Button as={Link} href={redirect} isExternal pos="absolute" bottom="20px" left="20px">
                {textButton}
            </Button>
        </CardFooter>
    </Card>
  )
}
