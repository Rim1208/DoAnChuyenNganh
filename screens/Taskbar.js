import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {colors, fontsize, images} from '../constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Taskbar(props) {
  const {title} = props;
  const {user} = props;
  const {navigation} = props;
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('username').then(result => {
      setusername(result);
    });
    AsyncStorage.getItem('password').then(result => {
      setpassword(result);
    });
  }, [AsyncStorage.getItem('username')]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.primary,
      }}>
      <View
        style={{
          flex: 20,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {title != 'Home' ? (
          <TouchableOpacity
            style={{marginLeft: 5}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={images.back}
              style={{
                width: 40,
                height: 40,
                tintColor: colors.white,
                alignItems: 'center',
              }}
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}

        <TouchableOpacity
          style={{marginLeft: 5}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={images.menu}
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              tintColor: colors.white,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Homescreen');
          }}>
          <Text style={styles.Text}>{title}</Text>
        </TouchableOpacity>
      </View>
      {username != null ? (
        <View
          style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{marginRight: 5}}
              onPress={() => {
                navigation.navigate('UserInfo');
              }}>
              <Text style={styles.Text}>{username}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setusername('');
                navigation.navigate('Signin');
                AsyncStorage.clear();
              }}>
              <Image
                source={images.logout}
                style={{
                  width: 25,
                  height: 25,
                  alignItems: 'center',
                  tintColor: colors.white,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signin');
            }}>
            <Image
              source={images.account}
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                tintColor: colors.white,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: colors.white,
    fontSize: fontsize.h3,
    fontWeight: 'bold',
  },
});
