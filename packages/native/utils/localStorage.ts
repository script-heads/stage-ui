import AsyncStorage from '@react-native-community/async-storage'

export default {
  getItem: async (key: string) => {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue ? JSON.parse(jsonValue) : null
  },
  setItem: async (key: string, value: any) => {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  },
  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key)
  },
  clear: async (key: string) => {
    await AsyncStorage.clear()
  },
}
