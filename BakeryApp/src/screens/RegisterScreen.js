import { View, Text,StyleSheet,TouchableOpacity,Image, SafeAreaView,ScrollView, } from 'react-native'
import React,{useState} from 'react'
import CustomTextInput from '../common/CustomTextInput'
const RegisterScreen = ({navigation}) => {
  const[phone, setPhone] = useState('');
  const[email, setEmail] = useState('');
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');
  const[badPhone, setBadPhone] = useState(false);
  const[badEmail, setBadEmail] = useState(false);
  const[badUsername, setBadUsername] = useState(false);
  const[badPassword, setBadPassword] = useState(false);
  const[badConfirmPassword, setBadConfirmPassword] = useState(false);

  const validate = ()=>{
    if(phone =='' && phone.length < 10){
        setBadPhone(true);
    } else if (phone.length === 10){
      setBadPhone(false);
    }

    if(email ==''){
      setBadEmail(true);
    } else{
      setBadEmail(false);
    }

    if(username ==''){
      setBadUsername(true);
    } else{
      setBadUsername(false);
    }

    if(password ==''){
        setBadPassword(true);
    } else{
        setBadPassword(false);
    }
    
    if(password !== confirmPassword){
      setBadConfirmPassword(true);
    }else {
      setBadConfirmPassword(false);
    }
}
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Image
            source={require('../image/HolmesSweet.png')}
            style={styles.image}
        />
       <Text style={styles.text}>Tạo tài khoản</Text>
       <CustomTextInput
        placeholder={'Số điện thoại'}
        icon={source=require('../image/smartphone.png')}
        keyboardType={'numeric'}
        value={phone}
        onChangeText={(txt)=>{
            setPhone(txt);
        }}
       />
        {
        badPhone === true && (<Text style={{marginTop:10,alignSelf:'center', color:'red'}}>Vui lòng nhập số điện thoại</Text>)
       }
       <CustomTextInput 
       placeholder={'Email'}
       icon={source=require('../image/mail.png')}
       value={email}
        onChangeText={(txt)=>{
            setEmail(txt);
        }}
       />
        {
        badEmail === true && (<Text style={{marginTop:10,alignSelf:'center', color:'red'}}>Vui lòng nhập email</Text>)
       }
       <CustomTextInput 
       placeholder={'Tên tài khoản'}
       icon={source=require('../image/profile.png')}
       value={username}
        onChangeText={(txt)=>{
            setUsername(txt);
        }}
       />
        {
        badUsername === true && (<Text style={{marginTop:10,alignSelf:'center', color:'red'}}>Vui lòng tên tài khoản</Text>)
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
       <CustomTextInput 
       placeholder={'Xác nhận mật khẩu'}
       icon={source=require('../image/lock.png')}
       value={confirmPassword}
        onChangeText={(txt)=>{
          setConfirmPassword(txt);
        }}
       />
        {
        badConfirmPassword === true && (<Text style={{marginTop:10,alignSelf:'center', color:'red'}}>Vui lòng nhập đúng mật khẩu</Text>)
       }
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{validate()}}>
        <Text style={styles.buttonText}>
            Đăng Ký
        </Text>
        </TouchableOpacity>
        <Text style={styles.textbuttom}
        onPress={() => {navigation.goBack()}}>
            Bạn đã có tài khoản?
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  image:{
        width:100,
        height:100,
        alignSelf: 'center',
        marginTop:150,
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
        fontSize:24,
        fontWeight: '600',
        alignSelf: 'center',
        marginBottom:50,
        textDecorationLine: 'underline',
    }
})
export default RegisterScreen