import { Box, Grid, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react"

export const MembershipDetailSectionLoader = () => {
  return (
    <Grid templateColumns='repeat(12, 1fr)' gap={{base:1, md:4}}>
        <GridItem colSpan={{base:12, md:3, lg: 2}} display={{base: 'none', md:'initial'}}>
                <Skeleton
                    startColor='primary.5'
                    endColor='primary.40'
                    minHeight='100vh' />
        </GridItem>
        
        <GridItem colSpan={{base: 12, md: 9, lg: 10}} my={{ base: "60px" }}>
            
            <Grid templateColumns='repeat(12, 1fr)' gap="4">
                <GridItem colSpan={1}/>
                <GridItem colSpan={10}>
                    <Grid templateColumns='repeat(12, 1fr)' gap="1">
                        <GridItem colSpan={{ base:12, md:5, lg:5}}>
                            <SkeletonText
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={2} mt="16px" />

                            <Skeleton
                                mt="16px"
                                startColor='primary.5'
                                endColor='primary.40'
                                width="100%"
                                height='320px' />
                        </GridItem>
                        <GridItem colSpan={{ base:12, md: 1, lg:2}}/>
                        <GridItem colSpan={{ base:12, md:6, lg:5}}>
                            <SkeletonText 
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={3} mt="16px" />
                            <SkeletonText 
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={2} mt="32px" />
                            <Skeleton
                                mt="32px"
                                startColor='primary.5'
                                endColor='primary.40'
                                width="100%"
                                height='120px' />
                        </GridItem>
                    </Grid>

                <Grid templateColumns='repeat(12, 1fr)' gap="4" mt="16px">
                    <GridItem colSpan={{ base:12, md:6}}>
                        <Box>
                            <Box mb="32px">
                            <SkeletonText
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={3} mt="16px" />
                            </Box>
                            <Box boxShadow='base' p="24px 32px" mb="16px" >
                                <SkeletonText
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={3} mt="16px" />
                            </Box>
                            <Box boxShadow='base' p="24px 32px" mb="16px" >
                                <SkeletonText
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={3} mt="16px" />
                            </Box>
                            <Box boxShadow='base' p="24px 32px" mb="16px" >
                                <SkeletonText
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={3} mt="16px" />
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={{ base:12, md:6}}>
                        <Box>
                            <Box mb="32px">
                            <SkeletonText
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={3} mt="16px" />
                            </Box>
                            <Box boxShadow='base' p="24px 32px" mb="16px" >
                                <SkeletonText
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={3} mt="16px" />
                            </Box>
                            <Box boxShadow='base' p="24px 32px" mb="16px" >
                                <SkeletonText
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={3} mt="16px" />
                            </Box>
                            <Box boxShadow='base' p="24px 32px" mb="16px" >
                                <SkeletonText
                                startColor='primary.5'
                                endColor='primary.40'
                                noOfLines={3} mt="16px" />
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>
                    
                </GridItem>
                <GridItem colSpan={1}/>
            </Grid>

            

        </GridItem>
  </Grid>
  )
}
