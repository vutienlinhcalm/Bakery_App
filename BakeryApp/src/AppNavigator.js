import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgetPassScreen from './screens/ForgetPassScreen';
import PickUpScreen from './screens/PickUpScreen';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
     
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Splash' component={SplashScreen}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name='SignIn' component={SignInScreen}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name='Register' component={RegisterScreen}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name='Forget' component={ForgetPassScreen}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name='PickUp' component={PickUpScreen}></Stack.Screen>
      </Stack.Navigator>  

  )
}

export default AppNavigator