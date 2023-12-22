import { useState } from 'react'
import { Form, Formik } from 'formik'
import { string, object, InferType } from 'yup'
import { Box, Button, FormControl, FormErrorMessage, Grid, GridItem, Heading, Input, InputGroup, InputRightElement, Stack, useDisclosure } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { CustomAlert } from "../components/CustomAlert"
import { useAuthStore } from "../../hooks"

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
