import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import AdminScreen from './AdminScreen';
import ManagerAccount from './ManagerAccount';
import Getapi_Flatlist from '../Callapi/Getapi_Flatlist';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function AdminNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouterName="AdminScreen"
        screenOptions={{headerShown: true}}>
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="ManagerProduct" component={Getapi_Flatlist} />
        <Stack.Screen name="ManagerAccount" component={ManagerAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
