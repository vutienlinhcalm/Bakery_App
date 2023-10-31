import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import CartScreen from './screens/CartScreen';
import BrandScreen from './screens/BrandScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationScreen from './screens/NotificationScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo,Foundation,Ionicons } from '@expo/vector-icons'; 


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
export default function App() {
  return (
    
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
    //     <Stack.Screen name='About' component={AboutScreen}></Stack.Screen>
    //   </Stack.Navigator>  
    // </NavigationContainer>
    <NavigationContainer>
    <Tab.Navigator screenOptions={
      {
        tabBarActiveTintColor:'blue',
      }
    }>
      <Tab.Screen
      options={{
        tabBarLabel:'Trang chủ',
        tabBarIcon:()=>(<Entypo name="home" size={24} color="black" />)
      }}
      name="Hom" 
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
      name='Profile' component={ProfileScreen}/>

    </Tab.Navigator>
    </NavigationContainer>
    
  );
}