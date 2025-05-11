// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,StyleSheet, Settings } from 'react-native';

import Screen from './components/Screen'

import AdminNavigation from './Navigation/AdminNavigation';
import ChatScreen from './Screens/ChattScreen';
import PaymentScreen from './Screens/PaymentScreen';
import AppNavigation from './Navigation/AppNavigation'
import LoginScreen from './Screens/LoginScreen'
import UserSelectionScreen from './Screens/UserSelectionScreen';
import HallAvailability from './components/Blog/HallAvailability';
import HallInfoSection from './components/Blog/HallInfoSelection';
import MenuDetailsScreen from './Screens/MenuDetailsScreen';
import StepOne from './components/Hall Profile/StepOne';
import colors from './config/colors';
import MenuSelector from './components/Blog/MenuSelector';
import StepTwo from './components/Hall Profile/StepTwo';
import AdminManageHallRequest from './Screens/AdminManageHallRequest';
export default function App() {

  return (

<View style={styles.container}>
{/* <NavigationContainer>
<AdminNavigation/>
</NavigationContainer> */}
<MenuDetailsScreen/>
</View>


  );
}
const styles = StyleSheet.create({
  container:{
color:colors.background,
  flex:1,
  width:'100%',


  }
})
