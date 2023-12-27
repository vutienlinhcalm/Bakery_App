import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert
} from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const[adress, setAdress] = useState('');
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const deliveryTime = [
    {
      id: "0",
      name: "Hôm nay",
    },
    {
      id: "1",
      name: "Ngày mai",
    },
    {
      id: "2",
      name: "Ngày kia",
    },
  ];

  const times = [
    {
      id: "0",
      time: "10:00 AM",
    },
    {
      id: "1",
      time: "11:00 AM",
    },
    {
      id: "2",
      time: "12:00 AM",
    },
    {
      id: "3",
      time: "1:00 PM",
    },
    {
      id: "4",
      time: "2:00 PM",
    },
    {
      id: "5",
      time: "3:00 PM",
    },
    {
      id: "6",
      time: "4:00 PM",
    },
    {
      id: "7",
      time: "5:00 PM",
    },
    {
      id: "8",
      time: "6:00 PM",
    },
    {
      id: "9",
      time: "7:00 PM",
    },
    {
      id: "10",
      time: "8:00 PM",
    },
  ];
  const navigation = useNavigation();
  const proceedToCart = () => {
      if(!selectedDate || !selectedTime || !delivery){
        Alert.alert(
            "dữ liệu trống",
            "Vui lòng điền đầy đủ các trường",
            [
              {
                text: "Hủy",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Đồng Ý", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
      }
      if(selectedDate && selectedTime && delivery){
        navigation.replace("Cart",{
            pickUpDate:selectedDate,
            selectedTime:selectedTime,
            no_Of_days:delivery,
            Adress:adress,

        })
      }
  }

  return (
    <>
      <View style={{marginTop:50}}>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Địa Chỉ
        </Text>
        <TextInput
          value={adress}
          onChangeText={(txt)=>{
            setAdress(txt);
        }}
          style={{
            padding: 40,
            borderColor: "gray",
            borderWidth: 1,
            paddingVertical: 80,
            borderRadius: 10,
            margin: 10,
          }}
        />

        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Ngày đặt hàng
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2024-01-01")}
          endDate={new Date("2024-01-31")}
          initialSelectedDate={new Date("2020-08-22")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />

        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Thời gian nhận
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Ngày nhận
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
              onPress={() => setDelivery(item.name)}
              key={i}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            marginTop:"auto",
            padding: 10,
            marginBottom: 40,
            margin: 15,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | {total} vnĐ
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "white",
                marginVertical: 5,
              }}
            >
              Tổng tiền
            </Text>
          </View>

          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
              Tới giỏ hàng
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});