import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../src/styles'
import defaultLabels from '../src/Constants/DefaultLabels'


function Login({ navigation }) {
  const [mobileNumber, getMobileNumber] = useState();

  return (
    <View
      style={[
        styles.flex,
        styles.justifyContentCenter,
        styles.padding20,
      ]}>
      <Text
        style={[
          styles.fontSize16,
          styles.boldFont,
          styles.mb50,
          styles.textDarkModerateCyan
        ]}>{defaultLabels.login}</Text>
      <View>
        <TextInput
          onChangeText={text => getMobileNumber(text)}
          value={mobileNumber}
          keyboardType={defaultLabels.numeric}
          maxLength={10}
          placeholder={defaultLabels.placeholderForMobNo}
          underlineColorAndroid={defaultLabels.transparent}
          style={[
            styles.borderBottomColor,
            styles.borderBottomWidth1,
            styles.mb20,
          ]} />
        <TouchableOpacity
          onPress={() => navigation.navigate(defaultLabels.mainPage)}
          style={[
            styles.padding10,
            styles.alignItemsCenter,
            styles.bgDarkModerateCyan,
            styles.borderRadius20
          ]}>
          <Text
            style={[
              styles.boldFont,
              styles.fontSize16,
              styles.textWhite
            ]}>{defaultLabels.login}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default Login;