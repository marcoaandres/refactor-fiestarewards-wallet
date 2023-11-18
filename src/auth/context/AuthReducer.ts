import {User, AuthState } from "../../interfaces/interfaces"

// acciones del reducer
type UserAction =  
    | { type: 'LOGIN', payload: User }
    | { type: 'LOGOUT' }

// SE CONSIDERA MALA PRACTICA MANDAR A LLAMAR EL LOCALSTORAGE, FETCH, AXIOS, ETC EN UN REDUCER
// EL REDUCER SOLO DEBE RESOLVER CON EL STATE Y LA ACTION ENVIADO

/**
 * creacion de nuevo estado o modificacion del estado
 * @param state - estado actual
 * @param action - lo que utilizamos para retornar un nuevo estado
 * @returns - el estado no se muta, simplemente se retorna un nuevo estado con los argumentos recibidos
 */
export const AuthReducer = ( state: AuthState, action: UserAction ): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }    

        case 'LOGOUT':
            return {
                isLogged: false,
            }  
        default:
            return state;
    }
}