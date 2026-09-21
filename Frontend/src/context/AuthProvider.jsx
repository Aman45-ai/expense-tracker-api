import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken')|| null)
  const [isLoggedIn, setIsLoggedIn] = useState(!!accessToken)
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, accessToken, setAccessToken}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
