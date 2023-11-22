import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Product, Setting} from '../../screens';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
