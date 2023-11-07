import React from "react";
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Card from "./cards";


const CardContainerTemp = () => {
    return(
        <ScrollView horizontal style={styles.container}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 'auto',
        borderColor: 'black',
        borderEndWidth: 2,
        height: 220,
        
    },
    text:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'gray',
    }
});
export default CardContainerTemp