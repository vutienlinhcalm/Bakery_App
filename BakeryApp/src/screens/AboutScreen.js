import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const AboutScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('SignIn');
    },3000)
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AboutScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
    }
});
export default AboutScreen