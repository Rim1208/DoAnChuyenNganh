import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component, useState} from 'react';
import {colors, fontsize, CallURL} from '../constant';
import TabBottom from '../admin/TabBottom';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';
import {useNavigation} from '@react-navigation/native';
export default function AddProduct() {
  const navigation = useNavigation();
  const [tensanpham, settensanpham] = useState();
  const [soluong, setsoluong] = useState();
  const [gia, setgia] = useState();
  const [anh, setanh] = useState();
  const [mota, setmota] = useState();
  const [iddanhmuc, setiddanhmuc] = useState();

  const countries = [
    'ĐỒ CHƠI LẮP RÁP',
    'ĐỒ CHƠI NẤU ĂN',
    'ĐỒ CHƠI GIÁO DỤC',
    'BÚP BÊ',
  ];

  const calladdProduct = async (
    tensanpham,
    soluong,
    gia,
    anh,
    mota,
    iddanhmuc,
  ) => {
    axios
      // them hang hoa
      .get(CallURL.URL_themhh, {
        params: {
          tensanpham: tensanpham,
          soluong: soluong,
          gia: gia,
          anh: anh,
          mota: mota,
          iddanhmuc: iddanhmuc,
        },
      })
      .then(res => {
        // console.log(typeof res.data.data);
        // console.log(JSON.stringify(res.data.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View style={{flex: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: fontsize.h3, color: colors.black}}>
          Add Product Form
        </Text>
      </View>
      <View style={{flex: 50, padding: 10}}>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 30}}>
            <Text style={{fontSize: fontsize.h5, color: colors.black}}>
              Tên hàng:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              onChangeText={text => {
                settensanpham(text);
                console.log(tensanpham);
              }}
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="Đồ chơi trẻ em"
              placeholderTextColor={colors.placeholder}
            />
          </View>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 30}}>
            <Text style={{fontSize: fontsize.h5, color: colors.black}}>
              Giá:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              onChangeText={text => {
                setgia(text);
                console.log(tensanpham);
              }}
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="VND"
              placeholderTextColor={colors.placeholder}
            />
          </View>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 30}}>
            <Text style={{fontSize: fontsize.h5, color: colors.black}}>
              Ảnh:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              onChangeText={text => {
                setanh(text);
                console.log(tensanpham);
              }}
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="http/URL"
              placeholderTextColor={colors.placeholder}
            />
          </View>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 30}}>
            <Text style={{fontSize: fontsize.h5, color: colors.black}}>
              Số lượng:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              onChangeText={text => {
                setsoluong(text);
                console.log(tensanpham);
              }}
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="number"
              placeholderTextColor={colors.placeholder}
            />
          </View>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{flex: 30}}>
            <Text style={{fontSize: fontsize.h5, color: colors.black}}>
              Mô tả:
            </Text>
          </View>
          <View style={{flex: 70}}>
            <TextInput
              onChangeText={text => {
                setmota(text);
                console.log(tensanpham);
              }}
              style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
              placeholder="Mô tả"
              placeholderTextColor={colors.placeholder}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 30}}>
          <Text style={{fontSize: fontsize.h5, color: colors.black}}>
            Loại sản phẩm:
          </Text>
        </View>
        <View style={{flex: 70}}>
          <View style={{height: 40, zIndex: 1}}>
            <SelectDropdown
              buttonStyle={{
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: 'center',
              }}
              defaultButtonText={'Loại sản phẩm'}
              data={countries}
              onSelect={(selectedItem, index) => {
                setiddanhmuc(index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 10}}>
        <TouchableOpacity
          onPress={() => {
            calladdProduct(tensanpham, soluong, gia, anh, mota, iddanhmuc + 1);
            console.log(tensanpham, soluong, gia, anh, mota, iddanhmuc);
            navigation.goBack();
          }}
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.success,
            borderRadius: 40,
            borderColor: colors.success,
            borderWidth: 1,
            height: 40,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: fontsize.h4,
            }}>
            Thêm hàng hóa
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 10}}>
        <TabBottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
