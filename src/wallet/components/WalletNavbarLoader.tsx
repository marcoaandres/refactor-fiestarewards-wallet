import {Flex, Grid, GridItem, Skeleton} from '@chakra-ui/react'


export const WalletNavbarLoader = () => {
   
  return (
    <Grid templateColumns='repeat(12, 1fr)' gap="0"  
        boxShadow={{base: "base", md: "base"}} 
        position="sticky" 
        top="0" 
        left="0" 
        zIndex="999"
        bg="white"
    >
        <GridItem colSpan={1}/>
        <GridItem colSpan={10}>
        <Grid templateColumns='repeat(12, 1fr)' gap="4" my="12px">

            <GridItem colSpan={6}>
                <Skeleton
                    startColor='primary.5'
                    endColor='primary.40'
                    width='90px'
                    height='50px' />
            </GridItem>
            <GridItem colSpan={6} display={{base: 'none', md: 'block'}}>
                <Flex
                justify={{base: "space-between", md: "end"}}
                alignItems={"center"}
                wrap={{base:"wrap", md:"nowrap"}}
                w="100%" 
                padding={{base:"12px 0", md: "12px"}} 
                flex={"1 1 auto"}
                gap={4}>
                    <Skeleton
                        startColor='primary.5'
                        endColor='primary.40'
                        width='100px'
                        height='20px' />
                    <Skeleton
                        startColor='primary.5'
                        endColor='primary.40'
                        width='100px'
                        height='20px' />
                    <Skeleton
                        startColor='primary.5'
                        endColor='primary.40'
                        width='100px'
                        height='20px' />
                    <Skeleton
                        startColor='primary.5'
                        endColor='primary.40'
                        width='100px'
                        height='20px' />
                    <Skeleton
                        startColor='primary.5'
                        endColor='primary.40'
                        width='100px'
                        height='20px' />
                </Flex>
            </GridItem>
            <GridItem colSpan={6} display={{base: 'block', md: 'none'}}>
                <Flex
                justify="end"
                alignItems="center"
                wrap="wrap"
                padding="12px 0" 
                flex={"1 1 auto"}>
                    <Skeleton
                        startColor='primary.5'
                        endColor='primary.40'
                        width='24px'
                        height='24px' />
                </Flex>
            </GridItem>

            </Grid>
            </GridItem>
        <GridItem colSpan={1}/>
    </Grid>
    
  )
}
