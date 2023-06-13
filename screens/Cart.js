import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import Taskbar from './Taskbar';
import {colors, fontsize, images, CallURL} from '../constant';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import TabBottomUser from './TabBottomUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Cart(props) {
  const navigation = useNavigation();
  const [valueNumeric, setvalueNumeric] = useState(2);
  const [data, setdata] = useState([]);
  const [iduser, setiduser] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('id').then(result => {
      setiduser(result);
    });
  }, [AsyncStorage.getItem('id')]);

  useEffect(() => {
    calGetUrl();
  }, [data]);

  const calGetUrl = async () => {
    axios
      .get(CallURL.URL_getcart)

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

  let result = 0;
  let result_soluongsp = 0;
  if(data){
    data.map(item => {
      result += item.gia * item.soluongmua;
      result_soluongsp += item.soluongmua;
    });
  }
 

  const updateCart = (idcart, soluongmua) => {
    // 👇️ passing function to setData method

    axios
      // them hang hoa
      .get(CallURL.URL_suagh, {
        params: {
          id: idcart,
          soluongmua: soluongmua,
        },
      })
      .then(res => {
        console.log(typeof res.data.data);
        console.log(JSON.stringify(res.data.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    // setdata(prevState => {
    //   const newState = prevState.map(obj => {
    //     // 👇️ if id equals 2, update country property
    //     if (obj.id == idcart) {
    //       return {...obj, soluongmua: soluongmua};
    //     }

    //     // 👇️ otherwise return object as is
    //     return obj;
    //   });

    //   return newState;
    // });
  };

  const DeleteCart = idcart => {
    // 👇️ passing function to setData method

    axios
      // them hang hoa
      .get(CallURL.URL_xoagh, {
        params: {
          id: idcart,
        },
      })
      .then(res => {
        console.log(typeof res.data.data);
        console.log(JSON.stringify(res.data.data));
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
      }}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Giỏ hàng" user="anhtu" />
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          flex: 60,
        }}>
         {data != null ? (<FlatList
          data={data}
          key={data.id}
          renderItem={({item}) => (
            <View
              style={{
                flex: 25,
                flexDirection: 'row',
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <View style={{flex: 40}}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                  source={{
                    uri: item.anh,
                  }}
                />
              </View>
              <View style={{flex: 50}}>
                <Text
                  style={{
                    fontSize: fontsize.h4,
                    fontWeight: 'bold',
                    marginBottom: 10,
                  }}>
                  {item.tenhang}
                </Text>
                <Text
                  style={{
                    marginBottom: 10,
                    fontSize: fontsize.h4,
                    color: colors.alert,
                    fontWeight: 'bold',
                  }}>
                  {item.gia * item.soluongmua}đ
                </Text>

                <NumericInput
                  key={item.id}
                  width={20}
                  minValue={0}
                  maxValue={100}
                  iconSize={100}
                  totalWidth={100}
                  totalHeight={35}
                  step={1}
                  height={20}
                  valueType="real"
                  rounded
                  textColor="#000"
                  iconStyle={{color: 'black'}}
                  initValue={Number(item.soluongmua)}
                  onChange={value => {
                    // setvalueNumeric(value);
                    updateCart(item.id, value);
                  }}
                />
              </View>
              <View
                style={{
                  flex: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{justifyContent: 'center'}}
                  onPress={() => {
                    DeleteCart(item.id);
                  }}>
                  <Image
                    source={images.close}
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: 'cover',
                      tintColor: 'gray',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />):(<View></View>)}
        
      </View>
      <View
        style={{
          flex: 20,
          marginBottom: 10,
        }}>
        <View
          style={{
            flex: 33,
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <View style={{flex: 50, justifyContent: 'center'}}>
            <Text>Thành tiền</Text>
          </View>
          <View
            style={{
              flex: 50,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: fontsize.h3, color: colors.alert}}>
              {result} đ
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 33,
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Payment', {
                result: result,
                result_soluongsp: result_soluongsp,
              });
            }}
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.alert,
              borderRadius: 40,
              borderColor: colors.primary,
              borderWidth: 1,
              height: 40,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: fontsize.h4,
              }}>
              Tiến hành đặt hàng
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 33,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Homescreen');
            }}
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.inactive,
              borderRadius: 40,
              borderColor: colors.primary,
              borderWidth: 1,
              height: 40,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: fontsize.h4,
              }}>
              Tiếp tục mua hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 10,
        }}>
        <TabBottomUser></TabBottomUser>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
