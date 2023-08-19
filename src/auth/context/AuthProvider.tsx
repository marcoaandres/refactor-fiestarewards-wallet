import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
// import { types } from '../types/types'
import { UserState } from '../../interfaces/interfaces'

type AuthProviderProps = {
    children: JSX.Element
}
const INITIAL_STATE: UserState = {
    isLogged: false,
}
// FUNCION INICIADORA PARA EL REDUCER
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        isLogged: !!user,
        user
    }
}
export const AuthProvider = ({ children } : AuthProviderProps) => {
    // utilizamos el reducer
    const [state, dispach] = useReducer(AuthReducer, INITIAL_STATE, init);

    // FUNCION QUE SE MANDA A LLMAR CUANDO EL USUARIO HACE LOGIN
    const login = ({name = '', lastName=''}) => {
        const user = {
            id: '1231232',
            name,
            lastName
        };
        const action = {
            type: 'login',
            payload: user
        }

        // GUARDANDO USUARIO EN LOCALSTORAGE
        localStorage.setItem('user', JSON.stringify(user));
        // DESPACHANDO LA ACCION
        dispach(action);
    }

    // FUNCION QUE SE MANDA A LLMAR CUANDO EL USUARIO HACE LOGOUT
    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: "logout",
        };
        dispach(action);
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            // METODOS
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
