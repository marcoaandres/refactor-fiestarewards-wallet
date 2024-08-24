import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        detection:{
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        interpolation:{
            escapeValue: false
        },
        resources: {
            es:{
                translation:{
                    nav:{
                        home: 'Inicio',
                        myMemberships: 'Mis membresías',
                        benefits: 'Beneficios',
                        logout: 'Cerrar sesión'
                    },
                    footer:{
                        copy: 'Todos los derechos reservados.'
                    },
                    home:{
                        bannerSection:{
                            title: 'Fiesta Rewards Wallet',
                            button: "Conocer más"
                        },
                        userMembershipSection:{
                            title: 'Hola, {{ name }}',
                            subtitle: 'Estas son tus membresías. Para ver más información, haz clic sobre la tarjeta.',
                            text: 'Si no ubicas alguna de tus membresías comunícate a la Línea Fiesta Rewards (*8585)',
                            button: 'Ver todos',
                            memberNumber: 'No. de membresía',
                            availablePoints: 'Puntos disponibles',
                        },
                        promotionSection:{
                            title: 'Promociones especiales para ti',
                            subtitle: 'Desliza y descubre todas las opciones.',
                            button: 'Ver todos'
                        },
                       discoverSection:{
                            title: 'Conoce Fiesta Rewards',
                            subtitle: "Dale a tus viajes un significado diferente y sé parte del único programa de viajero frecuente que te conoce y te reconoce. Afíliate hoy sin costo.",
                            button: 'Afíliate'
                        },
                        membershipPromotionSection:{
                            title: 'Nuestras membresías',
                            subtitle: 'Asómbrate con todo lo que tenemos para ti.'
                        },
                        letStartSection:{
                            title: '¡Comencemos!',
                            subtitle: "Este espacio es para ti, descubre todo lo que puedes hacer con tus membresías.",
                            button: 'Ingresar'
                        }
                    },
                    myMemberships:{
                        mainSection:{
                            title: 'Mis membresías',
                            textInfo: 'La información mostrada puede tardar hasta 24 horas en actualizarse.',
                            button: 'Inicio',
                        },
                        cardInfoSection:{
                            availablePoints: 'Puntos disponibles',
                            text: 'puntos necesarios para ascender a membresía FR {{level}}'
                        },
                        redemtionSection:{
                            title: 'Puntos utilizados',
                            subtitle: 'Movimientos del último mes'
                        },
                        accreditationSection:{
                            title: 'Puntos acumulados',
                            subtitle: 'Movimientos del último mes'
                        }
                    },
                    benefits:{
                        title: 'Experiencias pensadas para ti'
                    },
                    login:{
                        title: 'Inicia sesión en tu cuenta',
                        subtitle: '¿No tienes cuenta? Regístrate',
                        button: 'Iniciar sesión'
                    },
                    register:{
                        title: 'Regístrate y disfruta',
                        subtitle: '¿Ya tienes una cuenta? Inicia sesión',
                        button: 'Regístrate'
                    },
                    registerForm:{
                        name: 'Nombre',
                        lastName: 'Apellidos',
                        email: 'Email',
                        password: 'Contraseña',
                        confirmPassword: 'Confirma la contraseña'
                    },
                    loginForm:{
                        email: 'Introduce tu correo',
                        password: 'Introduce tu contraseña'
                    },
                    validateForm: {
                        isRequired: 'Este campo es requerido',
                        lengthGreaterThan: 'Este campo debe tener una longitud mínima de {{characters}} caracteres.',
                        emailValid: 'Introduzca un correo electrónico válido',
                        confirmPassword: 'Confirma tu contraseña',
                        matchPasword: "Las contraseñas no coinciden"
                    },
                    modal:{
                        title: 'Terminos y condiciones',
                        button: 'Cerrar'
                    }
                    
                }
            },
            en:{
                translation:{
                    nav:{
                        home: 'Home',
                        myMemberships: 'My memberships',
                        benefits: 'Benefits',
                        logout: 'Logout'
                    },
                    footer:{
                        copy: 'All rights reserved.'
                    },
                    home:{
                        bannerSection:{
                            title: 'Welcome to Fiesta Rewards Wallet',
                            button: 'View more'
                        },
                        userMembershipSection:{
                            title: 'Hello, {{ name }}',
                            subtitle: 'These are your memberships. For more information, click on the card.',
                            text: 'If you are unable to find a membership, please contact us at 1 877 767 2327',
                            button: 'See all',
                            memberNumber: 'Membership number',
                            availablePoints: 'Available Points',
                        },
                        promotionSection:{
                            title: 'Special offers for you',
                            subtitle: 'Swipe and discover all the options.',
                            button: 'See all'
                        },
                        discoverSection:{
                            title: 'Discover Fiesta Rewards',
                            subtitle: "You'll be surprised by the Fiesta Rewards experience at all of our destinations. Sign up today for free.",
                            button: 'Sign up'
                        },
                        membershipPromotionSection:{
                            title: 'Our memberships',
                            subtitle: 'Amaze with everything we have for you.'
                        },
                        letStartSection:{
                            title: "Let's get started!",
                            subtitle: "This place is for you, discover everything you can do with your memberships.",
                            button: 'Login'
                        }
                    },
                    myMemberships:{
                        mainSection:{
                            title: 'My memberships',
                            textInfo: 'The information displayed may take up to 24 hours to be updated.',
                            button: 'Go home',
                        },
                        cardInfoSection:{
                            availablePoints: 'Available points',
                            text: 'points needed to upgrade to FR {{level}} level'
                        },
                        redemtionSection:{
                            title: 'Redemptions',
                            subtitle: 'Movements of the last month'
                        },
                        accreditationSection:{
                            title: 'Accruals',
                            subtitle: 'Movements of the last month'
                        }
                    },
                    benefits:{
                        title: 'Experiences especially created for you'
                    },
                    login:{
                        title: 'Sing in to your account',
                        subtitle: 'You do not have an account? Check in',
                        button: 'Log in'
                    },
                    register:{
                        title: 'Sign up and enjoy',
                        subtitle: 'Already have an account? Log in',
                        button: 'Sing up'
                    },
                    registerForm:{
                        name: 'Name',
                        lastName: 'Last name',
                        email: 'Email',
                        password: 'password',
                        confirmPassword: 'Confirm password'
                    },
                    loginForm:{
                        email: 'Enter your email',
                        password: 'Enter your password'
                    },
                    
                    validateForm: {
                        isRequired: 'This field is required',
                        lengthGreaterThan: 'This field must have a minimum length of {{characters}} characters.',
                        emailValid: 'Please enter a valid email',
                        confirmPassword: 'Confirm your password',
                        matchPasword: "Passwords don't match"
                    },
                    modal:{
                        title: 'Terms and conditions',
                        button: 'Close'
                    }
                }
            },
        }
    })


export default i18n