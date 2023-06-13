import {
  Text,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fontsize, images, CallURL} from '../constant';
import axios from 'axios';
import TabBottom from '../admin/TabBottom';
const URL1 = 'https://jsonplaceholder.typicode.com/users';
function ManagerAccount() {
  const [data, setdata] = useState([]);

  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    calGetUrl();
  }, [data]);
  const calGetUrl = async () => {
    axios
      .get(CallURL.URL_gettk)

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

  const callDeleteAccount = async idtk => {
    axios
      // them hang hoa
      .get(CallURL.URL_xoatk, {
        params: {
          id: idtk,
        },
      })
      .then(res => {})
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  enderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  //handling onPress action
  // getListViewItem = item => {
  //   Alert.alert(item.key);
  // };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flex: 40}}>
          <Text>Tài khoản</Text>
        </View>
        <View style={{flex: 45}}>
          <Text>Tên người dùng</Text>
        </View>
        <View style={{flex: 15}}>
          <Text>Sự kiện</Text>
        </View>
      </View>
      <View style={{flex: 80, paddingHorizontal: 10}}>
        <FlatList
          data={data}
          renderItem={({item, key}) => (
            <View
              key={item.id}
              style={{
                height: 50,
                flexDirection: 'row',
                marginTop: 8,
                padding: 5,
                shadowColor: '#000',
                shadowRadius: 4,
                ShadowOpacity: 0.25,
                alignItems: 'center',
                borderTopWidth: 1,
              }}>
              <Text style={{fontSize: fontsize.h5, color: colors.black}}>
                {item.tendn}
              </Text>
              <View style={{alignItems: 'flex-end', flex: 1}}>
                <TouchableOpacity onPress={() => callDeleteAccount(item.id)}>
                  <Image
                    source={images.close}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: 'gray',
                    }}></Image>
                </TouchableOpacity>
              </View>
            </View>

            // <Text style={styles.item}>{item.tenloaisp}</Text>
          )}
        />
      </View>

      <View style={{flex: 10}}>
        <TabBottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default ManagerAccount;
