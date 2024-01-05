import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
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
                    }
                }
            },
        }
    })


export default i18n