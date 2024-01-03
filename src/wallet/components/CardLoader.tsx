import { Box, Skeleton, SkeletonText, } from '@chakra-ui/react'

export const CardLoader = () => {
    return (
        <Box minH={'600px'} boxShadow="md" position="relative">
            <Skeleton
                startColor='primary.5'
                endColor='primary.40'
                height="185px"
            />
            <Box p="16px">
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
            </Box>
            <Box pos="absolute" bottom="20px" left="20px">
                <Skeleton
                    startColor='primary.5'
                    endColor='primary.40'
                    height='30px'
                    width="100px" />
            </Box>
        </Box>
    )
}
