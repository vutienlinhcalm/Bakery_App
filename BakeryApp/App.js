
import  React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';
import TabNavigator from './src/TabNavigator';
import { auth } from './firebase';


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

  if(initializing) return null;
    return (
      <NavigationContainer>
        {
         !user ? <AppNavigator/> : <TabNavigator/>
        }
      </NavigationContainer>
      
      
    );
  
}
