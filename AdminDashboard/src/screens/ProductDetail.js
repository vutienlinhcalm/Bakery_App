import { View, Text, Image, StyleSheet, TextInput,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductDetail = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Image 
                source={require('../image/pannacotta.png')}
                style={styles.image}
                resizeMode='cover'
            />
            <View>
                <TextInput style={styles.txtName}>Bánh PanaCotta vị dâu</TextInput>
                <View style={styles.wrapPrice}>
                <Text style={styles.txtHeadPrice}>Giá :</Text>
                <TextInput style={styles.txtPrice}>320000</TextInput>
                </View>
            </View>
           
            <Text style={styles.txtHeadInfo}>Thông tin về bánh</Text>
                <View style={styles.wrapInfo}>
                <Text style={styles.txtInfo}>Cốt bánh: </Text>
                <TextInput style={styles.txtInfoInput}>Bông lan truyền thống</TextInput>
                </View>
                <View style={styles.wrapInfo}>
                <Text style={styles.txtInfo}>Bảo Quản:</Text>
                <TextInput style={styles.txtInfoInput}>Từ 10-18 độ C</TextInput>
                </View>
            
            <TouchableOpacity style={styles.btnUpdate}>
                <Text style={styles.txtUpdate}>Cập nhật</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '90%',
        height: 300,
        marginVertical: 10,
    },
    txtName:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    wrapPrice:{
        flexDirection: 'row',
    },
    txtHeadPrice:{
        fontSize: 20,
        fontWeight:'500', 
        marginRight: 20,
    },
    txtPrice:{
        width: '50%',
        fontSize: 20,
        fontWeight:'500',
        height: 30,
        borderWidth: 1,
        paddingLeft: 10
    },
    txtHeadInfo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    wrapInfo:{
        flexDirection: 'row',
        justifyContent:'space-around',
        paddingVertical: 10,
    },
    txtInfo:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 5
    },
    txtInfoInput:{
        fontSize: 16,
        fontWeight: 'bold',
        borderWidth: 1,
        paddingLeft: 10,
        height: 30,
        width: '50%'
    },
    btnUpdate:{
        width: '60%',
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    txtUpdate:{
        fontSize: 24,
        fontWeight: 'bold'
    }
})
export default ProductDetail