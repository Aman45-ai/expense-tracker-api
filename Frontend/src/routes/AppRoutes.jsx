import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "../components/pages/Dashboard"
import Login from "../components/pages/Login"
import Signup from "../components/pages/Signup"
import ProtectedRoutes from './ProtectedRoutes'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoutes>
                        <Dashboard />
                    </ProtectedRoutes>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes