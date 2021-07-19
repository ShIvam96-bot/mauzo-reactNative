import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from './Order';
import Product from './Product'
import Campaign2 from './Campaign2';
import SvgBox from '../svg/SvgBox'
import SvgOrder from '../svg/SvgOrder';
import SvgCamp1 from '../svg/SvgCamp1';

function Dashboard({navigation}) {

  const Tab = createBottomTabNavigator();

  
  return (
    
      <Tab.Navigator  >
      <Tab.Screen name="Campaigns" component={Campaign2}  options={{
          tabBarIcon: ({ color, size}) =>
            <SvgCamp1 name="home" color={color} size={size}  />
  
        }}  />
      <Tab.Screen name="Products" component={Product}  options={{
          tabBarIcon: ({ color, size}) => (
            <SvgBox name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Orders" component={Order}  options={{
          tabBarIcon: ({ color, size}) => (
            <SvgOrder name="home" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  )
}

export default Dashboard

