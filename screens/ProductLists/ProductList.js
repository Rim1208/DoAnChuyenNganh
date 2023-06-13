import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

import image from '../../constant/images';
import {images, icons, fontsize, colors, CallURL} from '../../constant';
import Icons from 'react-native-vector-icons/FontAwesome5';
import ProductItem from './ProductItem';
import Product2Item from './Product2Item';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Taskbar from '../Taskbar';
import axios from 'axios';
import TabBottomUser from '../TabBottomUser';
function ProductList(props) {
  const {navigation} = props;
  const route = useRoute();
  const idloaisp = route.params?.idloaisp;
  const [noidungtim, setnoidungtim] = useState();
  const [data, setdata] = useState([]);

  useEffect(() => {
    calGetUrl();
  }, [data]);

  const calGetUrl = async () => {
    axios
      .get(CallURL.URL_sptheodm, {
        params: {
          idloaisp: idloaisp,
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
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 10,
        }}>
        <Taskbar navigation={navigation} title="Danh mục" />
      </View>

      <View
        style={{
          top: 20,
          flex: 80,
        }}>
        <View style={{flex: 80}}>
          <FlatList
            data={data}
            key={data.id}
            renderItem={({item}) => (
              <ProductItem navigation={navigation} products={item} />
            )}
          />
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
export default ProductList;
