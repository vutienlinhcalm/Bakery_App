import { View, Text,StyleSheet,TextInput,Image } from 'react-native'
import React, { useState } from 'react'


const CustomTextInput = ({value,placeholder,onChangeText,keyboardType,icon,type}) => {
  return (
    <View style={styles.container}>
        <Image 
        source={icon} 
        style={styles.image}
        />
      <TextInput 
      value={value}
      onChangeText={(txt) => {
        onChangeText(txt)
      }}
      style={styles.textInput}
      placeholder={placeholder} 
      keyboardType={keyboardType ? keyboardType : 'default'}
      secureTextEntry ={type ? true : false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width:'90%',
        alignSelf: 'center',
        borderRadius:10,
        marginTop:20,
        borderWidth:1,
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft:10,
      },
      image:{
        width:24,
        height:24,
      },
      textInput:{
        paddingLeft:10,
      }
})
export default CustomTextInput