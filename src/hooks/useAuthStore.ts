import { WalletApi } from '../api/WalletApi';
import { User, UserLogin, UserRegister } from '../interfaces/interfaces';
import { onChecking, onLogin, onLogout } from '../store';
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

            const errorMessage = error.response.data.msg
            dispatch( onLogout(errorMessage) )

        }
    }

    const startRegister = async({ email, name, lastName, password }: UserRegister) => {

        dispatch(onChecking())

        try {
            const {data} = await WalletApi.post<User>('/auth/new', {email, name, lastName, password})

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

            const errorMessage = error.response.data.msg
            dispatch( onLogout(errorMessage) )

        }
    }

    const startLogout = () => {
        localStorage.clear()
        dispatch( onLogout() )
    }

    // revisamos si el token es valido o no
    const checkAuthToken = async() => {
        // sí no existe deslogeamos al usuario
        const token = localStorage.getItem('token')
        if(!token) return dispatch( onLogout() )

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
