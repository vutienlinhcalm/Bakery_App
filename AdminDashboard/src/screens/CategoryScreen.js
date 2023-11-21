import { View, Text,SafeAreaView,
  ScrollView, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryScreen = () => {
  return (
   <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.wrap}>
          <Image
          source={require('../image/pannacotta.png')}
          style={styles.image}
          />
          <View>
          <Text style={styles.headText}>Pana Cotta</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Chỉnh sữa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.wrap}>
          <Image
          source={require('../image/pannacotta.png')}
          style={styles.image}
          />
          <View>
          <Text style={styles.headText}>Pana Cotta</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Chỉnh sữa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.wrap}>
          <Image
          source={require('../image/pannacotta.png')}
          style={styles.image}
          />
          <View>
          <Text style={styles.headText}>Pana Cotta</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Chỉnh sữa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.wrap}>
          <Image
          source={require('../image/pannacotta.png')}
          style={styles.image}
          />
          <View>
          <Text style={styles.headText}>Pana Cotta</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Chỉnh sữa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.wrap}>
          <Image
          source={require('../image/pannacotta.png')}
          style={styles.image}
          />
          <View>
          <Text style={styles.headText}>Pana Cotta</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Chỉnh sữa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.wrap}>
          <Image
          source={require('../image/pannacotta.png')}
          style={styles.image}
          />
          <View>
          <Text style={styles.headText}>Pana Cotta</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Chỉnh sữa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.wrap}>
          <Image
          source={require('../image/pannacotta.png')}
          style={styles.image}
          />
          <View>
          <Text style={styles.headText}>Pana Cotta</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Chỉnh sữa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.wrap}>
          <Image
          source={require('../image/pannacotta.png')}
          style={styles.image}
          />
          <View>
          <Text style={styles.headText}>Pana Cotta</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Chỉnh sữa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
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
    fontSize:24,
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
export default CategoryScreen