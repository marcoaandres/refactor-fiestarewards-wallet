import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import { Box, Icon, Link, ListItem, Text, UnorderedList, Wrap, WrapItem} from "@chakra-ui/react"
import { useState } from "react"

export const WalletSidebar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const onToggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <Box zIndex="docked" bgColor="primary.10" pt={{ base:"25", md: "32px" }} h={{ base:"auto", md: "100%" }} w={{base:"100%", md: "auto"}} position={{base: "fixed", md: "initial" }}>
        <Box visibility={{ base: 'visible', md: 'hidden' }} color="white" p="16px 24px" onClick={onToggleMenu}>
           <Box display={{base: 'block', md: 'none'}}>
                <span>Mis membresías</span> {showMenu ? <ChevronDownIcon boxSize={6}/> : <ChevronUpIcon boxSize={6}/>}
            </Box>
        </Box>
        <Box display={{  base:(showMenu ? 'initial' : 'none' ), md: "initial"}}>
            <Box>
                <Link p="16px 32px" display="block" variant="sidebar">One Hundred</Link>
            </Box>
            <Box>
                <Link p="16px 32px" display="block" variant="sidebar">Live Aqua Residence Club</Link>
            </Box>
            <Box>
                <Link p="16px 32px" display="block" variant="sidebar" bgColor="primary.100">Fiesta Rewards</Link>
            </Box>
            <Box>
                <Link p="16px 32px" display="block" variant="sidebar">Fiesta Rewards Apreciare</Link>
            </Box>
        </Box>
    </Box>
  )
}
