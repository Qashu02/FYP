// App.js
import React from 'react';

import MenuDetailsScreen from './Screens/MenuDetailsScreen';

import { View,StyleSheet } from 'react-native';
import ReviewSection from './components/Blog/ReviewSection';
import MessageScreen from './Screens/MessageScreen';


export default function App() {
  return (
    <View style={styles.container}>

<MessageScreen/>
    </View>
   
   
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,

  }
})
