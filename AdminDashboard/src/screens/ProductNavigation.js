import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from './ProductScreen';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
const Stack = createStackNavigator();

const ProductNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="ProductScreen" component={ProductScreen} />
      <Stack.Screen  name="Detail" component={ProductDetail} />
      <Stack.Screen options={{headerShown:false}} name="AddProduct" component={AddProduct} />
    </Stack.Navigator>
  )
}

export default ProductNavigation