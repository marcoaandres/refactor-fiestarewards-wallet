import { Button, Card, CardBody, CardFooter, Heading, Image, Link, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
type BenefitsCardProps = {
    image: string,
    imageDescription: string,
    title: string,
    subtitle: string,
    benefits: Array<string>,
    textButton: string,
    redirect: string

}
export const BenefitsCard = ({image, imageDescription, title, subtitle, benefits, textButton, redirect} : BenefitsCardProps) => {
    const renderBenefits = benefits.map((benefit, i) => 
        <ListItem fontSize='sm' fontWeight="300" key={i}>{benefit}</ListItem>
    );

  return (
    <Card>
        <Image
            src={image}
            alt={imageDescription}
            borderRadius='sm'
        />
        <CardBody>
            <Stack mt='1' spacing='3'>
                <Heading as="h3" fontSize='20px' fontWeight="350" color="primary.10">{title}</Heading>
                <Text  color="primary.20" fontSize='16px' fontWeight="350">{subtitle}</Text>
                <UnorderedList>{renderBenefits}</UnorderedList>
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
