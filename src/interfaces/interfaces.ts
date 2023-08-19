

export interface User{
    id: string,
    name: string,
    lastName: string
}

export interface UserState{
    isLogged: boolean
    user?: User
}

