import { useState } from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { string, object, InferType } from 'yup'
import { Box, Button, Flex, FormControl, FormErrorMessage, Grid, GridItem, Heading, Img, Input, InputGroup, InputRightElement, Link, Stack, useDisclosure } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { CustomAlert } from "../components/CustomAlert"
import { useAuthStore } from "../../hooks"
import logoFr from "../../assets/img/logo_FR.svg"

const initialValues = {
  email: 'angelito@gmail.com',
  password: '123456',
}
const loginSchema = object({
  email: string()
    .required('Este campo es requerido')
    .email('Introduzca un correo electrónico válido'),
  password: string()
    .required('Este campo es requerido')
    .min(6, 'La contraseña debe tener una longitud mínima de 8 caracteres.'),
})

type Login = InferType<typeof loginSchema>

export const LoginPage = () => {
  const { startLogin } = useAuthStore()
  const [titleAlert, setTitleAlert] = useState('')
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure()

  const [show, setShow] = useState(false)

  const onShowPasword = () => setShow(!show)
  
  const handlerLogin = ({email, password}: Login ) => {
    startLogin({email, password})
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => handlerLogin(values)}
      >
        {(formik) => {
          const { values, errors, touched, handleChange, handleBlur, isValid } = formik
          return(
            <Box minH="80vh" my="12">
              <Form>
                <Grid templateColumns='repeat(12, 1fr)' gap="4">
                    <GridItem colSpan={{base: 1, md:3, '2xl':4}}/>
                    <GridItem colSpan={{base: 10, md:6, '2xl':4 }} boxShadow="md" p={{base:"6", md:"10"}} my={{base:"3"}}>
                      <Flex justifyContent="center"><Img src={logoFr} width="120px" /></Flex>
                      <Box mt="56px" mb="36px">
                          <Heading as="h1" size={{base:"title-base", md:"title"}}>Log in to your account</Heading>
                          <Link as={ReactLink} to="/register">¿No tienes cuenta? Regístrate</Link>
                      </Box>
                    <Stack spacing={4}>
                      <FormControl isInvalid={touched.email && Boolean(errors.email)}>
                        <Input placeholder='Enter your email' size='sm'
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormErrorMessage>{touched.email && errors.email}</FormErrorMessage>
                      </FormControl>
                      
                      <FormControl isInvalid={touched.password && Boolean(errors.password)}>
                      <InputGroup size='md' >
                        <Input
                          pr='4.5rem'
                          type={show ? 'text' : 'password'}
                          placeholder='Enter your password'
                          name='password'
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={onShowPasword}>
                            {show ? <ViewOffIcon/> : <ViewIcon/>}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{touched.password && errors.password}</FormErrorMessage>
                      </FormControl>
                      
                      <Flex justifyContent="center">
                        <Button size="md" type='submit' 
                            isDisabled={!(isValid)}
                          >
                            Inicia sesión
                          </Button>
                      </Flex>
                    </Stack>
                    </GridItem>
                    <GridItem colSpan={{base: 1, md:3, '2xl':4}}/>
                </Grid>
              </Form>
            </Box>
          )
        }}
      </Formik>
      {
        isVisible &&
        <CustomAlert title={titleAlert} onClose={onClose}/>
      }
    </>


  )
}
