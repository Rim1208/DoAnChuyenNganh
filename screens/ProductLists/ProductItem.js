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
function ProductItem(props) {
  const {id, tenhang, soluong, dongia, anh, ngay, mota, iddanhmuc} =
    props.products; //destructuring an object
  const navigation = props.navigation;
  return (
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
        height: 150,
        paddingStart: 10,
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 10,
          marginRight: 15,
        }}
        source={{
          uri: anh,
        }}
      />
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontsize.h4,
            fontWeight: 'bold',
          }}>
          {tenhang}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'black',
          }}
        />

        <Text
          style={{
            height: 95,
            color: colors.inactive,
            fontSize: fontsize.h4,
          }}>
          Detail: {mota}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default ProductItem;
