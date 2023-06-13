import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {colors, fontsize, images, CallURL} from '../constant';
import ComboBox from 'react-native-combobox';
import axios from 'axios';
import TabBottomUser from './TabBottomUser';
import {useNavigation} from '@react-navigation/native';
import Taskbar from './Taskbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function MyDelivered() {
  navigation = useNavigation();
  const [data, setdata] = useState([]);

  const [iduser, setiduser] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('id').then(result => {
      setiduser(result);
    });
  }, [AsyncStorage.getItem('id')]);
  useEffect(() => {
    calGetUrl(3, iduser);
  }, [data]);
  const calGetUrl = async (trangthai, idkhachhang) => {
    axios
      .get(CallURL.URL_getdhuser, {
        params: {
          trangthai: trangthai,
          idkhachhang: idkhachhang,
        },
      })

      .then(res => {
        // console.log(typeof res.data.data);
        setdata(res.data.data);
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

  const UpdateOrder = async (id, trangthai) => {
    axios
      .get(CallURL.URL_capnhatdh, {
        params: {
          id: id,
          trangthai: trangthai,
        },
      })

      .then(res => {
        // console.log(typeof res.data.data);
        setdata(res.data.data);
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
    <View
      style={{
        flex: 1,
        backgroundColor: '#f5f5f5',
      }}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="MyDelivered" />
      </View>

      <View
        style={{
          flex: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          marginLeft: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyOrder');
          }}>
          <Image
            source={images.duyet}
            style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              marginEnd: 10,
            }}
          />
          <View>
            <Text style={{color: colors.inactive}}>Chờ xác nhận</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyDelivering');
          }}>
          <Image
            source={images.danggiao}
            style={{
              width: 70,
              height: 70,

              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              marginEnd: 10,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{color: colors.inactive}}>Đang giao</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyDelivered');
          }}>
          <Image
            source={images.dagiaomau}
            style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              marginEnd: 10,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{color: colors.success, fontWeight: 'bold'}}>
              Đã giao
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyCancelOrder');
          }}>
          <Image
            source={images.huydon}
            style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              marginEnd: 10,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{color: colors.inactive}}>Đơn hàng đã hủy </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 60, backgroundColor: colors.white}}>
        <View
          style={{
            flex: 5,
            flexDirection: 'row',
            padding: 10,
            borderBottomWidth: 1,
            borderColor: colors.black,
          }}>
          <View style={{flex: 25, alignItems: 'center'}}>
            <Text>Tên người mua</Text>
          </View>
          <View style={{flex: 25, alignItems: 'center'}}>
            <Text>Email</Text>
          </View>
          <View style={{flex: 25, alignItems: 'center'}}>
            <Text>Tổng sản phẩm</Text>
          </View>
          <View style={{flex: 25, alignItems: 'center'}}>
            <Text>Tổng tiền</Text>
          </View>
        </View>
        <View style={{flex: 95}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  height: 100,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    height: 50,
                    flexDirection: 'row',
                    backgroundColor: '#f5f5f5',
                    marginHorizontal: 10,
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text>{item.tenkhachhang}</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text>{item.email}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text>{item.tongsanpham}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text>{item.tongtien} VNĐ</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 40,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginHorizontal: 10,
                    backgroundColor: '#f5f5f5',
                  }}>
                  <Text style={{marginRight: 10, fontWeight: 'bold'}}>
                    Tình Trạng: Đã giao hàng
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
      <View style={{flex: 10}}>
        <TabBottomUser />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
