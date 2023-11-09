import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import ProfileScreen from './screens/ProfileScreen';


const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='ProfileScreen' component={ProfileScreen}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name='SignIn' component={SignInScreen}></Stack.Screen>
    </Stack.Navigator>  
    
  )
};

export default ProfileStack;