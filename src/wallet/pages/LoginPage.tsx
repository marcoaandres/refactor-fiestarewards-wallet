import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, GridItem, Heading, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AuthContext } from '../../auth/context';

export const LoginPage = () => {
  const [show, setShow] = useState(false)
  const onShowPasword = () => setShow(!show)

  const navigate = useNavigate()
  const { login } = useContext( AuthContext )
  const onLogin = () => {
    const lastPath: string = localStorage.getItem('lastPath' || '/');
    login({name: 'Marco', lastName: 'Andrés'});

    navigate(lastPath, {
        replace: true
    })
}
  return (
    <>
    <Grid templateColumns='repeat(12, 1fr)' gap="4">
        <GridItem colSpan={4}/>
        <GridItem colSpan={4}>
          <Box mt="56px" mb="36px">
              <Heading size="title">Login</Heading>
          </Box>
        <Stack spacing={4}>
          <Input placeholder='Email' size='sm' />
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={onShowPasword}>
                {show ? <ViewOffIcon/> : <ViewIcon/>}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Grid templateColumns='repeat(12, 1fr)' gap="4">
            <GridItem colSpan={4}>
              <Button size="sm" onClick={onLogin}>Login</Button>
            </GridItem>
          </Grid>
        </Stack>
        </GridItem>
        <GridItem colSpan={3}/>
    </Grid>
    </>
  )
}
