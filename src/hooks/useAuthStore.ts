import { AxiosError } from 'axios';
import { WalletApi } from '../api/WalletApi';
import { Error, User, UserLogin, UserRegister } from '../interfaces/interfaces';
import { onChecking, onLoadPartnerPrograms, onLogin, onLogout, onLogoutPartnerPrograms, onSetPartnerPrograms } from '../store';
import { useAppDispatch, useAppSelector } from './';

export const useAuthStore = () => {

  const { status, user, errorMessage } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

    // thunk
    const startLogin = async({ email, password }: UserLogin) => {
        dispatch( onChecking() )
        try {
            // peticion http
            const {data} = await WalletApi.post<User>('/auth', {email, password} )

            localStorage.setItem('token', data.token)

            const user: User = {
                uid: data.uid,
                name: data.name,
                lastName: data.lastName,
                memberNumber: data.memberNumber,
                token: data.token
            }
            dispatch(onLogin(user))

        } catch (error) {
            const err = error as AxiosError<Error>
            dispatch( onLogout(err.response?.data.msg) )
        }
    }

    const startRegister = async({ email, name, lastName, password }: UserRegister) => {

        dispatch(onChecking())
        dispatch( onLoadPartnerPrograms() )

        try {
            // creacion de usuario en bbdd
            const {data} = await WalletApi.post<User>('/auth/new', {email, name, lastName, password})

             localStorage.setItem('token', data.token)

            const user: User = {
                uid: data.uid,
                name: data.name,
                lastName: data.lastName,
                memberNumber: data.memberNumber,
                token: data.token
            }

            const newPartnerProgram = {
                memberNumber: data.memberNumber,
                programs: {
                    "program":"FR",
                        "programImage":"https://res.cloudinary.com/dpbqntcxi/image/upload/v1703269978/fr-wallet/memberships/FR_Classic_xniazc.png",
                        "member":{
                        "ownerNumber": data.memberNumber,
                        "availablePoints":"0",
                        "level":"Clasica",
                        "pointsNextLevel":"100000",
                        "nextLevel":"Platino",
                        "pointsOverdue":"0",
                        "antiguedad":"03/05/2021 00:00:00"
                        }
                }
            }
            // creacion de membresia del usuario en bbdd
            const resp = await WalletApi.post('partnerPrograms', newPartnerProgram)

            
            dispatch(onLogin(user))
            dispatch(onSetPartnerPrograms(resp.data.partnerProgram.programs))

        } catch (error) {
            const err = error as AxiosError<Error>
            dispatch( onLogout(err.response?.data.msg) )

        }
    }

    const startLogout = () => {
        localStorage.clear()
        dispatch( onLogoutPartnerPrograms() )
        dispatch( onLogout('') )
    }

    // revisamos si el token es valido o no
    const checkAuthToken = async() => {
        // sí no existe deslogeamos al usuario
        const token = localStorage.getItem('token')
        if(!token) return dispatch( onLogout('') )

        // intentamos renovar nuestro token
        try {
            const {data} = await WalletApi.get('/auth/renew')
            localStorage.setItem('token', data.token)
            dispatch( onLogin({ name: data.name, lastName: data.lastName, uid: data.uid, memberNumber: data.memberNumber }) )

        } catch (error) {
            startLogout()
        }
    }

    


    return{
        //* propiedades
        status,
        user,
        errorMessage,

        // * metodos
        startLogin,
        startRegister,
        startLogout,
        checkAuthToken
    }
}
