import React, { useState, } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function CompleteCartPage({ navigation }) {
    const [data, setData] = useState([]);
  console.log(navigation)
  
    return (
      <View style={{ flex: 1, padding: 5 }}>
       
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 20,
            backgroundColor: '#468793',
            alignItems: 'center'
          }}>
          <Text 
          style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
          Go To Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default CompleteCartPage;