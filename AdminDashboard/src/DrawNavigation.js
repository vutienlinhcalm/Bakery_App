import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from './screens/CategoryScreen';
import ProductNavigation from './screens/ProductNavigation';
import StoreScreen from './screens/StoreScreen';
import PromotionScreen from './screens/PromotionScreen';
const Drawer = createDrawerNavigator();
const DrawNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Category" component={CategoryScreen} />
      <Drawer.Screen name="Product" component={ProductNavigation} />
      <Drawer.Screen name="Store" component={StoreScreen} />
      <Drawer.Screen name="Promotion" component={PromotionScreen} />
    </Drawer.Navigator>
  )
}

export default DrawNavigation