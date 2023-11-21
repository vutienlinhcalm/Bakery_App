
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
