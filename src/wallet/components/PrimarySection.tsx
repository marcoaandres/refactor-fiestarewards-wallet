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
                <Heading size="title">{title}</Heading>
                <Heading size="subtitle">{subtitle}</Heading>
                {node}
            </Box>
            {children}
        </GridItem>
        <GridItem colSpan={1}/>
    </Grid>
  )
}
