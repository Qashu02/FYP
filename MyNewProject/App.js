// App.js
import React from 'react';

import HallProfileFormScreen from './Screens/HallProfileFormScreen'
import MenuDetailScreem from './Screens/MenuDetailsScreen'
import { View,StyleSheet, Settings } from 'react-native';
import OrderScreen from './Screens/OrderScreen';
import HallManagerDashboard from './Screens/HallManagerDashboard';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen'
import EditProfileScreen from './Screens/EditProfileScreen';
import ManageAvailabilityScreen from './Screens/ManageAvailabilityScreen';
import NotificationScreen from './Screens/NotificationScreen';
import SupportScreen from './Screens/SupportScreen';



export default function App() {

  return (
    <View style={styles.container}>
<SupportScreen/>
    </View>
   
   
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,

  }
})
