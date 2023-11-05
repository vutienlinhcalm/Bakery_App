import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

export default class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { id: 1, name: 'Bánh mì', price: 20000, image: require('./banhmi.jpg'), quantity: 1 },
        { id: 2, name: 'Bánh ngọt', price: 15000, image: require('./banhngot.jpg'), quantity: 1 },
      ],
    };
  }

  increaseQuantity = (itemId) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  };

  decreaseQuantity = (itemId) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      ),
    }));
  };

  renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}> {item.price.toFixed(0)} VND</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => this.decreaseQuantity(item.id)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => this.increaseQuantity(item.id)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const { cartItems } = this.state;
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Giỏ hàng</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderCartItem}
        />
        <Text style={styles.total}>Tổng cộng: {total.toFixed(0)} VND</Text>
        <Button title="Thanh toán" onPress={() => alert('Chức năng thanh toán chưa được triển khai.')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    flex: 1,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});
