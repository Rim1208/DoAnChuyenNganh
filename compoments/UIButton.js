import {React, Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../constant';
import Icons from 'react-native-vector-icons/FontAwesome5';

function UIButton(props) {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: isSelected == true ? '#DDDDDD' : null,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: 'white',
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        padding: 10,
      }}>
      {isSelected == true && (
        <Icons
          name="check-circle"
          size={20}
          style={{
            color: 'green',
            position: 'absolute',
            left: 10,
            top: 10,
          }}
        />
      )}
      <Text
        style={{
          color: isSelected == true ? colors.primary : 'white',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default UIButton;
