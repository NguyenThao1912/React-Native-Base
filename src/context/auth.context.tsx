import * as SecureStore from 'expo-secure-store'
import React, { createContext, useContext, useEffect,useState } from 'react'

import { SecureStoreKey } from '@/constants/secure-store.key'

interface AuthContextType {
  token: string | null
  setToken: (token: string | null) => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null)

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await SecureStore.getItemAsync(
        SecureStoreKey.ACCESS_TOKEN
      )

      if (storedToken) {
        setTokenState(storedToken)
      }
    }
    loadToken()
  }, [])

  const setToken = async (newToken: string | null) => {
    setTokenState(newToken)
    if (newToken) {
      await SecureStore.setItemAsync(SecureStoreKey.ACCESS_TOKEN, newToken)
    } else {
      await SecureStore.deleteItemAsync(SecureStoreKey.ACCESS_TOKEN)
    }
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
