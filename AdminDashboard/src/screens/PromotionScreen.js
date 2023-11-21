import { View, Text, StyleSheet,ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Swipeable } from 'react-native-gesture-handler'

const PromotionScreen = () => {
  const rightSwipeable = () => {
    return(
      <View style={styles.swipRight}>
      <TouchableOpacity style={styles.wrapDelete}>
        <Text style={styles.txtDelete}>Xóa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapDelete}>
        <Text style={styles.txtDelete}>Sửa</Text>
      </TouchableOpacity>
      </View>
    )
  }
  return (
    <ScrollView>
    <Swipeable renderRightActions={rightSwipeable}>
    <View style={styles.container}>
        <Text style={styles.textheader}>Giảm giá lần đặt hàng đầu tiên</Text>
        <Text style={styles.txtPrice}>Giá : 30000</Text>
        <View style={styles.btnContainer}>
          <Text style={styles.txtdate}>15.11.2023</Text>
          <Text style={styles.txtSpace}>-</Text>
          <Text style={styles.txtdate}>15.12.2023</Text>
        </View>
    </View>
    </Swipeable>
    <View style={styles.container}>
        <Text style={styles.textheader}>Giảm giá lần đặt hàng đầu tiên</Text>
        <Text style={styles.txtPrice}>Giá : 30000</Text>
        <View style={styles.btnContainer}>
          <Text style={styles.txtdate}>15.11.2023</Text>
          <Text style={styles.txtSpace}>-</Text>
          <Text style={styles.txtdate}>15.12.2023</Text>
        </View>
    </View>
  </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    margin: 5,
    padding:10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  textheader:{
    fontSize: 20,
    fontWeight:'bold',
  },
  txtPrice:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    paddingTop: 10,
  },
  txtdate:{
    fontSize: 18,
    fontWeight: '500'
  },
  txtSpace:{
    fontSize: 18,
    marginHorizontal: 10,
  },
  swipRight:{
    height: 100,
    flexDirection: 'row',
  },
  wrapDelete:{
    backgroundColor:'yellow',
    marginVertical: 10,
    width: 100,
    height: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  txtDelete:{
    fontSize: 24,
    fontWeight: 'bold'
  }


});
export default PromotionScreen