import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import firebase from 'firebase/compat/app';
import {auth} from '../../firebase';
const ForgetPassScreen = ({navigation}) => {
    const[email, setEmail] = useState('');
    const[badEmail, setBadEmail] = useState(false);
    const forgetPassword = ()=>{    
        firebase.auth().sendPasswordResetEmail(email)
        .then(()=>{
            alert('quên mật khẩu')
        }).catch((error)=>{
            alert(error)
        })
    }
  return (
    <SafeAreaView>
        <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Email'}
        value={email}
        onChangeText={(txt)=>{
            setEmail(txt);
        }}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={forgetPassword}>
        <Text style={styles.buttonText}>
            Reset
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textbuttom}
        onPress={() => navigation.navigate('SignIn')}>
           <Text>
            Đăng nhập lại ?
           </Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
    },
    button:{
        backgroundColor:'#FF5757',
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
        marginTop:30,
        width:'85%',
        height:50,
        borderRadius:50,
    },
    textbuttom:{
        marginTop:20,
        fontSize:32,
        fontWeight: '600',
        alignSelf: 'center',
        textDecorationLine:'underline'
    },
    buttonText:{
        color:'#000000',
        fontSize:20,
        fontWeight: '500',
    },
})
export default ForgetPassScreen