import { View, Text, Image } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from './screens/CartScreen';
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';
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
        tabBarIcon:()=>(<Entypo name="home" size={24} color="black" />),
        
      }}
      name="Trang Chủ" 
      component={HomeStack} />

      <Tab.Screen 
      options={{
        tabBarLabel:'Giỏ hàng',
        tabBarIcon:()=>(<Foundation name="shopping-cart" size={28} color="black" />),
        
      }}
      name="Giỏ Hàng" component={CartScreen} />

      {/* <Tab.Screen 
      name='Store' component={BrandScreen}
      options={{
        tabBarLabel:'Cửa hàng',
        tabBarIcon:()=>(<Image style={{width:32, height:32, borderRadius: 10}} source={require('./image/HolmesSweet.png')}></Image>),
        headerShown:false
      }}
      /> */}

      {/* <Tab.Screen
      options={{
        tabBarLabel:'Thông báo',
        tabBarIcon:()=>(<Ionicons name="notifications" size={24} color="black" /> ),
        headerShown:false
      }}
      name='Notifi' component={NotificationScreen}/> */}

      <Tab.Screen 
      options={{
        tabBarLabel:'Tài khoản',
         tabBarIcon:()=>(<Ionicons name="person" size={24} color="black" />),
         
      }}
      name='Tài Khoản' component={ProfileStack}/>

    </Tab.Navigator>
  )
}

export default TabNavigator