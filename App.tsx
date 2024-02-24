import { View, Text, StatusBar, Platform, SafeAreaView, Appearance } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import Index from './src/Navigation/Index'
import { store } from './Store'
export default function App() {
  React.useEffect(() => Appearance.setColorScheme('light'),
    [])
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Index />
      </SafeAreaProvider>
    </Provider>
  )
}