import { useRef } from 'react'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Brands from './Containers/Brands'
import Home from './Containers/Home'
import Models from './Containers/Models'
import ParameterScreen from './Containers/ParameterScreen'
import ParametersScreen from './Containers/ParametersScreen'
import RegionScreen from './Containers/RegionScreen'

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
        <Stack.Screen name='ParameterScreen' component={ParameterScreen}/>
        <Stack.Screen name='Brands' component={Brands}/>
        <Stack.Screen name='Models' component={Models}/>
        <Stack.Screen name='Region' component={RegionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}