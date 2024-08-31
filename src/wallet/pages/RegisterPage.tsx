import { useState } from 'react'
import { Box, Button, Flex, FormControl, FormErrorMessage, Grid, GridItem, Heading, Img, Input, InputGroup, InputRightElement, Link, Stack, useDisclosure } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useAuthStore } from '../../hooks'
import { Form, Formik } from 'formik'
import { string, object, ref, InferType } from 'yup'
import { CustomAlert } from '../components/CustomAlert'
import logoFr from "../../assets/img/logo_FR.svg";
import { useTranslation } from 'react-i18next'
import { Link as ReactLink } from 'react-router-dom';

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export const RegisterPage = () => {
  type Register = InferType<typeof registerSchema>
  
  const { startRegister } = useAuthStore();
  const [titleAlert] = useState('')
  const {
    isOpen: isVisible,
    onClose,
  } = useDisclosure()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const onShowPassword = () => setShowPassword(!showPassword)
  const onShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

  const handleRegister = ({email, name, lastName, password}: Register) => {
    startRegister({email, name, lastName, password})
  }

  const { i18n, t } = useTranslation();
  const currentLanguaje = i18n.resolvedLanguage 

  const registerSchema = object({
    name: string()
    .required(t('validateForm.isRequired'))
    .min(4, t('validateForm.lengthGreaterThan', {characters: 4})),
    lastName: string()
    .required(t('validateForm.isRequired'))
    .min(4, t('validateForm.lengthGreaterThan', {characters: 4})),
    email: string()
    .required(t('validateForm.isRequired'))
    .email(t('validateForm.emailValid')),
    password: string()
    .required(t('validateForm.isRequired'))
    .min(8, t('validateForm.lengthGreaterThan', {characters: 8})),
    confirmPassword: string()
    .oneOf([ref("password")], t('validateForm.matchPasword'))
    .required(t('validateForm.confirmPassword')),
  })
  
  return (
    <>
      <Box minH="80vh" my="12">
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
                  <GridItem colSpan={{base: 1, md:3, '2xl':4}}/>
                  <GridItem colSpan={{base: 10, md:6, '2xl':4}} boxShadow="md" p={{base:"6", md:"10"}} my={{base:"4"}}>
                  <Flex justifyContent="center"><Img src={logoFr} width="120px" /></Flex>
                    <Box mt="56px" mb="36px">
                        <Heading as="h1" size={{base:"title-base", md:"title"}}>{ t('register.title') }</Heading>
                        <Link as={ReactLink} to={`/${currentLanguaje}/login`}>{ t('register.subtitle') }</Link>
                    </Box>
                  <Stack spacing={4}>
                    <FormControl isInvalid={touched.name && Boolean(errors.name)}>
                      <Input placeholder={ t('registerForm.name') } size='sm' 
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <FormErrorMessage>{touched.name && errors.name}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={touched.lastName && Boolean(errors.lastName)}>
                      <Input placeholder={ t('registerForm.lastName') } size='sm' 
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                       <FormErrorMessage>{touched.lastName && errors.lastName}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={touched.email && Boolean(errors.email)}>
                      <Input placeholder={ t('registerForm.email') } size='sm'
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
                          placeholder={ t('registerForm.password') }
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
                          placeholder={ t('registerForm.confirmPassword') }
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

                    <Flex justifyContent="center">
                      <Button size="md" type='submit' isDisabled={!(dirty && isValid)}>{ t('register.button') }</Button>
                    </Flex>
                      
                  </Stack>
                  </GridItem>
                  <GridItem colSpan={{base: 1, md:3, '2xl':4}}/>
              </Grid>
            </Form>
          )
        }}
        </Formik>
      </Box>
    {
      isVisible &&
      <CustomAlert title={titleAlert} onClose={onClose}/>
    }
    </>
  )  
}
