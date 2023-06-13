import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, {Component, useState} from 'react';

const images = [
  'https://thietkeweb.vn/uploaded/H%C3%ACnh%202_%20Banner%20gi%C3%BAp%20t%C4%83ng%20l%C6%B0%E1%BB%A3t%20truy%20c%E1%BA%ADp%20website.png',
  'https://vicogroup.vn/images/upload/images/a371b07d9bd5d0810d6a29d0ae6c9694.jpg',
  'https://thietkeweb.vn/uploaded/H%C3%ACnh%203_%20C%E1%BA%A7n%20l%C6%B0u%20%C3%BD%20m%E1%BB%99t%20s%E1%BB%91%20%C4%91i%E1%BB%81u%20khi%20thi%E1%BA%BFt%20k%E1%BA%BF%20banner%20%C4%91%E1%BB%93%20ch%C6%A1i%20tr%E1%BA%BB%20em.jpg',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Slide() {
  const [imgActive, setimgActive] = useState(0);

  onchange = nativeEvent => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide != imgActive) {
      setimgActive(slide);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: WIDTH,
          height: HEIGHT * 0.25,
        }}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={{
            width: WIDTH,
            height: HEIGHT * 0.25,
          }}>
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={{width: WIDTH, height: HEIGHT * 0.25}}
              source={{uri: e}}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});
