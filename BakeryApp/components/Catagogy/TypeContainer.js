import { Text, View } from "react-native";
import TypeData from "./TypeData";
import { Type } from "./Type";


const TypeElement = TypeData.map(items =>
    <Type
        key = {items.name}
        {...items}
        />)

export function TypeContainer() {
    return(
        <View>
            <Text>THis is catalogh</Text>
            {TypeElement}
        </View>
    )
}