// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,StyleSheet, Settings } from 'react-native';




import AppNavigation from './Navigation/AppNavigation';
import Toast from 'react-native-toast-message';
import ChattScreen from './Screens/ChattScreen';
import NotificationScreen from './Screens/NotificationScreen';
import SettingsScreen from './Screens/SettingsScreen';
import FilterScreen from './Screens/FilterScreen';
import SupportScreen from './Screens/SupportScreen';


export default function App() {

  return (

// <NavigationContainer>
//   <AppNavigation/>
// </NavigationContainer>
<FilterScreen/>
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,
  width:'100%',


  }
})
