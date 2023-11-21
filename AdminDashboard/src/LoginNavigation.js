import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen'
import LoginScreen from './screens/LoginScreen';
const Stack = createStackNavigator();
const LoginNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Splash' component={SplashScreen}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name='SignIn' component={LoginScreen}></Stack.Screen>
      </Stack.Navigator>  
  )
}

export default LoginNavigation