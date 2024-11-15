import { router } from 'expo-router'
import React, { useEffect } from 'react'

import { useAuth } from '@/context/auth.context'

//-----------------------------------------------------------------------------------------------

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithAuth = (props: P) => {
    const { isAuthenticated } = useAuth()

    useEffect(() => {
      if (!isAuthenticated) {
        router.dismissAll()
        // router.navigate('')
      }
    }, [isAuthenticated, router])

    if (!isAuthenticated) {
      return null
    }

    return <WrappedComponent {...props} />
  }

  return ComponentWithAuth
}

export default withAuth
