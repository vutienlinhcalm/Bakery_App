import { View, Text, StyleSheet,ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BrandScreen = () => {
  return (
    <View style={{marginTop:60}}>

      <View style={styles.container}>
        <View style={styles.coverImage}>
        <Image style={styles.image} 
        source={require('../image/Banh1.png')}
        resizeMode={'contain'}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textheader}>Cơ sở Sala Quận 2</Text>
          <Text>312 P. Thảo Điền, Quận 2, Hồ Chí Minh, Việt Nam</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonCall}>
              <Image source={require('../image/telephone.png')} style={styles.btnImage}/>
              <Text style={styles.btnText}>Gọi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMap}>
            <Image source={require('../image/map.png')} style={styles.btnImage}/>
              <Text style={styles.btnText}>Bản đồ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.coverImage}>
        <Image style={styles.image} 
        source={require('../image/Banh1.png')}
        resizeMode={'contain'}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textheader}>Cơ sở Sala Quận Thủ Đức</Text>
          <Text>312 P. Thảo Điền, Quận Thủ Đức, Hồ Chí Minh, Việt Nam</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonCall}>
              <Image source={require('../image/telephone.png')} style={styles.btnImage}/>
              <Text style={styles.btnText}>Gọi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMap}>
            <Image source={require('../image/map.png')} style={styles.btnImage}/>
              <Text style={styles.btnText}>Bản đồ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    
  },
  coverImage:{
    width:'30%'
  },
  image:{
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 10,
  },
  textContainer:{
    width:'70%'
  },
  textheader:{
    fontSize: 20,
    fontWeight:'bold',
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    paddingTop: 10,
  },
  buttonCall:{
    backgroundColor:'red',
    width:60,
    height:20,
    borderRadius:8,
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginRight:10,
  },
  buttonMap:{
    backgroundColor:'red',
    width:70,
    height:20,
    borderRadius:8,
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  btnText:{
    fontSize: 12,
    marginTop: 1,
  },
  btnImage:{
    width: 12,
    height: 12,
    marginTop: 3,
  },

});

export default BrandScreen