// App.js
import React from 'react';

import MenuDetailsScreen from './Screens/MenuDetailsScreen';

import { View,StyleSheet } from 'react-native';
import ReviewSection from './components/Blog/ReviewSection';

export default function App() {
  return (
    <View style={styles.container}>

<ReviewSection/>
    </View>
   
   
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,

  }
})
