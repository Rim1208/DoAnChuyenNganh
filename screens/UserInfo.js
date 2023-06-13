import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {CallURL, colors, fontsize, images} from '../constant';
import ComboBox from 'react-native-combobox';
import axios from 'axios';
import Taskbar from './Taskbar';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabBottomUser from './TabBottomUser';

export default function Userinfo() {
  const [iduser, setiduser] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('id').then(result => {
      setiduser(result);
    });
  }, [AsyncStorage.getItem('id')]);
  const navigation = useNavigation();
  const [tendn, settendn] = useState();
  const [diachi, setdiachi] = useState();
  const [sodt, setsodt] = useState();
  const [email, setemail] = useState();

  const [data, setdata] = useState([]);

  useEffect(() => {
    calGetUrl(iduser);
  }, [data]);

  const calGetUrl = async id => {
    axios
      .get(CallURL.URL_gettkid, {
        params: {
          id: id,
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
  const UpdateUser = async (id, tendn, diachi, sodt, email) => {
    axios
      .get(CallURL.URL_suatk, {
        params: {
          id: id,
          tendn: tendn,
          diachi: diachi,
          sodt: sodt,
          email: email,
        },
      })

      .then(res => {
        // console.log(typeof res.data.data);
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
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Signin" />
      </View>
      <View
        style={{
          flex: 15,
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UserInfo');
            }}>
            <Image
              source={images.account}
              style={{
                width: 70,
                height: 70,
                alignSelf: 'center',
                borderWidth: 1,
                tintColor: colors.success,
                borderRadius: 20,
                marginEnd: 10,
              }}
            />
            <View>
              <Text
                style={{
                  marginLeft: 15,
                  color: colors.success,
                  fontWeight: 'bold',
                }}>
                Hồ sơ
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginLeft: 30}}
            onPress={() => {
              navigation.navigate('MyOrder');
            }}>
            <Image
              source={images.order}
              style={{
                width: 70,
                height: 70,
                // tintColor: colors.success,
                alignSelf: 'center',
                borderWidth: 1,
                borderRadius: 20,
                marginEnd: 10,
              }}
            />
            <View>
              <Text style={{color: colors.inactive}}>Đơn hàng của bạn</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 55, marginTop: 10}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{flex: 1, padding: 20}}>
              <View
                style={{
                  flex: 20,
                  alignItems: 'center',
                  marginBottom: 30,
                }}>
                <Text style={{fontSize: fontsize.h3, color: colors.black}}>
                  Hồ sơ cá nhân
                </Text>
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
                    Tên :
                  </Text>
                </View>
                <View style={{flex: 70}}>
                  <TextInput
                    onChangeText={text => {
                      settendn(item.tendn);
                      setdiachi(item.diachi);
                      setsodt(item.sodt);
                      setemail(item.email);
                      settendn(text);
                    }}
                    defaultValue={item.tendn}
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
                    Địa chỉ:
                  </Text>
                </View>
                <View style={{flex: 70}}>
                  <TextInput
                    onChangeText={text => {
                      setdiachi(text);
                    }}
                    defaultValue={item.email}
                    style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
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
                    Số điện thoại:
                  </Text>
                </View>
                <View style={{flex: 70}}>
                  <TextInput
                    onChangeText={text => {
                      setsodt(text);
                    }}
                    defaultValue={item.sodt}
                    style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
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
                    Email:
                  </Text>
                </View>
                <View style={{flex: 70}}>
                  <TextInput
                    onChangeText={text => {
                      setemail(text);
                    }}
                    defaultValue={item.email}
                    style={{borderWidth: 1, borderRadius: 40, height: '80%'}}
                    placeholder="number"
                    placeholderTextColor={colors.placeholder}
                  />
                </View>
              </View>

              <View
                style={{
                  flex: 10,
                }}></View>
            </View>

            // <Text style={styles.item}>{item.tenloaisp}</Text>
          )}
        />
      </View>

      <View style={{flex: 10, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            UpdateUser(iduser, tendn, diachi, sodt, email);
            alert(tendn + diachi + sodt + email);
          }}
          style={{
            width: '30%',
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
            Cập nhật
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 10}}>
        <TabBottomUser></TabBottomUser>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
