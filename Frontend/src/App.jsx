import { Toaster } from "sonner"
import AppRoutes from "./routes/AppRoutes"
import AuthProvider from "./context/AuthProvider"

const App = () => {
    return (
        <AuthProvider>
            <Toaster position="top-right" richColors/>
            <AppRoutes/>
        </AuthProvider>
    )
}

export default App