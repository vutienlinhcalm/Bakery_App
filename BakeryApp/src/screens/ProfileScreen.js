import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../../firebase'

const ProfileScreen = ({navigation}) => {
  // const[name,setName] = useState('')

  // useEffect(()=>{
  //   firebase.firestore().collection('users')
  //   .doc(firebase.auth().currentUser.uid).get()
  //   .then((snapshot)=>{
  //     if (snapshot.exists){
  //       setName(snapshot.data())
  //     }else{
  //       console.log('user does not exists')
  //     }
  //   })
  // },[]);
  const handleLogout = () =>{
    firebase.auth().signOut().then(function() { () => {
      navigation.navigate('SignIn')
    }
    }, function(error) {
      console.log(error);
    });
  }

  const changePassword = () => {
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(()=>{
      alert('Đổi mật khẩu')
    }).catch((error) =>{
      alert(error)
    })
  }
  return (
    <View style={styles.container}>
      <Text>ProfileScreen:{auth.currentUser?.uid}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout} >
        <Text style={styles.buttonText}>Đăng xuất</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={changePassword} >
        <Text style={styles.buttonText}>Đổi Mật Khẩu</Text>

      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
})
export default ProfileScreen