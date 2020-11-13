import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import AddCartPage from './AddCart'
import defaultLabels from '../../Constants/DefaultLabels'

const Stack = createNativeStackNavigator();

function CartPage({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name={defaultLabels.cart} component={AddCartPage} />
    </Stack.Navigator>
  );
}

export default CartPage;