import React from 'react'

import { AuthProvider } from '@/context/auth.context'

//-------------------------------------------------------------------------------------------

interface AppProvidersProps {
  children: React.ReactNode
}

export default function AppProviders({ children }: AppProvidersProps) {
  return <AuthProvider>{children}</AuthProvider>
}
