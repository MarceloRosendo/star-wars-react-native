import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './core/theme'
import {
  JediForm
} from './screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="JediForm"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="JediForm" component={JediForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}