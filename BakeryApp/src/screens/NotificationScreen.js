import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
const NotificationScreen = ()=> {
    {
        return(
        <View style={styles.container}>
          <View style={styles.wrapnoti}>
            <Image source={require('../image/HolmesSweet.png')} style={styles.logo} />
            <Text style={styles.wraptext}>Chúc mừng bạn đăng ký thành công và nhận thưởng [10 điểm].</Text>
          </View>
          <View style={styles.wrapnoti}>
            <Image source={require('../image/HolmesSweet.png')} style={styles.logo} />
            <Text style={styles.wraptext}>Chúc mừng bạn đăng ký thành công và nhận thưởng [10 điểm].</Text>
          </View>
     </View>)
    }
}
export default NotificationScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:80
    },
    wrapnoti:{
      flexDirection: 'row',
      backgroundColor: '#F78CA2',
      padding: 20,
      marginBottom: 2,
    },
    logo: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 10,
    },
    wraptext:{
      width: '80%',
      marginLeft: 20,
    },
})