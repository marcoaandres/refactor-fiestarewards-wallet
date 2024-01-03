import { Box, Grid, GridItem, SkeletonText } from '@chakra-ui/react'
import { SecondaryCardLoader } from './SecondaryCardLoader'

export const BenefitSectionLoader = () => {
  return (
    <Grid templateColumns='repeat(12, 1fr)' gap="4">
        <GridItem colSpan={1}/>
        <GridItem colSpan={10}>
            <Box mt="56px" mb="36px">
              <SkeletonText
                startColor='primary.5'
                endColor='primary.40'
                noOfLines={2} mt="16px" />
            </Box>
            
            <SecondaryCardLoader/>
            <SecondaryCardLoader/>
            <SecondaryCardLoader/>
        </GridItem>
        <GridItem colSpan={1}/>
    </Grid>

  )
}
