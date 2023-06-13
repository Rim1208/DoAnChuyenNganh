import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

import {images, icons, fontsize, colors, CallURL} from '../constant';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {isValiEmail, isValiPassword} from '../utilies/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Taskbar from './Taskbar';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import TabBottomUser from './TabBottomUser';
function Signin(props) {
  //state for validating
  const [errorEmail, seterrorEmail] = useState('');
  const [errorPassword, seterrorPassword] = useState('');
  // state to store email/password
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // state keyboard isShow
  const [KeyboardIsShown, setKeyboardIsShown] = useState(false);
  // check condition login
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValiEmail(email) == true &&
    isValiPassword(password) == true;
  // check click enter input yet?

  const [dataUser, setdataUser] = useState([]);
  const [dataAdmin, setdataAdmin] = useState([]);

  useEffect(() => {
    CallGetUser();
  }, [dataUser]);

  useEffect(() => {
    CallGetAdmin();
  }, [dataAdmin]);
  const CallGetUser = async () => {
    axios
      .get(CallURL.URL_getuser)

      .then(res => {
        // console.log(typeof res.data.data);
        setdataUser(res.data.data);
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
  const CallGetAdmin = async () => {
    axios
      .get(CallURL.URL_getadmin)

      .then(res => {
        // console.log(typeof res.data.data);
        setdataAdmin(res.data.data);
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

  //currentuser
  const [email1, setemail1] = useState('anhtu@gmail.com');
  const [password1, setpassword1] = useState('12345');

  const checkuser = (email, email1, password, password1) => {
    dataUser.map(Item => {
      if (email == Item.tendn && password == Item.matkhau) return true;
    });
    return false;
  };
  const checkadmin = (email, emailadmin, password, passwordadmin) => {
    return false;
  };
  const {navigation} = props;

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Signin" user="anhtu" />
      </View>
      <View
        style={{
          flex: 20,
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontsize.h1,
            fontWeight: 'bold',
            width: '50%',
          }}>
          Already have an Account?
        </Text>
        <Image
          source={images.computer}
          style={{
            width: 120,
            height: 100,
            alignItems: 'center',
            borderRadius: 50,
          }}
        />
      </View>
      <View
        style={{
          flex: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: fontsize.h2,
            color: colors.primary,
            fontWeight: 'bold',
          }}>
          ĐĂNG NHẬP
        </Text>
      </View>
      <View
        style={{
          flex: 50,
        }}>
        <KeyboardAwareScrollView>
          <View
            style={{
              marginHorizontal: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontsize.h5,
                color: colors.primary,
              }}>
              Tên đăng nhập:
            </Text>
            <TextInput
              onChangeText={text => {
                // set errormail with enough condition yet?
                seterrorEmail(
                  isValiEmail(text) == true ? '' : 'Chưa nhập tên đăng nhập',
                );
                setemail(text);
              }}
              placeholder=""
              placeholderTextColor={colors.placeholder}
            />

            <View
              style={{
                height: 1,
                backgroundColor: colors.primary,
              }}
            />

            <Text
              style={{
                color: 'red',
                fontSize: fontsize.h5,
                marginTop: 5,
              }}>
              {errorEmail}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,

              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontsize.h5,
                color: colors.primary,
              }}>
              Mật khẩu:
            </Text>
            <TextInput
              onChangeText={text => {
                seterrorPassword(
                  isValiPassword(text) == true
                    ? ''
                    : 'Mật khẩu phải hơn 2 ký tự',
                );
                setpassword(text);
              }}
              style={{
                marginBottom: 5,
              }}
              secureTextEntry={true}
              placeholder=""
              placeholderTextColor={colors.placeholder}
            />
            <View
              style={{
                height: 1,
                backgroundColor: colors.primary,
              }}
            />
            <Text
              style={{
                color: 'red',
                fontSize: fontsize.h5,
                marginTop: 5,
              }}>
              {errorPassword}
            </Text>
          </View>
        </KeyboardAwareScrollView>
        {/* Check KeyboardIsShown == false is keyborad hide and show button */}

        {KeyboardIsShown == false && (
          <View
            style={{
              flex: 50,
              marginHorizontal: 20,
              padding: 20,
            }}>
            <TouchableOpacity
              disabled={isValidationOK() == false}
              onPress={() => {
                let success = false;
                dataUser.map(Item => {
                  if (email == Item.tendn && password == Item.matkhau) {
                    AsyncStorage.setItem('username', Item.tendn);
                    AsyncStorage.setItem('password', Item.matkhau);
                    AsyncStorage.setItem('id', Item.id);
                    navigation.navigate('Homescreen');
                    success = true;
                  }
                });
                dataAdmin.map(Item => {
                  if (email == Item.tendn && password == Item.matkhau) {
                    AsyncStorage.setItem('username', Item.tendn);
                    AsyncStorage.setItem('password', Item.matkhau);
                    AsyncStorage.setItem('id', Item.id);
                    navigation.navigate('MystackAdmin');
                    success = true;
                  }
                });
                if (success == false) {
                  alert('Tài khoản hoặc mật khẩu sai');
                }
              }}
              title="LOGIN"
              style={{
                width: '50%',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  isValidationOK() == true ? colors.primary : colors.inactive,
                borderRadius: 40,
                borderColor: colors.primary,
                borderWidth: 1,
                height: 40,
                borderRadius: 40,
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: fontsize.h5,
                }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MystackRegister');
              }}>
              <Text
                style={{
                  padding: 10,
                  color: colors.primary,
                  fontSize: fontsize.h5,
                  alignSelf: 'center',
                }}>
                Tạo tài khoản mới ngay?
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
export default Signin;
