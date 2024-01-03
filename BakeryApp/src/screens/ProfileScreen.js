import { View, Text, TouchableOpacity,StyleSheet,Image,Pressable  } from 'react-native'
import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
import { auth,db } from '../../firebase'
import { doc, getDoc } from "firebase/firestore"
import { AntDesign } from '@expo/vector-icons';
const ProfileScreen = ({navigation}) => {
  const[name,setName] = useState([]);

  useEffect(() => {
    const userUid = auth.currentUser?.uid;
    const fetchUser = async () => {
      const docSnap = await getDoc(doc(db, "users", `${userUid}`));
      if (docSnap.exists()) {
        setName(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    fetchUser();
   
  }, []);

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
      <View style={styles.wrapuserinfo}>
        <Image
          source={require('../image/HolmesSweet.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.textname}>{name.username}</Text>
          <Text style={styles.text}>{name.email}</Text>
        </View>
      </View>
      {/* <Pressable style={styles.wraporder} onPress={()=>{navigation.navigate('MyOrder')}}>
       
          <Text style={styles.textorder}>Đơn hàng của bạn</Text>
          <AntDesign name="right" style={styles.icon} />
      </Pressable> */}
      <View style={styles.wrapbutton}>
      <TouchableOpacity style={styles.button} onPress={handleLogout} >
        <Text style={styles.buttonText}>Đăng xuất</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={changePassword} >
        <Text style={styles.buttonText}>Đổi Mật Khẩu</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    marginTop:10
  },
  button:{
    backgroundColor:'#FF5757',
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
    width:'100%',
    height:50,
    borderRadius:10,
},
buttonText:{
    color:'#000000',
    fontSize:28,
    fontWeight: 'bold',
},
wrapuserinfo:{
  flexDirection:'row',
  backgroundColor:'#FFFFFF',
  paddingVertical:15,
  marginBottom:10,
},
image:{
  width:60,
  height:60,
  marginHorizontal:20,
  borderRadius:50,
},
textname:{
  fontSize:24,
  fontWeight: 'bold',
},
wraporder:{
  flexDirection:'row',
  justifyContent:'space-around',
  backgroundColor:'#FFFFFF',
  hovercolor:'#fffff0',
},
textorder:{
  paddingVertical:20,
  fontSize:24,
  fontWeight: 'bold',
},
icon:{
  fontSize:24,
  color:'#000000',
  paddingTop:25,
}
})
export default ProfileScreen