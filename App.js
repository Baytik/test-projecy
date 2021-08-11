import { useRef } from 'react'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Containers/Home'
import ParametersScreen from './Containers/ParametersScreen'

const Stack = createNativeStackNavigator()

export default function App () {
  const navRef = useRef()
  return (
    <NavigationContainer ref={navRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ParametersScreen' component={ParametersScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}