import { Image, Text, View } from "react-native";



export function Type(props) {
    return(
        <View>
            <Text>{props.name}</Text>
            <Image
        source={require('../../assets/favicon.png'
        )}></Image>
        </View>
    )
}