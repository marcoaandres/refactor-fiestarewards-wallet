import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { Box, Button, FormControl, FormErrorMessage, Grid, GridItem, Heading, Input, InputGroup, InputRightElement, Stack, useDisclosure } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useAuth } from '../../hooks/useAuth'
import { CustomAlert } from "../components/CustomAlert"

const initialValues = {
  email: 'marco@andres.com',
  password: 'tDhs40k7xV',
}
const validationSchema = yup.object({
  email: yup
    .string('Introduce tu correo electrónico')
    .email('Introduzca un correo electrónico válido')
    .required('Este campo es requerido'),
  password: yup
    .string('Ingresa tu contraseña')
    .min(8, 'La contraseña debe tener una longitud mínima de 8 caracteres.')
    .required('Este campo es requerido'),
})

export const LoginPage = () => {
  const [titleAlert, setTitleAlert] = useState('')
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure()

  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const onShowPasword = () => setShow(!show)
  
  const handlerLogin = ({email, password}) => {
    fetch(`http://localhost:5000/users?email=${email}&pass=${password}`)
    .then(response => {
      if(!response.ok){
        setTitleAlert("Algo salio mal, intentalo más tarde.")
        onOpen()
        throw new Error("Algo salio mal, intentalo más tarde.")
      }      
      return response.json()
    })
    .then(data => {
      if(data.length === 0){
        setTitleAlert("Upps... parece que tus datos son incorrectos.")
        onOpen()
        return
      }

      const {email, memberNumber, name, lastName } = data[0]
      const user = {
        email,
        memberNumber,
        name,
        lastName
      } 
      const pathInls: string | null = localStorage.getItem('lastPath');
      const lastPath: string = pathInls || '/' ;
      login(user);

      navigate(lastPath, {
          replace: true
      })

    })
    .catch((error) => {
      setTitleAlert("Algo salio mal, intentalo más tarde.")
      onOpen()
      throw new Error(error)
    })
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handlerLogin(values)}
      >
        {(formik) => {
          const { values, errors, touched, handleChange, handleBlur, isValid } = formik
          return(
            <Form>
              <Grid templateColumns='repeat(12, 1fr)' gap="4">
                  <GridItem colSpan={{base: 1, md:4}}/>
                  <GridItem colSpan={{base: 10, md:4}}>
                    <Box mt="56px" mb="36px">
                        <Heading size="title">Login</Heading>
                    </Box>
                  <Stack spacing={4}>
                    <FormControl isInvalid={touched.email && Boolean(errors.email)}>
                      <Input placeholder='Email' size='sm'
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
                        placeholder='Password'
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
                    
                    <Grid templateColumns='repeat(12, 1fr)' gap="4">
                      <GridItem colSpan={4}>
                        <Button size="sm" type='submit' 
                          isDisabled={!(isValid)}
                        >Login</Button>
                      </GridItem>
                    </Grid>
                  </Stack>
                  </GridItem>
                  <GridItem colSpan={{base: 1, md:4}}/>
              </Grid>
            </Form>
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
