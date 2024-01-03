import { Box, Grid, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react"

export const UserMembershipSectionLoader = () => {
  return (
    <Grid templateColumns='repeat(12, 1fr)' gap="4" my="36px">
        <GridItem colSpan={1}/>
        <GridItem colSpan={10}>

            <Box mt="56px" mb="36px">
                <SkeletonText 
                    startColor='primary.5'
                    endColor='primary.40'
                    noOfLines={4} mt="16px" />
            </Box>
        <Grid templateColumns='repeat(12, 1fr)' gap="4" my="36px">
            <GridItem colSpan={{md:1, '2xl':2}}/>
            <GridItem colSpan={{base:12, md:10, '2xl': 8}} pb="32px">

                <Grid templateColumns='repeat(12, 1fr)' gap="4" my="36px">

                <GridItem colSpan={{base:12, md:6}}>
                <Skeleton
                    startColor='primary.5'
                    endColor='primary.40'
                    height='320px' />
                </GridItem>
                <GridItem colSpan={6} display={{base: 'none', md: 'block'}}>
                <Skeleton
                    startColor='primary.5'
                    endColor='primary.40'
                    height='320px' />
                </GridItem>

                </Grid>
            
            <GridItem colSpan={{md:1, '2xl':2}}/>

            </GridItem>
        </Grid>
            
        </GridItem>
        <GridItem colSpan={1}/>
    </Grid>
  )
}
