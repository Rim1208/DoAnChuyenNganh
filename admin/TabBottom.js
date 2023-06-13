import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {colors, images, fontsize} from '../constant';
import {useNavigation} from '@react-navigation/native';
export default function TabBottom(props) {
  const navigation = useNavigation();
  return (
    <View
      style={{flex: 1, flexDirection: 'row', backgroundColor: colors.white}}>
      <View
        style={{
          flex: 20,
          borderRightWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Admin');
          }}>
          <Image
            source={images.home}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <View>
            <Text style={{color: colors.inactive}}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 20,
          borderRightWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ManagerProduct');
          }}>
          <Image
            source={images.product}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <View>
            <Text style={{color: colors.inactive}}>Product</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 20,
          borderRightWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ManagerOrder');
          }}>
          <Image
            source={images.order}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <View>
            <Text style={{color: colors.inactive}}>Order</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderRightWidth: 1,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ManagerAccount');
          }}>
          <Image
            source={images.account}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <View>
            <Text style={{color: colors.inactive}}>Account</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 20, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ManagerShop');
          }}>
          <Image
            source={images.infor}
            style={{width: 30, height: 30, alignSelf: 'center'}}
          />
          <View>
            <Text style={{color: colors.inactive}}>Shop</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
