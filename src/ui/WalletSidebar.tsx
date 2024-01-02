import { useState } from "react"
import { Link as ReactLink } from "react-router-dom"
import { Box, Link} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"


type props = {
    programs: string[]
}

export const WalletSidebar = ({ programs }:props) => {

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
            {
                programs.map((program)=> (
                    <Box key={program}>
                        <Link as={ReactLink} to={`/my-memberships?program=${program}`} p="16px 32px" display="block" variant="sidebar">{program === 'FR' ? 'Fiesta Rewards' : 'Apreciare'}</Link>
                    </Box>
                ))
            }
            
        </Box>
    </Box>
  )
}
