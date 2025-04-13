// App.js
import React from 'react';



import { View,StyleSheet } from 'react-native';

import BookingHistory from './Screens/BookingHistoryScreen';
import BookingHistoryScreen from './Screens/BookingHistoryScreen';

export default function App() {
  return (
    <View style={styles.container}>

<BookingHistoryScreen/>
    </View>
   
   
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,

  }
})
