// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,StyleSheet, Settings } from 'react-native';




import HallProfileScreen from './Screens/HallProfileScrreen';
import ReviewSection from './components/Blog/ReviewSection';

import LoginScreen from './Screens/LoginScreen'
import ReviewScreen from './Screens/ReviewScreen';
import ManagerTabNavigation from './Navigation/ManagerTabNavigation';
import HallProfileFormScreen from './Screens/HallProfileFormScreen';

export default function App() {

  return (
 <NavigationContainer>
  <ManagerTabNavigation/>
</NavigationContainer> 

  

  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,
  width:'100%',


  }
})
