import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {images, colors, fontsize} from '../constant';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function DrawerContent(props) {
  const [products, setproducts] = useState([
    {
      id: 1,
      name: 'ĐỒ CHƠI LẮP RÁP',
      imageUrl:
        'https://www.cuahangdochoi.vn/wp-content/uploads/2018/07/%C4%91%E1%BB%93-ch%C6%A1i-l%E1%BA%AFp-r%C3%A1p-cho-b%C3%A9-2.jpg',
    },
    {
      id: 2,
      name: 'ĐỒ CHƠI NẤU ĂN',
      imageUrl:
        'https://sudospaces.com/babycuatoi/2020/01/889-63-bep-nau-an-co-lon-cho-be.jpg',
    },
    {
      id: 3,
      name: 'ĐỒ CHƠI GIÁO DỤC',

      imageUrl:
        'https://media.shoptretho.com.vn/upload/image/news/20170717/do-choi-giao-duc-2.gif',
    },
    {
      id: 4,
      name: 'BÚP BÊ',
      imageUrl: 'https://cf.shopee.vn/file/0ab59f12d89178e1fa3b5825280ea854',
    },
  ]);
  const sizes = 100;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 70}}>
        <View style={styles.userInfoSection}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Homescreen');
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginBottom: 15,
              }}>
              <Avatar.Image source={images.home} size={50} />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                }}>
                <Title style={styles.title}>ETMBaby</Title>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <Drawer.Section style={styles.drawerSection}>
              {products.map(item => (
                <DrawerItem
                  icon={({focused, color}) => (
                    <Image
                      source={{uri: item.imageUrl}}
                      style={{height: 80, width: 80}}
                      resizeMode="contain"
                    />
                  )}
                  label={item.name}
                  key={item.id}
                  onPress={() => {
                    props.navigation.navigate('ProductList', {
                      idloaisp: item.id,
                    });
                  }}
                />
              ))}
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
      </View>

      <View style={{flex: 20}}>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({focused, color}) => (
              <Image
                source={images.infor}
                style={{height: 70, width: 70}}
                resizeMode="contain"
              />
            )}
            label="About"
            onPress={() => {
              props.navigation.navigate('About');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    backgroundColor: colors.primary,

    paddingLeft: 20,
  },
  title: {
    fontSize: fontsize.h2,
    color: 'white',
    marginTop: 5,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {},
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
