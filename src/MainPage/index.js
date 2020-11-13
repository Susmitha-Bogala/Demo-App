import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePage from './HomePage'
import EventsPage from './EventsPage'
import OrdersPage from './OrdersPage'
import CartPage from './Cart/index'
import styles from '../styles';
import colors from '../Constants/Colors'
import defaultLabels from '../Constants/DefaultLabels'

const Tab = createMaterialBottomTabNavigator();

function MainPage({ navigation }) {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={styles.bgDarkModerateCyan}
    >
      <Tab.Screen
        name={defaultLabels.home}
        component={HomePage}
        options={{
          tabBarLabel: defaultLabels.home,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={defaultLabels.iconNames.home}
              color={colors.white}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={defaultLabels.events}
        component={EventsPage}
        options={{
          tabBarLabel: defaultLabels.events,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={defaultLabels.iconNames.events}
              color={colors.white}
              size={26} />
          ),
        }} />
      <Tab.Screen
        name={defaultLabels.orders}
        component={OrdersPage}
        options={{
          tabBarLabel: defaultLabels.orders,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={defaultLabels.iconNames.purse}
              color={colors.white}
              size={26}
            />
          ),
        }} />
      <Tab.Screen
        name={defaultLabels.cart}
        component={CartPage}
        options={{
          tabBarLabel: defaultLabels.cart,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={defaultLabels.iconNames.cart}
              color={colors.white}
              size={26}
            />
          ),
        }} />
    </Tab.Navigator>
  );
}


export default MainPage;