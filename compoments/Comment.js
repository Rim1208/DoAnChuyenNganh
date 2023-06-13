import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {fontsize, images, colors} from '../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Comment() {
  const [id, setid] = useState(1);
  const [id_1, setid_1] = useState(1);
  const [email, setemail] = useState([
    {
      id: 0,
      name: '',
      anh: '',
    },
  ]);
  const [email1, setemail1] = useState([
    {
      id: 0,
      name: '',
      anh: '',
    },
  ]);

  useEffect(() => {}, [email]);
  useEffect(() => {}, [email1]);
  const isdisplay = async () => {
    setid(id + 1);
    email.push({id: id, name: 'tu', anh: 'anh1'});
  };
  const isdisplay_1 = async () => {
    setid_1(id_1 + 1);
    email1.push({id: id_1, name: 'tu', anh: 'anh1'});
  };

  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1}}>
        {email.map((item, key) => (
          <View>
            <Text
              key={item.id}
              style={{
                fontSize: fontsize.h5,
                color: colors.primary,
              }}>
              {item.id}
            </Text>

            {email1.map((item, key) => (
              <Text
                key={item.id}
                style={{
                  marginLeft: 100,
                  fontSize: fontsize.h5,
                  color: colors.primary,
                }}>
                {item.id}
              </Text>
            ))}
            <View style={{marginLeft: 100}}>
              <Text
                style={{
                  fontSize: fontsize.h5,
                  color: colors.primary,
                }}>
                Email1:
              </Text>
              <TextInput
                placeholder="example@gmail.com"
                placeholderTextColor={colors.placeholder}
                style={{borderWidth: 1, borderColor: colors.black}}
              />
              <TouchableOpacity
                onPress={() => {
                  isdisplay_1();
                }}>
                <Text>trả lời</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={{flex: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: fontsize.h5,
              color: colors.primary,
            }}>
            Email:
          </Text>
          <TextInput
            placeholder="example@gmail.com"
            placeholderTextColor={colors.placeholder}
            style={{borderWidth: 1, borderColor: colors.black}}
          />
        </View>
        <View style={{flex: 90}}>
          <TouchableOpacity
            onPress={() => {
              isdisplay();
            }}>
            <Text>submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
