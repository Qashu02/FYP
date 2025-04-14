// App.js
import React from 'react';



import { View,StyleSheet } from 'react-native';

import BookingHistory from './Screens/BookingHistoryScreen';
import BookingHistoryScreen from './Screens/BookingHistoryScreen';
import BookingTrackingScreen from './Screens/BookingTrackingScreen';

export default function App() {
  return (
    <View style={styles.container}>

<BookingTrackingScreen/>
    </View>
   
   
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,

  }
})
