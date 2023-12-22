import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables'

// * configuracion general de axios
const {VITE_API_URL} = getEnvVariables()

export const WalletApi = axios.create({
    baseURL: VITE_API_URL 
})



