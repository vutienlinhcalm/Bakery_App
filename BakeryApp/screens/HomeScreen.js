import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import * as React from 'react';
import { TypeContainer } from '../components/Catagogy/TypeContainer';



const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Text style={styles.text}>Banh kem</Text>
      <TypeContainer/>
      <Text style={styles.text}>Banh Sinh Nhat</Text>
      <TypeContainer/>
      <Text style={styles.text}>Banh Nuong</Text>
      <TypeContainer/>
    </ScrollView>
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