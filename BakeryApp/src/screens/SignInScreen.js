import { Text, Image,StyleSheet,TouchableOpacity,SafeAreaView,ScrollView,Alert } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../common/CustomTextInput'
import firebase from 'firebase/compat/app';
const SignInScreen = ({navigation}) => {
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
            if(error){
                Alert.alert('Đăng nhập không thành công', 'Tên đăng nhập hoặc mật khẩu không đúng', [
                    {
                      text: 'Đóng',
                      style: {color:'#FF5757'},
                    }
                  ]);
            }
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
       
        <TouchableOpacity style={styles.textbuttom}
        onPress={() => navigation.navigate('Register')}>
           <Text>
           Bạn chưa có tài khoản?
           </Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.textbuttom}
        onPress={() => navigation.navigate('Forget')}>
           <Text>
            Quên mật khẩu ?
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
        backgroundColor:'#FF5757',
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
        fontSize:32,
        fontWeight: 'bold',
    },
    textbuttom:{
        marginTop:20,
        fontSize:32,
        fontWeight: '600',
        alignSelf: 'center',
        textDecorationLine:'underline'
    }
})

export default SignInScreen