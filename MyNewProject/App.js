// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,StyleSheet, Settings } from 'react-native';



import Screen from '../MyNewProject/components/Screen'
import AppNavigation from './Navigation/AppNavigation';
import Toast from 'react-native-toast-message';
import ChattScreen from './Screens/ChattScreen';
import NotificationScreen from './Screens/NotificationScreen';
import SettingsScreen from './Screens/SettingsScreen';
import FilterScreen from './Screens/FilterScreen';
import SupportScreen from './Screens/SupportScreen';
import ManageHallsScreen from './Screens/ManageHallsScreen';
import StepTwo from './components/Hall Profile/StepTwo';
import colors from './config/colors';
import HallListScreen from './Screens/HallListScreen';
import ReviewScreen from './Screens/ReviewScreen';
import FeedStack from './Navigation/FeedStack';
import MenuDetailsScreen from './Screens/MenuDetailsScreen';
import HallProfileFormScreen from './Screens/HallProfileFormScreen';
import HallProfileScreen from './Screens/HallProfileScreen';


export default function App() {

  return (


<Screen style={styles.container}>
<ManageHallsScreen/>
</Screen>
  );
}
const styles = StyleSheet.create({
  container:{
 backgroundColor:'white',
  flex:1,
  width:'100%',


  }
})
