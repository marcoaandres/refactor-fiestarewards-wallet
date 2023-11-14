import {AuthProvider} from './auth/context'
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    // Con AuthProvider se exponen todas el contecto (las variables y metodos) a AppRouter
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}

export default App
