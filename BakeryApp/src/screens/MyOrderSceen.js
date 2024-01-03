import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import firebase from 'firebase/compat/app';
import { auth,db } from '../../firebase'
import { doc, getDoc } from "firebase/firestore"
import { Ionicons } from "@expo/vector-icons";
const MyOrderSceen = ({navigation}) => {
    const[order,setOrder] = useState([]);
    useEffect(() => {
        const userUid = auth.currentUser?.uid;
        const fetchUser = async () => {
          const docSnap = await getDoc(doc(db, "users", `${userUid}`));
          if (docSnap.exists()) {
            setOrder(docSnap.data());
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        };
        fetchUser();
        //name.orders[0].productname
        console.log(order.orders[0].productname)
      }, []);
  return (
    <View>
        <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={24}
                color="black"
              />
            </View>
            <Pressable
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                marginLeft: 10,
                marginRight: 10,
                padding: 14,
              }}
            >
            
              {/* {
              order.orders[0].map((item, index) => ( */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 12,
                  }}
                //   key={index}
                >
                  <View>
                    {/* <Image
                      style={{ width: 70, height: 70 }}
                    //   source={{ uri: order.orders[0].image }}
                    /> */}
                 </View>
                  <Text style={{ width: 100, fontSize: 16, fontWeight: "500" }}>
                    {/* {order.orders[0].productname} */}
                  </Text>

                  {/* - + button */}
                  <Pressable
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: "center",
                      borderColor: "#BEBEBE",
                      borderWidth: 0.5,
                      borderRadius: 10,
                    }}
                  >
                    

                    <Pressable>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#088F8F",
                          paddingHorizontal: 8,
                          fontWeight: "600",
                        }}
                      >
                        {/* {order.orders[0].quantity} */}
                      </Text>
                    </Pressable>

                    
                  </Pressable>

                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    {/* {order.orders[0].price * order.orders[0].quantity} */}
                  </Text>
                </View>
              {/* ))} */}
            </Pressable>
    </View>
  )
}

export default MyOrderSceen

const styles = StyleSheet.create({})