import { Box, Grid, GridItem, Skeleton, SkeletonText } from '@chakra-ui/react'

export const SecondaryCardLoader = () => {
  return (
    
    <Grid templateColumns='repeat(12, 1fr)' gap="4" boxShadow="md" mb="24px" >
        <GridItem colSpan={{base:12,  md:4}}>
        <Skeleton
                startColor='primary.5'
                endColor='primary.40'
                height={{base:'200px', md:'250px'}}
                width="100%"
            />
        </GridItem>
        <GridItem colSpan={{base:12, md:8}} position="relative">
            <Box  px="32px" py="16px">

                <SkeletonText
                    startColor='primary.5'
                    endColor='primary.40'
                    noOfLines={3} mt="16px" />

                <SkeletonText
                    startColor='primary.5'
                    endColor='primary.40'
                    noOfLines={2} mt="16px" />

                <SkeletonText
                    startColor='primary.5'
                    endColor='primary.40'
                    noOfLines={2} mt="16px" />
                
                <Box  pt="48px">
                    <Skeleton
                        startColor='primary.5'
                        endColor='primary.40'
                        height='30px'
                        width="100px" />
                </Box>

            </Box>
            

        </GridItem>
    </Grid>

  )
}
