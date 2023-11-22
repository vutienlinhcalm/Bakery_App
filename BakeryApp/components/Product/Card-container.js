import cardData from "./cardData";
import { StyleSheet, ScrollView, View, Text} from 'react-native'
import {Card} from "./cards";

const CardElement = cardData.map(items =>
    <Card 
       key = {items.id}
       {...items}
       />)



export function CardContainer() {
    return(
        <View>
            <Text>Container6</Text>
            <ScrollView horizontal>
                {CardElement}
            </ScrollView>
        </View>
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

