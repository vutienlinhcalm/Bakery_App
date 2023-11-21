import { View, Text, Image,StyleSheet,TouchableOpacity,SafeAreaView,ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import CustomTextInput from '../common/CustomTextInput';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/compat/auth';
import {auth} from '../../configfirebase';
const LoginScreen = ({navigation}) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[loading, setLoading] = useState(false);
    const[badEmail, setBadEmail] = useState(false);
    const[badPassword, setBadPassword] = useState(false);
    const validate = ()=>{
        if(email ==''){
            setBadEmail(true);
        } else {
            setBadEmail(false);
        }
        if(password ==''){
            setBadPassword(true);
        } else{
            setBadPassword(false);
        }
    }
    const SignIn =async()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredentials=>{
            const user = userCredentials.user;
        })
        .catch(function(error) {
            console.log(error);
        });
    }
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <Image
            source={require('../image/HolmesSweet.png')}
            style={styles.image}
        />
       <Text style={styles.text}>Đăng Nhập</Text>
       <CustomTextInput
        placeholder={'Email'}
        icon={source=require('../image/mail.png')}
        value={email}
        onChangeText={(txt)=>{
            setEmail(txt);
        }}
       />
       {
        badEmail === true && (<Text style={{marginTop:10,alignSelf:'center', color:'red'}}>Vui lòng nhập số điện thoại</Text>)
       }
       <CustomTextInput 
       placeholder={'Mật khẩu'}
       icon={source=require('../image/lock.png')}
       type={'password'}
       value={password}
       onChangeText={(txt)=>{
            setPassword(txt);
       }}
       />
       {
        badPassword === true && (<Text style={{marginTop:10,alignSelf:'center', color:'red'}}>Vui lòng nhập mật khẩu</Text>)
       }
      
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
            validate();
            SignIn();
        }}>
        <Text style={styles.buttonText}>
            Đăng Nhập
        </Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        alignSelf: 'center',
        marginTop:200,
        borderRadius:50,
    },
    text:{
        marginTop:50,
        fontSize:32,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    button:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
        marginTop:30,
        width:'85%',
        height:50,
        borderRadius:50,
    },
    buttonText:{
        color:'#000000',
        fontSize:28,
        fontWeight: 'bold',
    },
    textbuttom:{
        marginTop:20,
        fontSize:28,
        fontWeight: '600',
        alignSelf: 'center',
        textDecorationLine:'underline'
    }
})

export default LoginScreen