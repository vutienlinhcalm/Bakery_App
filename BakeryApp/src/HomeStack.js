import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PickUpScreen from './screens/PickUpScreen';
import CartScreen from './screens/CartScreen';
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen  name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="PickUp" component={PickUpScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Cart" component={CartScreen}  options={{headerShown:false}} />       
      </Stack.Navigator>
  )
  
}

export default HomeStack