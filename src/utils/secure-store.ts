import * as SecureStore from 'expo-secure-store'

// Save a value to secure storage
export const saveToSecureStore = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value)
  } catch (error) {
    console.error('Error saving to secure storage', error)
  }
}

// Retrieve a value from secure storage
export const getFromSecureStore = async (
  key: string
): Promise<string | null> => {
  try {
    const value = await SecureStore.getItemAsync(key)
    return value
  } catch (error) {
    console.error('Error retrieving from secure storage', error)
    return null
  }
}

// Remove a value from secure storage
export const removeFromSecureStore = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key)
  } catch (error) {
    console.error('Error removing from secure storage', error)
  }
}
