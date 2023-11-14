

export interface User{
    id: string,
    name: string,
    lastName: string
}

export interface AuthState{
    isLogged: boolean
    user?: User
}

