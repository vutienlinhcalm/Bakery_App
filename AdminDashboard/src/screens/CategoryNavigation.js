import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from './CategoryScreen';
import AddCategory from './AddCategory';
import CategoryDetail from './CategoryDetail';
const Stack = createStackNavigator();
const CategoryNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen  name="Detail" component={CategoryDetail} />
      <Stack.Screen options={{headerShown:false}} name="AddCategory" component={AddCategory} />
    </Stack.Navigator>
  )
}

export default CategoryNavigation