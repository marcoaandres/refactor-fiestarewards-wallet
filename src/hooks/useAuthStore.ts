import { WalletApi } from '../api/WalletApi';
import { User, UserLogin, UserRegister } from '../interfaces/interfaces';
import { onChecking, onLogin, onLogout } from '../store';
import { useAppDispatch, useAppSelector } from './useRedux';

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

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token')
        if(!token) return dispatch( onLogout() )

        try {
            const {data} = await WalletApi.get('/auth/renew')
            localStorage.setItem('token', data.token)
            dispatch( onLogin({ name: data.name, uid: data.uid }) )

        } catch (error) {
            localStorage.clear()
            dispatch( onLogout() )
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
        startLogout
    }
}
