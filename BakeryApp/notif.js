import React, { Component } from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
export default class NotificationScreen extends Component {
    render(){
        return(
        <View style={styles.container}>
        <Image source={require('./logo.png')} style={styles.logo} />
     <Text style={styles.container}>Chúc mừng bạn đăng ký thành công và nhận thưởng [10 điểm].</Text>
     </View>)
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    logo: {
      width: 50,
      height: 50,
      marginRight: 10,
    }
})