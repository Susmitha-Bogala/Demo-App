import React from 'react';
import { Button, View } from 'react-native';
import styles from '../styles'
import colors from '../Constants/Colors'
import defaultLabels from '../Constants/DefaultLabels'


function OrderPage({ navigation }) {
  return (
    <View
      style={[
        styles.flex,
        styles.alignItemsCenter,
        styles.justifyContentCenter
      ]}>
      <Button
        title={defaultLabels.orders}
        color={colors.darkModerateCyan}
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}


export default OrderPage;