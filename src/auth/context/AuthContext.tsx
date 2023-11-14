import { createContext } from "react";
import { AuthState, User } from "../../interfaces/interfaces";

export type AuthContextProps = {
    authState: AuthState,
    login: ( user : User) => void,
    logout: () => void,
}
// esto es basicamente un react component, va a contener componentes dentro de el
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
