
import { Button, View, Text, StyleSheet, Image } from 'react-native'

export function Card(props) {
    return(
        <View style={styles.container}>
            <Image style={styles.tinyLogo}
                source={require('../../assets/favicon.png')}
                />
                <Text>{props.name}</Text>
                <Text>{props.desp}</Text>
                <Text>{props.prize}</Text>
                <Button title="Buy">prize</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        margin: 5,
        padding: 6,
        height: 190,
        width: 150 ,
        borderRadius:10,
        borderColor: 'black',
        borderWidth: 1,
        
    },
    text:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'gray',
    },
    tinyLogo:{
        alignItems:'center',
        justifyContent:'flex-end',
    }
});
