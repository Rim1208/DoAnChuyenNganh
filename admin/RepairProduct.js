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
import {useNavigation, useRoute} from '@react-navigation/native';
export default function RepairProduct() {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;
  const tensanpham = route.params?.tensanpham;
  const soluong = route.params?.soluong;
  const gia = route.params?.gia;
  const anh = route.params?.anh;
  const mota = route.params?.mota;
  const iddanhmuc = route.params?.iddanhmuc;
  const [tensanpham_ut, settensanpham_ut] = useState();
  const [soluong_ut, setsoluong_ut] = useState();
  const [gia_ut, setgia_ut] = useState();
  const [anh_ut, setanh_ut] = useState();
  const [mota_ut, setmota_ut] = useState();
  const [iddanhmuc_ut, setiddanhmuc_ut] = useState();

  const countries = [
    'ĐỒ CHƠI LẮP RÁP',
    'ĐỒ CHƠI NẤU ĂN',
    'ĐỒ CHƠI GIÁO DỤC',
    'BÚP BÊ',
  ];

  const callRepairProduct = async (
    id,
    tensanpham,
    soluong,
    gia,
    anh,
    mota,
    iddanhmuc,
  ) => {
    axios
      // them hang hoa
      .get(CallURL.URL_suahh, {
        params: {
          id: id,
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
          Repair Product Form
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
                settensanpham_ut(tensanpham);
                setanh_ut(anh);
                setgia_ut(gia);
                setmota_ut(mota);
                setiddanhmuc_ut(iddanhmuc);
                setsoluong_ut(soluong);

                settensanpham_ut(text);
                console.log(tensanpham_ut);
              }}
              defaultValue={tensanpham}
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
                setgia_ut(text);
                console.log(tensanpham_ut);
              }}
              defaultValue={gia}
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
                setanh_ut(text);
                console.log(tensanpham_ut);
              }}
              defaultValue={anh}
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
                setsoluong_ut(text);
                console.log(tensanpham_ut);
              }}
              defaultValue={soluong}
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
                setmota_ut(text);
                console.log(tensanpham_ut.toString());
              }}
              defaultValue={mota}
              style={{borderWidth: 1, borderRadius: 10, height: '80%'}}
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
              defaultButtonText={countries[Number(iddanhmuc)]}
              data={countries}
              onSelect={(selectedItem, index) => {
                setiddanhmuc_ut(index);
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
            callRepairProduct(
              id,
              tensanpham_ut,
              soluong_ut,
              gia_ut,
              anh_ut,
              mota_ut,
              iddanhmuc_ut,
            );
            alert(
              id +
                tensanpham_ut +
                soluong_ut +
                gia_ut +
                anh_ut +
                mota_ut +
                iddanhmuc_ut,
            );
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
            Sửa hàng hóa
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
