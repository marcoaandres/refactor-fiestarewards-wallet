import { Link as ReactLink } from "react-router-dom"
import { Box, Link} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import { useTranslation } from "react-i18next"
import { useComponentVisible } from "../hooks"


type props = {
    programs: string[]
}

export const WalletSidebar = ({ programs }:props) => {

    const { t, i18n } = useTranslation()
    const currentLanguaje = i18n.resolvedLanguage 
    const { ref, isComponentVisible: showMenu, setIsComponentVisible: setShowMenu } = useComponentVisible(false)

    const onToggleMenu = () => {
        setShowMenu(!showMenu)
    }
    const handlerCloseMenu = (): void => setShowMenu(false) 
  return (
    <Box zIndex="docked" bgColor="primary.10" pt={{ base:"25", md: "32px" }} h={{ base:"auto", md: "100%" }} w={{base:"100%", md: "auto"}} position={{base: "fixed", md: "initial" }} ref={ref}>
        <Box visibility={{ base: 'visible', md: 'hidden' }} color="white" p="16px 24px" onClick={onToggleMenu}>
           <Box display={{base: 'block', md: 'none'}}>
                <span>{ t('myMemberships.mainSection.title') }</span> {showMenu ? <ChevronDownIcon boxSize={6}/> : <ChevronUpIcon boxSize={6}/>}
            </Box>
        </Box>
        <Box display={{  base:(showMenu ? 'initial' : 'none' ), md: "initial"}}>
            {
                programs.map((program)=> (
                    <Box key={program}>
                        <Link as={ReactLink} to={`/${currentLanguaje}/my-memberships?program=${program}`} onClick={handlerCloseMenu} p="16px 32px" display="block" variant="sidebar">{program === 'FR' ? 'Fiesta Rewards' : 'Apreciare'}</Link>
                    </Box>
                ))
            }
            
        </Box>
    </Box>
  )
}
