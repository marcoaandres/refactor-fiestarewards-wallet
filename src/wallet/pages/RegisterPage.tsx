import { useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, Grid, GridItem, Heading, Input, InputGroup, InputRightElement, Stack, useDisclosure } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { string, object, ref, InferType } from 'yup'
import { CustomAlert } from '../components/CustomAlert'

const registerSchema = object({
  name: string()
    .required('Este campo es requerido')
    .min(4, 'El nombre  debe tener una longitud mínima de 4 caracteres.'),
  lastName: string()
    .required('Este campo es requerido')
    .min(4, 'El apellido debe tener una longitud mínima de 4 caracteres.'),
  email: string()
    .required('Este campo es requerido')
    .email('Introduzca un correo electrónico válido'),
  password: string()
    .required('Este campo es requerido')
    .min(8, 'La contraseña debe tener una longitud mínima de 8 caracteres.'),
  confirmPassword: string()
    .oneOf([ref("password")], "Las contraseñas no coinciden")
    .required('Confirma tu contraseña'),
})

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

type Register = InferType<typeof registerSchema>

const createId = Date.now()

export const RegisterPage = () => {
  const [titleAlert, setTitleAlert] = useState('')
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const onShowPassword = () => setShowPassword(!showPassword)
  const onShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

  const createMemberNumber = (number: number) => {
    return String(number).slice(-7)
  }

  const { login } = useAuth()
   const navigate = useNavigate()

  const handleRegister = (values: Register) => {
    const {
      name,
      lastName,
      email,
      password
    } = values
    const newUser = {
      "id": createId,
      name,
      lastName,
      email,
      "memberNumber": createMemberNumber(createId),
      "pass": password
    }
    fetch(' http://localhost:5000/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    })
    .then(response => {
      if(!response.ok){
        setTitleAlert("Algo salio mal, intentalo más tarde.")
        onOpen()
        throw new Error("Algo salio mal, intentalo más tarde.")
      }
      return response.json()
    })
    .then(data => {
      const {email, memberNumber, name, lastName } = data
      const user = {
        email,
        memberNumber,
        name,
        lastName
      } 
      const pathInls: string | null = localStorage.getItem('lastPath')
      const lastPath: string = pathInls || '/' 
      login(user)

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
      validationSchema={registerSchema}
      onSubmit={(values) => handleRegister(values)}
      >
      {(formik) => {
        const { values, errors, touched, handleChange, handleBlur, isValid, dirty } = formik;
        return (
          <Form>
            <Grid templateColumns='repeat(12, 1fr)' gap="4">
                <GridItem colSpan={{base: 1, md:4}}/>
                <GridItem colSpan={{base: 10, md:4}}>
                  <Box mt="56px" mb="36px">
                      <Heading size="title">Sign Up</Heading>
                  </Box>
                <Stack spacing={4}>
                  <FormControl isInvalid={touched.name && Boolean(errors.name)}>
                    <Input placeholder='Nombre' size='sm' 
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormErrorMessage>{touched.name && errors.name}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={touched.lastName && Boolean(errors.lastName)}>
                    <Input placeholder='Apellidos' size='sm' 
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                     <FormErrorMessage>{touched.lastName && errors.lastName}</FormErrorMessage>
                  </FormControl>
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
                    <InputGroup size='md'>
                      <Input
                        pr='4.5rem'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Contraseña'
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={onShowPassword}>
                          {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{touched.password && errors.password}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={touched.confirmPassword && Boolean(errors.confirmPassword)}>
                    <InputGroup size='md'>
                      <Input
                        pr='4.5rem'
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Confirma la contraseña'
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={onShowConfirmPassword}>
                          {showConfirmPassword ? <ViewOffIcon/> : <ViewIcon/>}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{touched.confirmPassword && errors.confirmPassword}</FormErrorMessage>
                  </FormControl>
                  <Grid templateColumns='repeat(12, 1fr)' gap="4">
                    <GridItem colSpan={4}>
                      <Button size="sm" type='submit' isDisabled={!(dirty && isValid)}>Registrar</Button>
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
