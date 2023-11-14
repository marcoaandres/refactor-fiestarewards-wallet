import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { AuthState, User } from '../../interfaces/interfaces'

type AuthProviderProps = {
    children: JSX.Element | JSX.Element[]
}
//  
const INITIAL_STATE: AuthState = {
    isLogged: false
}
// FUNCION INICIADORA PARA EL REDUCER
const init = () => {
    const localStorageData = localStorage.getItem('user');
    const userData = localStorageData ? JSON.parse(localStorageData) : '';

    return {
        isLogged: !!userData,
        user: userData
    }
}

// esto es un HOC higher-order component, que recibe un children
export const AuthProvider = ({ children } : AuthProviderProps) => {
    // utilizamos el reducer
    const [authState, dispach] = useReducer(AuthReducer, INITIAL_STATE, init);

    // FUNCION QUE SE MANDA A LLAMAR CUANDO EL USUARIO HACE LOGIN
    const login = (user: User) => {        
        // GUARDANDO USUARIO EN LOCALSTORAGE
        localStorage.setItem('user', JSON.stringify(user));
        // DESPACHANDO LA ACCION
        dispach({ type: 'LOGIN', payload: user });
    }

    // FUNCION QUE SE MANDA A LLMAR CUANDO EL USUARIO HACE LOGOUT
    const logout = () => {
        localStorage.removeItem('user');
        dispach({type: 'LOGOUT'});
    }

    return (
        // value se expone globalmente a la app
        <AuthContext.Provider value={{
            authState,
            // METODOS
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
