import {AuthProvider} from './auth/context'
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}

export default App
