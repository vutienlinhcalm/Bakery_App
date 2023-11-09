import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import BrandScreen from './screens/BrandScreen';
import ProfileStack from './ProfileStack';
import NotificationScreen from './screens/NotificationScreen';
import { Entypo,Foundation,Ionicons } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
   
    <Tab.Navigator screenOptions={
      {
        tabBarActiveTintColor:'red',
      }
    }>
      <Tab.Screen
      options={{
        tabBarLabel:'Trang chủ',
        tabBarIcon:()=>(<Entypo name="home" size={24} color="black" />)
      }}
      name="Home" 
      component={HomeScreen} />
      <Tab.Screen 
      options={{
        tabBarLabel:'Đơn hàng',
        tabBarIcon:()=>(<Foundation name="shopping-cart" size={28} color="black" />)
      }}
      name="Cart" component={CartScreen} />
      <Tab.Screen 
      name='NameBrand' component={BrandScreen}/>
      <Tab.Screen
      options={{
        tabBarLabel:'Thông báo',
        tabBarIcon:()=>(<Ionicons name="notifications" size={24} color="black" /> )
      }}
      name='Notification' component={NotificationScreen}/>
      <Tab.Screen 
      options={{
        tabBarLabel:'Tài khoản',
         tabBarIcon:()=>(<Ionicons name="person" size={24} color="black" />)
      }}
      name='Profile' component={ProfileStack}/>

    </Tab.Navigator>
  )
}

export default TabNavigator