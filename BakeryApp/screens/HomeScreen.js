import { StyleSheet, View, Text, Button } from 'react-native'
import * as React from 'react';



const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title='Go to About' onPress={() => navigation.navigate('About')}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
    }
});
export default HomeScreen