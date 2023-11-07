import React from "react";
import { StyleSheet, View, Text } from 'react-native'
import cardData from "./cardData";
import Card from "./cards";

const CardElement = cardData.map(items =>
    <Card 
       key = {items.id}
       {...items}
       />)

export function CardContainer() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Container</Text>
            {CardElement}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
        margin: 'auto',
    },
    text:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'gray',
    }
});
