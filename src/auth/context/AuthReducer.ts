import {UserState } from "../../interfaces/interfaces";
// import { types } from "../types/types";

type UserAction = 
    { type: 'login', 
        payload: {
            id: string,
            name: string,
            lastName: string
        }
    } 
    | {type: 'logout'}

// SE CONSIDERA MALA PRACTICA MANDAR A LLAMAR EL LOCALSTORAGE, FETCH, AXIOS, ETC EN UN REDUCER
// EL REDUCER SOLO DEBE RESOLVER CON EL STATE Y LA ACTION ENVIADO
export const AuthReducer = ( state: UserState, action: UserAction ): UserState=> {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }    

        case 'logout':
            return {
                isLogged: false,
            }  
        default:
            return state;
    }
}