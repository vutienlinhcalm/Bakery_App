import { View, Text } from "react-native";
import { Bill } from "./Bill";
import BillData from "./BillData";

const BillElement = BillData.map(items =>
    <Bill
        key = {items.name}
        {...items}
        />)



export function CartChecker() {
    return(
        <View>
            <Text>This is CartChecker</Text>
            {BillElement}
        </View>
    )
    
}