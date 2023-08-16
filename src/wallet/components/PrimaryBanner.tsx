import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

type PrimaryBannerProps = {
  title: string,
  image: string,
  imageDescription: string,
  child?: React.ReactNode;
}
export const PrimaryBanner = ( {title, image, imageDescription, child}: PrimaryBannerProps ) => {
  return (
    <Box
      position="relative"
      height="90vh"
      width="100%"
    >
      <Box
        height="90vh"
        position="absolute"
        width="100%"
        >
          <Image
            src={image}
            alt={imageDescription}
            borderRadius='sm'
            height="100%"
            width="100%"
            objectFit="cover"
        />
      </Box>
      <Box
        height="90vh"
        position="absolute"
        width="100%"
        backgroundColor="black"
        opacity=".4"
      />
      <Grid width="100%"
       templateColumns='repeat(12, 1fr)' gap="4"
       position="absolute"
       bottom={{base: 'auto', md: '45px'}}
       top={{base: '100px', md: 'auto'}}
       color="white"
      >
        <GridItem colSpan={1}/>
        <GridItem colSpan={10}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading as="h1" size="title" color="white" fontWeight="350">{title}</Heading>
          {child}
        </GridItem>
        <GridItem colSpan={1}/>
      </Grid>
    </Box>
  )
}
