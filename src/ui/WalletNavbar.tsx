import { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom'
import { Avatar, Box, Button, Flex, Grid, GridItem, Image, Link, Menu, MenuButton, MenuItem, MenuList,  Stack, Text } from '@chakra-ui/react'
import logoFr from "../assets/img/logo_FR.svg";
import { ButtonToggle } from '../wallet/components/ButtonToggle';
import { useAppSelector, useAuthStore } from '../hooks';
import { useTranslation } from 'react-i18next';


export const WalletNavbar = () => {
    const { user, status } = useAppSelector(state => state.auth)
    const { programs } = useAppSelector(state => state.partnerPrograms)
    const { startLogout } = useAuthStore()


    const onLogout = (): void => {
        startLogout()
    }

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleButton = (): void => setIsOpen(!isOpen)

    const onSelectLanguage = (lang: string): void => {
        i18n.changeLanguage(lang)
    }
    const { i18n, t } = useTranslation()

    const currentLanguaje = i18n.resolvedLanguage 


  return (
    <Grid templateColumns='repeat(12, 1fr)' gap="0"  
        boxShadow={{base: isOpen ? "none" : "base", md: "base"}} 
        position="sticky" 
        top="0" 
        left="0" 
        zIndex="999"
        bg="white"
    >
        <GridItem colSpan={1}/>
        <GridItem colSpan={10}>
            <Flex as="nav"
            justify={{base: "space-between", md: "start"}}
            alignItems={"center"}
            wrap={{base:"wrap", md:"nowrap"}}
            w="100%" 
            padding={{base:"12px 0", md: "12px"}} 
            flex={"1 1 auto"}
            
            >
            <Link as={ReactLink} to='/' order="1" mr="auto">
                <Image src={logoFr} htmlWidth="90px" alt="logotipo de Fiesta Rewards" />
            </Link>
            <ButtonToggle toggle={toggleButton} isOpen={isOpen} order="2"/>
            
            <Stack 
                order={3} gap={4}
                w={{base: '100%', md: 'auto'}} 
                display={{base: isOpen ? "flex" : "none", md:"flex"}}
                direction={{base: 'column', md: 'row'}}
                position={{base: "fixed", md: "initial"}}
                top="70"
                left="0"
                bgColor="white"
                p={{base: "24px", md: "0"}}
                boxShadow={{base: "base", md: "none"}} 
            >
                <Stack
                    direction={['row']}
                    align="center"
                    gap="3"  
                    order="5"
                    cursor="pointer"
                    display={{ base: `${!user ? 'none' : 'inherit'}`, md: 'none' }}
                >
                    
                    <Avatar src='' size="sm" bg="primary.10" />
                    <Box>
                        <Text fontWeight="300" fontSize="14px" color="primary.10">
                            {user?.name}
                        </Text>
                        <Text fontWeight="400" fontSize="14px" color="primary.10">
                            {user?.lastName}
                        </Text>
                    </Box>
                </Stack>

                <Stack 
                    direction={{base: 'column', md: 'row'}} 
                    align="center" 
                    justify={{base:'center', md: 'space-between'}} 
                    order={{base:"5", md:"4"}} gap={0}
                    w={{
                        base: '100%',
                        md: 'auto',
                    }}
                >
                    <Link as={ReactLink} to='/' px='12px' py='16px' variant='underline'>{ t('nav.home') }</Link>
                    <Link as={ReactLink} to={`/my-memberships?program=${programs[0]?.program}`} display={`${user ? 'init' : 'none'}`} px='12px' py='16px' variant='underline'>{ t('nav.myMemberships') }</Link>
                    <Link as={ReactLink} to='/benefits' px='12px' py='16px' variant='underline'>{ t('nav.benefits') }</Link>
                    <Link px='12px' py='16px' variant='underline'  onClick={onLogout}  display={{ base: `${!user ? 'none' : 'inherit'}`, md: 'none' }}>{ t('nav.logout') }</Link>
                </Stack>
                
                <Stack 
                    direction={['row']} 
                    justify={['end', 'end']} 
                    align="center" 
                    order={{base:"4", md: "5"}}
                    w={{base: '100%', md: '100%', xl: 'auto'}}
                    gap="0"    
                >
                    <Button
                        onClick={() => onSelectLanguage('es')}
                        isActive={currentLanguaje === 'es'}
                        variant='secondary' size='xs'>Es</Button>
                    <span>|</span>
                    <Button 
                        onClick={() => onSelectLanguage('en')}
                        isActive={currentLanguaje === 'en'}
                        variant='secondary' size='xs'>En</Button>
                </Stack>
                <Stack 
                    w={{base: '100%',md: '100%',xl: 'auto'}} 
                    direction={['row']} 
                    gap='4' 
                    order="6" 
                    justify={['center']} 
                    px='12px' 
                    py='16px' 
                    ml="auto"
                    display={`${user ? 'none' : 'flex'}`}
                >
                    <Button variant='secondary' as={ReactLink} to='/register'>Sign Up</Button>
                    <Button as={ReactLink} to='/login'>Log in</Button>
                </Stack>
                <Menu>
                <MenuButton
                    order="6" 
                    display={{ base: 'none', md: `${!user ? 'none' : 'inherit'}` }}
                >
                    <Stack
                    direction={['row']}
                    align="center"
                    gap="3"  
                    justify={['center']}
                    >
                        <Box>
                            <Text fontWeight="300" fontSize="14px" color="primary.10">
                                {user?.name}
                            </Text>
                            <Text fontWeight="400" fontSize="14px" color="primary.10">
                                {user?.lastName}
                            </Text>
                        </Box>
                    <Avatar src='' size="sm" bg="primary.10" />
                    </Stack>
                </MenuButton>
                <MenuList>
                    <MenuItem
                    onClick={onLogout}  
                    >{ t('nav.logout') }</MenuItem>
                </MenuList>
                </Menu>
            </Stack>
            </Flex>
        </GridItem>
        <GridItem colSpan={1}/>
    </Grid>
    
  )
}
