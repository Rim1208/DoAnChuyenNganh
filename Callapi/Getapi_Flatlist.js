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
import {CallURL, colors, fontsize, images} from '../constant';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import TabBottom from '../admin/TabBottom';

function Getapi_Flatlist(props) {
  const navigation = useNavigation();

  const [data, setdata] = useState([]);

  useEffect(() => {
    calGetUrl();
  }, [data]);

  const calGetUrl = async () => {
    axios
      .get(CallURL.URL_gethh, {
        params: {
          page: 1,
          idloaisp: 1,
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

  const calladdProduct = async () => {
    axios
      // them hang hoa
      .get(URL_themhh, {
        params: {
          tensanpham: 'Lắp ráp Dream 6645B',
          soluong: '20',
          gia: '85.000',
          anh: 'https://dochoitreem.com/wp-content/uploads/2020/12/Lap-rap-Dream-6645B-500x480.jpg',
          mota: 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.',
          iddanhmuc: '1',
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

  const callDeleteProduct = async idhh => {
    axios
      // them hang hoa
      .get(CallURL.URL_xoahh, {
        params: {
          id: idhh,
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
  // renderItem = ({item, index}) => {
  //   return (
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         marginTop: 8,
  //         padding: 5,
  //         shadowColor: '#000',
  //         shadowRadius: 4,
  //         ShadowOpacity: 0.25,
  //         alignItems: 'center',
  //       }}>
  //       <Image
  //         source={{uri: item.hinhloaisp}}
  //         style={{width: 100, height: 100}}
  //         resizeMode="contain"
  //       />
  //       <Text>
  //         {item.tenloaisp}
  //
  //       </Text>
  //     </View>
  //   );
  // };

  // const renderItem = ({item}) => (
  //   <View key={item.key}>
  //     <Text>{item.title}</Text>
  //   </View>
  // );
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
      <View style={{flex: 80}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 8,
                padding: 5,
                backgroundColor: '#FFF',
                shadowRadius: 4,
                ShadowOpacity: 0.25,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 90,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RepairProduct', {
                      id: item.id,
                      tensanpham: item.tenhang,
                      soluong: item.soluong,
                      gia: item.gia,
                      anh: item.anh,
                      mota: item.mota,
                      iddanhmuc: item.iddanhmuc,
                    });
                  }}>
                  <Image
                    source={{
                      uri: item.anh,
                    }}
                    style={{width: 60, height: 60}}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RepairProduct', {
                      id: item.id,
                      tensanpham: item.tenhang,
                      soluong: item.soluong,
                      gia: item.dongia,
                      anh: item.anh,
                      mota: item.mota,
                      iddanhmuc: item.iddanhmuc,
                    });
                  }}>
                  <Text>{item.tenhang}</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    callDeleteProduct(item.id);
                  }}>
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
        <TouchableOpacity
          onPress={() => {
            // calladdProduct();
            navigation.navigate('AddProduct');
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
            Thêm hàng hóa
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 10}}>
        <TabBottom />
      </View>
    </View>
  );
  // return(
  //   // <View
  //   //   style={{
  //   //     flex: 1,
  //   //   }}>
  //   //   <View
  //   //     style={{
  //   //       flex: 50,
  //   //       flexDirection: 'row',
  //   //       justifyContent: 'center',
  //   //       alignItems: 'center',
  //   //     }}>
  //   //     <TouchableOpacity
  //   //       onPress={calGetUrl}
  //   //       style={{
  //   //         borderWidth: 1,
  //   //         borderRadius: 5,
  //   //         height: 30,
  //   //         width: 50,
  //   //         justifyContent: 'center',
  //   //         alignItems: 'center',
  //   //       }}>
  //   //       <Text>GET</Text>
  //   //     </TouchableOpacity>
  //   //     <TouchableOpacity
  //   //       style={{
  //   //         borderWidth: 1,
  //   //         borderRadius: 5,
  //   //         height: 30,
  //   //         width: 90,
  //   //         justifyContent: 'center',
  //   //         alignItems: 'center',
  //   //       }}>
  //   //       <Text>GET With ID</Text>
  //   //     </TouchableOpacity>
  //   //     <TouchableOpacity
  //   //       style={{
  //   //         borderWidth: 1,
  //   //         borderRadius: 5,
  //   //         height: 30,
  //   //         width: 50,
  //   //         justifyContent: 'center',
  //   //         alignItems: 'center',
  //   //       }}>
  //   //       <Text>Post</Text>
  //   //     </TouchableOpacity>
  //   //     <TouchableOpacity
  //   //       style={{
  //   //         borderWidth: 1,
  //   //         borderRadius: 5,
  //   //         height: 30,
  //   //         width: 50,
  //   //         justifyContent: 'center',
  //   //         alignItems: 'center',
  //   //       }}>
  //   //       <Text>Query</Text>
  //   //     </TouchableOpacity>
  //   //   </View>
  //   //   <View
  //   //     style={{
  //   //       flex: 50,
  //   //       flexDirection: 'row',
  //   //       marginHorizontal: 5,
  //   //       borderWidth: 1,
  //   //       borderRadius: 5,
  //   //     }}>
  //   //     {data.map(item => (
  //   //       <Text style={{marginHorizontal: 5}}>{item.tenloaisp}</Text>
  //   //     ))}
  //   //   </View>
  //   // </View>

  //   // <View style={{flex: 50}}>
  //   //   {isloading ? (
  //   //     <ActivityIndicator />
  //   //   ) : (
  //   //     <FlatList
  //   //       style={{}}
  //   //       data={data}
  //   //       renderItem={({item}) => (
  //   //         <View
  //   //           style={{
  //   //             flexDirection: 'row',
  //   //             marginTop: 8,
  //   //             padding: 5,
  //   //             shadowColor: '#000',
  //   //             shadowRadius: 4,
  //   //             ShadowOpacity: 0.25,
  //   //             alignItems: 'center',
  //   //           }}>
  //   //           <Image
  //   //             source={{
  //   //               uri: 'https://media.bibomart.com.vn/resize.460x-/media/catalog/product/b/a/banh-gao-lut-huu-co-pho-mai-bi-do-hinh-que.jpg',
  //   //             }}
  //   //             style={{width: 100, height: 100}}
  //   //             resizeMode="contain"
  //   //           />
  //   //           <Text>{item.name}</Text>
  //   //         </View>
  //   //       )}
  //   //       keyExtractor={item => `key-${item.id}`}
  //   //     />
  //   //   )}
  //   // </View>
  // )
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
export default Getapi_Flatlist;
