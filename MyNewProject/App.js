// App.js
import React from 'react';

import HallProfileFormScreen from './Screens/HallProfileFormScreen'
import MenuDetailScreem from './Screens/MenuDetailsScreen'
import { View,StyleSheet } from 'react-native';



export default function App() {

  return (
    <View style={styles.container}>
<HallProfileFormScreen/>
    </View>
   
   
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,

  }
})
