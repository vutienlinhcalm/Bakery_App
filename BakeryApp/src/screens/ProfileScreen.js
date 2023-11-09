import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../../firebase'

const ProfileScreen = ({navigation}) => {
  
  const handleLogout = () =>{
    firebase.auth().signOut().then(function() { () => {
      navigation.navigate('SignIn')
    }
    }, function(error) {
      console.log(error);
    });
  }
  return (
    <View style={styles.container}>
      <Text>ProfileScreen:{auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout} >
        <Text style={styles.buttonText}>Đăng xuất</Text>

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