import { Box, Button, ButtonGroup, Flex, Image, Link, Spacer, Stack } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import logoFr from "../assets/img/logo_FR.svg";
import { useState } from 'react';
import { ButtonToggle } from '../wallet/components/ButtonToggle';
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleButton = () => setIsOpen(!isOpen)

  return (
    <Flex as="nav" position="sticky" top="0" left="0" zIndex="999" bg="white"
    justify={{base: "space-between", md: "start"}}
    alignItems={{base: "start", md: "center"}}
    wrap={{base:"wrap", md:"nowrap"}}
    w="100%" 
    padding="12px" 
    px='48px' 
    boxShadow="base" flex={"1 1 auto"}>
        <Link as={ReactLink} to='/' order="1" mr="auto">
            <Image src={logoFr} htmlWidth="90px" alt="logotipo de Fiesta Rewards" />
        </Link>
        <ButtonToggle toggle={toggleButton} isOpen={isOpen} order="2"/>
        
        <Stack 
            order={3} gap={4}
            w={{base: '100%', md: 'auto'}} 
            display={{base: isOpen ? "flex" : "none", md:"flex"}}
            direction={{base: 'column', md: 'row'}}
        >
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
                <Link as={ReactLink} to='/' px='12px' py='16px' variant='underline'>Home</Link>
                <Link as={ReactLink} to='/benefits' px='12px' py='16px' variant='underline'>Benefits</Link>
            </Stack>
            
            <Stack 
                direction={['row']} 
                justify={['end', 'end']} 
                align="center" 
                order={{base:"4", md: "5"}}
                w={{base: '100%', md: '100%', xl: 'auto'}}
                gap="0"    
            >
                <Button variant='secondary' size='xs'>Es</Button>
                <span>|</span>
                <Button variant='secondary' size='xs'>En</Button>
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
            >
                <Button variant='secondary' as={ReactLink} to='/register'>Sign Up</Button>
                <Button as={ReactLink} to='/login'>Log in</Button>
            </Stack>
        </Stack>
    </Flex>
  )
}
