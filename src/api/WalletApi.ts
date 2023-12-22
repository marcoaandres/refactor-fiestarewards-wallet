import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables'

// * configuracion general de axios
const {VITE_API_URL} = getEnvVariables()

export const WalletApi = axios.create({
    baseURL: VITE_API_URL 
})

// * con axios podemos configurar interceptores
// * Nos permitira interceptar las peticiones (request y response)

// * vamos a trabajar en un interceptor en el request para que siempre se este enviando el token al request(peticion)

WalletApi.interceptors.request.use(config => {
    config.headers = {
        // los headers que existan
        ...config.headers,       
        // más uno personalizado
        'x-token': localStorage.getItem('token')
    }
return config
})

