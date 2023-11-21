import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawNavigation from './src/DrawNavigation'
import LoginNavigation from './src/LoginNavigation';
import { useState,useEffect } from 'react';
import {auth} from './configfirebase'
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
         !user ? <LoginNavigation/> : <DrawNavigation/>
        }
      </NavigationContainer>
  );
}