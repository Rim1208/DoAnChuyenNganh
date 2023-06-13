import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fontsize, images} from '../constant';
import Taskbar from './Taskbar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import TabBottomUser from './TabBottomUser';
export default function About() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={images.shop}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            flex: 10,
          }}>
          <Taskbar navigation={navigation} title="About" user="anhtu" />
        </View>
        <View
          style={{
            margin: 20,
            top: 30,
            marginBottom: 30,
            flex: 80,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              top: 10,
              fontSize: fontsize.h3,
              color: colors.black,
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            THÔNG TIN CỬA HÀNG
          </Text>
          <KeyboardAwareScrollView>
            <View
              style={{
                backgroundColor: '#FFFFF0',
                marginVertical: 20,
                marginHorizontal: 20,
                flex: 25,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
              }}>
              <Image
                source={images.home}
                style={{
                  tintColor: colors.inactive,
                  height: 60,
                  width: 60,
                  marginRight: 20,
                  marginLeft: 20,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: fontsize.h4,
                  color: colors.black,
                }}>
                Tên shop: ETMBaby
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#FFFFF0',
                marginVertical: 20,
                marginHorizontal: 20,
                flex: 25,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
              }}>
              <Image
                source={images.address}
                style={{
                  tintColor: colors.inactive,
                  height: 60,
                  width: 60,
                  marginRight: 20,
                  marginLeft: 20,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: fontsize.h4,
                  color: colors.black,
                  height: 60,
                  width: 200,
                }}>
                Địa chỉ shop: 26 Huỳnh Văn Nghệ, Hòa Hải, Ngũ Hành Sơn
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#FFFFF0',
                marginVertical: 20,
                marginHorizontal: 20,
                flex: 25,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
              }}>
              <Image
                source={images.phone}
                style={{
                  tintColor: colors.inactive,
                  height: 60,
                  width: 60,
                  marginRight: 20,
                  marginLeft: 20,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: fontsize.h4,
                  color: colors.black,
                }}>
                Số điện thoại: 0764609999
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#FFFFF0',
                marginVertical: 20,
                marginHorizontal: 20,
                flex: 25,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
              }}>
              <Image
                source={images.email}
                style={{
                  tintColor: colors.inactive,
                  height: 60,
                  width: 60,
                  marginRight: 20,
                  marginLeft: 20,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: fontsize.h4,
                  color: colors.black,
                }}>
                Email: etmbaby@gmail.com
              </Text>
            </View>
          </KeyboardAwareScrollView>
        </View>
        <View
          style={{
            flex: 10,
          }}>
          <TabBottomUser></TabBottomUser>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
