import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/react"

type ButtonToggleProps = {
    isOpen: boolean,
    order?: string, 
    toggle: () => void,
}
export const ButtonToggle = ({toggle, isOpen, order}: ButtonToggleProps) => {
  return (
    <Box display={{base: 'block', md: 'none'}} onClick={toggle} order={order}>
        {isOpen ? <CloseIcon/> : <HamburgerIcon/>}
    </Box>
  )
}
