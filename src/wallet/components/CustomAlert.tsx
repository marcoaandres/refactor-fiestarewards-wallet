import { Alert, AlertIcon, AlertTitle, Box, CloseButton } from "@chakra-ui/react"

type customAlertProps = {
  title: string,
  onClose: () => void
}
export const CustomAlert = ({title, onClose} : customAlertProps ) => {
  return (
    <Alert status="error" position="absolute" top="100px" right={{base: "0px", sm: "0px",  md: "50px"}} width="500px" maxWidth="100%">
        <AlertIcon />
        <Box>
          <AlertTitle>{title}</AlertTitle>
        </Box>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        />
    </Alert>
  )
}
