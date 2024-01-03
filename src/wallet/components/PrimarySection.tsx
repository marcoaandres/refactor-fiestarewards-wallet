import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

type PrimarySectionProps = {
    title: string,
    subtitle?: string,
    node?: React.ReactNode;
    children?: React.ReactNode | React.ReactNode[];
}

export const PrimarySection = ( {title, children, node, subtitle}: PrimarySectionProps ) => {
  return (
    <Grid templateColumns='repeat(12, 1fr)' gap="4">
        <GridItem colSpan={1}/>
        <GridItem colSpan={10}>
            <Box mt="56px" mb="36px">
                <Heading as="h2" size={{base:"title-base", md:"title"}}>{title}</Heading>
                <Heading as="p" size={{base:"subtitle-base", md:"subtitle"}}>{subtitle}</Heading>
                {node}
            </Box>
            {children}
        </GridItem>
        <GridItem colSpan={1}/>
    </Grid>
  )
}
