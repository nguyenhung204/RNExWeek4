import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function CheckoutScreen() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 141800;

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const totalPrice = quantity * pricePerItem;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.productContainer}>
        <Image 
          source={{ uri: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/386/441/products/phuong-phap-giai-cac-dang-toan-thpt-nguyen-ham-tich-phan-va-ung-dung-1-2018-12-29-00-40-23.jpg?v=1595303965977' }} 
          style={styles.productImage} 
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productProvider}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPriceNew}>{pricePerItem.toLocaleString()} đ</Text>
          <Text style={styles.productPriceOld}>{pricePerItem.toLocaleString()} đ</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
              <Text>-</Text>
            </TouchableOpacity>
            <TextInput 
              style={styles.quantityInput} 
              value={String(quantity)} 
              editable={false} 
            />
            <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
              <Text>+</Text>
            </TouchableOpacity>
            <Text style={styles.productLink}>Mua sau</Text>
          </View>
        </View>
      </View>
      <View style = {
            {
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 30,
            }
          }>
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>Mã giảm giá đã lưu</Text>
            <Text style={{fontWeight: 'bold', color: 'blue', marginLeft: 10}}>Xem tại đây</Text>
          </View>

      <View style={styles.couponContainer}>
        <TextInput
          style={styles.couponInput}
          placeholder="Mã giảm giá"
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Tạm tính</Text>
        <Text style={styles.summaryPrice}>{totalPrice.toLocaleString()} đ</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Thành tiền</Text>
        <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} đ</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 100,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    width : '100%',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productProvider: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  productPriceOld: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
    marginBottom: 5,
  },
  productPriceNew: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e53935',
    marginBottom: 5,
  },
  productLink: {
    fontSize: 14,
    color: '#1e88e5',
    marginLeft: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  quantityInput: {
    width: 30,
    height: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  couponContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#1e88e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e53935',
  },
  checkoutButton: {
    backgroundColor: '#e53935',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});