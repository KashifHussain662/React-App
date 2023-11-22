import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Product, Setting} from '../../screens';
import {screenOptions} from './screenOption';
import {Images} from '../../theme';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={Images.icHome1} style={{width: 35, height: 35}} />
          ),
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '900',
            margin: 10,
          },
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={Images.IcProduct} style={{width: 35, height: 35}} />
          ),
          tabBarLabel: 'Product',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '900',
            margin: 10,
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={Images.icSetting} style={{width: 35, height: 35}} />
          ),
          tabBarLabel: 'Setting',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '900',
            margin: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
}
