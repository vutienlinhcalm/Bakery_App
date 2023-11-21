
import  React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';
import TabNavigator from './src/TabNavigator';
import { auth } from './firebase';


<<<<<<< HEAD
=======
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import BrandScreen from './screens/BrandScreen';
import ProfileScreen from './screens/ProfileScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo,Foundation,Ionicons } from '@expo/vector-icons'; 
import CartScreen from './cart';
import NotificationScreen from './notif';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
>>>>>>> Luc
export default function App() {
<<<<<<< HEAD
  const [initializing,setInitializing] = useState(true);
  const [user,setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if(initializing) setInitializing(false)
  }
  useEffect(()=>{
    const subcribe = auth.onAuthStateChanged(onAuthStateChanged)
    return subcribe;
  },[]);
=======
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
      name='Profile' component={ProfileScreen}/>
>>>>>>> Nhan

<<<<<<< HEAD
  if(initializing) return null;
    return (
      <NavigationContainer>
        {
         !user ? <AppNavigator/> : <TabNavigator/>
        }
      </NavigationContainer>
      
      
    );
  
=======
    </Tab.Navigator>
    </NavigationContainer>
    
  );
>>>>>>> Luc
}
