import { StyleSheet, Text, ScrollView, TextInput, View, Pressable } from 'react-native'
import React,{useState, useEffect} from 'react';
import * as Location from "expo-location"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../ProductReducer";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import CardContainerTemp from '../../components/Card-containerTemp';
import Carousel from '../../components/Carousel';
import DressItem from '../../components/Card-containerTemp';
import { collection, getDocs,query, where } from "firebase/firestore";
import { db } from "../../firebase";

const HomeScreen = ({navigation}) => {
  const cart = useSelector((state) => state.cart.cart);
  const [items,setItems] = useState([]);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr,prev) => curr + prev,0);
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);
  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
  
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "allow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
  
    const { coords } = await Location.getCurrentPositionAsync();
     //console.log(coords)
    if (coords) {
      const { latitude, longitude } = coords;
  
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
  
      // console.log(response)
  
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = async () => {
      const colRef = collection(db,"products");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      items?.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);
  
  return (
    <>
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
      <Ionicons name="location" size={24} color="black" />
      <Text>{displayCurrentAddress}</Text>
      </View>
      {/* Search Bar */}
      <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 0.8,
            borderColor: "#C0C0C0",
            borderRadius: 7,
          }}
        >
          <TextInput placeholder="Search for items or More" />
          <Feather name="search" size={24} color="#fd5c63" />
      </View>
       {/* Image Carousel */}
       <Carousel />
       <Text style={styles.text}>Sản Phẩm</Text>
      {/* Render all the Products */}
      {product.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
    </ScrollView>
    {total === 0 ? (
            null
          ) : (
            <Pressable
            style={{
              backgroundColor: "#088F8F",
              padding: 10,
              marginBottom: 40,
              margin: 15,
              borderRadius: 7,
              flexDirection: "row",
              alignItems: "center",
              justifyContent:"space-between",
            }}
          >
            <View>
              <Text style={{fontSize:17,fontWeight:"600",color:"white"}}>{cart.length} items |   {total} vnĐ</Text>
              <Text style={{fontSize:15,fontWeight:"400",color:"white",marginVertical:6}}>Tổng tiền</Text>
            </View>
    
            <Pressable onPress={() => navigation.navigate('PickUp')}>
              <Text style={{fontSize:17,fontWeight:"600",color:"white"}}>Đặt hàng</Text>
            </Pressable>
          </Pressable>
          )}
     
    </>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    text:{
        marginTop:10,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft:10,
        color:'#FF5757'
    }
});
export default HomeScreen