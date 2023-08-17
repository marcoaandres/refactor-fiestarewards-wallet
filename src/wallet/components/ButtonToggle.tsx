import { Box } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"

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
