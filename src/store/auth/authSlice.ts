import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/interfaces';

// Define a type for the slice state
interface authState {
    status: string,
    user: User | undefined,
    errorMessage: string | undefined
  }

  const initialState: authState = {
    status: 'not-authenticated',
    user: undefined,
    errorMessage: undefined,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking'
            state.user = undefined
            state.errorMessage = undefined
        },
        onLogin: (state, {payload}) => {
            state.status = 'authenticated'
            state.user = payload
            state.errorMessage = undefined
        },
        onLogout: ( state, {payload} ) => {
            state.status = 'not-authenticated'
            state.user = undefined
            state.errorMessage = payload
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    onChecking,
    onLogin,
    onLogout
 } = authSlice.actions;