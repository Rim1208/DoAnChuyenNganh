import {
  Text,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import TabBottom from './TabBottom';
import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fontsize, images} from '../constant';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export default function AdminScreen(props) {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 80, padding: 20, marginTop: 20}}>
        <KeyboardAwareScrollView>
          <View style={{flex: 1}}>
            <View
              style={{
                marginBottom: 20,
                flex: 25,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.white,
                borderRadius: 10,
                borderColor: colors.primary,
                borderWidth: 1,
                paddingHorizontal: 30,
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontsize.h4,
                  marginBottom: 10,
                }}>
                Quản lý Hàng hóa
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 70}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    Tổng số sản phẩm đầu:
                  </Text>
                </View>
                <View style={{flex: 30, alignSelf: 'flex-end'}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    200
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 70}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    Tổng số sản phẩm còn lại:
                  </Text>
                </View>
                <View style={{flex: 30, alignSelf: 'flex-end'}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    200
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 70}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    Số lượng sản phẩm mới tháng 11:
                  </Text>
                </View>
                <View style={{flex: 30, alignSelf: 'flex-end'}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    100
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 70}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    Tổng số mặt hàng
                  </Text>
                </View>
                <View style={{flex: 30, alignSelf: 'flex-end'}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    16
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                marginBottom: 20,
                flex: 25,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.white,
                borderRadius: 10,
                borderColor: colors.primary,
                borderWidth: 1,
                padding: 30,
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontsize.h4,
                  marginBottom: 10,
                }}>
                Quản lý Tài khoản
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 70}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    Tài khoản mới :
                  </Text>
                </View>
                <View style={{flex: 30, alignSelf: 'flex-end'}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    10
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 70}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    Tổng số tài khoản:
                  </Text>
                </View>
                <View style={{flex: 30, alignSelf: 'flex-end'}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    20
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                marginBottom: 20,
                flex: 25,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.white,
                borderRadius: 10,
                borderColor: colors.primary,
                borderWidth: 1,
                padding: 30,
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontsize.h4,
                  marginBottom: 10,
                }}>
                Quản lý Đơn hàng
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 70}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    Tổng số đơn hàng:
                  </Text>
                </View>
                <View style={{flex: 30, alignSelf: 'flex-end'}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    16
                  </Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 70}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    Tổng số doanh thu:
                  </Text>
                </View>
                <View style={{flex: 30, alignSelf: 'flex-end'}}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontsize.h5,
                    }}>
                    3.700.000
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View style={{flex: 10}}>
        <TabBottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
