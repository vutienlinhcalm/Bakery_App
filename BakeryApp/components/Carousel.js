import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';
const Carousel = () => {
    const images = [
        "https://firebasestorage.googleapis.com/v0/b/data-tiembanh.appspot.com/o/d80981d65d7466b40c5cf44a10116c96.jpg?alt=media&token=875eee74-52eb-4971-ba3e-47323e23446b",
        "https://firebasestorage.googleapis.com/v0/b/data-tiembanh.appspot.com/o/69c710e067ba7f3c5d0c7f85ef0552db.jpg?alt=media&token=295fa2ba-712e-4a15-b347-41ed0f846c6b",
        "https://firebasestorage.googleapis.com/v0/b/data-tiembanh.appspot.com/o/4fe78c1649e48ed048cf78a79556dcce.jpg?alt=media&token=fec672ce-51d8-411a-92ac-8da18c60df8b",
      ];
      return (
        <View>
          <SliderBox
            images={images}
            autoPlay
            circleLoop
            dotColor={"#13274F"}
            inactiveDotColor="#90A4AE"
            ImageComponentStyle={{
              borderRadius: 6,
              width: "94%",
            }}
          />
        </View>
      );
}

export default Carousel