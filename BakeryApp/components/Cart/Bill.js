
import { View, Text } from "react-native";


export function Bill(props) {
    return(
        <View>
            <Text>this is Bill</Text>
            <Text>{props.name}</Text>
        </View>
    )
}