import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {images, colors, icons, fontsize} from '../../constant';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';

function _getColorFromStatus(amount) {
  /*
    if(status.toLowerCase().trim() == 'opening now') {
        return colors.success
    } else if(status.toLowerCase().trim() == 'closing soon') {
        return colors.alert
    } else if(status.toLowerCase().trim() == 'comming soon') {
        return colors.warning
    }
    return colors.success
    */
  return amount > 10
    ? colors.success
    : amount > 0
    ? colors.warning
    : colors.alert;

  // return status.toLowerCase().trim() == 'opening now' ? colors.success :
  //         (status.toLowerCase().trim() == 'closing soon' ? colors.alert :
  //         (status.toLowerCase().trim() == 'comming soon' ? colors.warning : colors.success))
}
function Product2Item(props) {
  const {id, tenhang, soluong, dongia, anh, ngay, mota, iddanhmuc} = props.data; //destructuring an object
  const navigation = props.navigation;

  return (
    <View
      style={{
        overflow: 'hidden',
        paddingBottom: 5,
        width: '48%',
        marginHorizontal: '1%',
        marginTop: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.29,
        shadowRadius: 3,
        elevation: 7,
        marginBottom: 10,
      }}>
      <View />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailProduct', {
            id: id,
            name: tenhang,
            amount: soluong,
            price: dongia,
            detail: mota,
            imageUrl: anh,
            date: ngay,
            iddanhmuc: iddanhmuc,
          });
        }}
        style={{
          height: '100%',
          flex: 1,
          marginStart: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            marginTop: 10,
            width: 120,
            height: 120,
            resizeMode: 'cover',
            borderRadius: 10,
            marginBottom: 10,
          }}
          source={{
            uri: anh,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: fontsize.h4,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {tenhang}
        </Text>
        <Text
          style={{
            color: 'red',
            fontSize: fontsize.h4,
            fontWeight: 'bold',
          }}>
          {dongia}đ
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Product2Item;
