import  React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import AppNavigator from './src/AppNavigator';
import TabNavigator from './src/TabNavigator';
import { auth } from './firebase';
import store from "./store";



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
    <Provider store={store}>
      <NavigationContainer>
        {
         !user ? <AppNavigator/> : <TabNavigator/>
        }
      </NavigationContainer>
    </Provider>
      
      
    );
}
