import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import SignInScreen from './screens/SignInScreen';
import MyOrderSceen from './screens/MyOrderSceen';
const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen  name="Profile" component={ProfileScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignIn" component={SignInScreen}  options={{headerShown:false}} />
        <Stack.Screen name="MyOrder" component={MyOrderSceen}  options={{headerShown:false}} />
        
      </Stack.Navigator>
  )
}

export default ProfileStack