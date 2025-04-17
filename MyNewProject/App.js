// App.js
import React from 'react';

import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,StyleSheet, Settings } from 'react-native';
import OrderScreen from './Screens/OrderScreen';

import FilterScreen from './Screens/FilterScreen';

const stack=createNativeStackNavigator()

export default function App() {

  return (
    <View style={styles.container}>
<FilterScreen/>
    </View>
   
   
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,

  }
})
