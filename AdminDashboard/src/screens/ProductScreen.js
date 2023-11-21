import { View, Text,SafeAreaView,
  ScrollView, Image, StyleSheet,TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const ProductScreen = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
          <TouchableOpacity 
            style={styles.btnAdd}
            onPress={()=>{navigation.navigate('AddProduct')}}
          >
            <Text style={styles.AddText}>Thêm Sản Phẩm</Text>
          </TouchableOpacity>
        <View style={styles.wrap}>
          <Image
          source={require('../image/pannacotta.png')}
          style={styles.image}
          />
          <View>
          <Text style={styles.headText}>PanaCotta Dâu Tây</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity 
                style={styles.btn}
                onPress={() =>{navigation.navigate('Detail')}}
              >
                <Text style={styles.btnText}>Sửa</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.btn}
                onPress={()=>
                  Alert.alert(
                    'Xóa sản phẩm',
                    'Bạn muốn xóa sản phẩm này',
                  [
                    {
                      text: 'Hủy',
                      style: 'cancel',
                    },
                    {
                      text: 'Xóa',
                      onPress: () => Alert.alert('Bạn chắc chắn muốn xóa'),
                      style: 'cancel',
                    },
                  ],
                )
              }  
              >
                <Text style={styles.btnText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
       
      </View>
      
    </ScrollView>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent:'space-around',
    flexWrap: 'wrap',
  },
  btnAdd:{
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'center',
    marginTop:30,
    width:'85%',
    height:50,
    borderRadius:50,
  },
  AddText:{
    color:'#000000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  wrap:{
    width:'45%',
    backgroundColor:'red',
    borderRadius: 10,
   marginVertical: 5,
  },
  image:{
    alignSelf: 'center',
    marginVertical:10,
    width: 100,
    height: 100,
  },
  headText:{
    fontSize:20,
    fontWeight:'bold',
    paddingLeft: 10,
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingVertical:10,
  },
  btn:{
    width:60,
    height:40,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  btnText:{
    fontSize: 14,
    fontWeight:'600'
  }

})

export default ProductScreen