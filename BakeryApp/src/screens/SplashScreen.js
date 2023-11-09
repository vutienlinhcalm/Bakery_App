import { View, StyleSheet,Image } from 'react-native'
import React,{ useEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
          navigation.navigate('SignIn');
        },3000)
      },[])
  return (
    <View style ={styles.container}>
     <Image
        source={require('../image/HolmesSweet.png')}
        style={styles.image}
     />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:200,
        height:200,
        borderRadius:50,
        resizeMode:'center'
    }
});

export default SplashScreen