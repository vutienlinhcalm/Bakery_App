import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import * as React from 'react';
import CardContainerTemp from '../components/Card-containerTemp';



const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Text style={styles.text}>Banh kem</Text>
      <CardContainerTemp/>
      <Text style={styles.text}>Banh Sinh Nhat</Text>
      <CardContainerTemp/>
      <Text style={styles.text}>Banh Nuong</Text>
      <CardContainerTemp/>
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