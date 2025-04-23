// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,StyleSheet, Settings } from 'react-native';



import StepTwo from './components/Hall Profile/StepTwo';

import AppNavigation from './Navigation/AppNavigation';
import HallProfileFormScreen from './Screens/HallProfileFormScreen';
import ImageInputList from './components/Hall Profile/ImageInputList';

export default function App() {

  return (


<NavigationContainer>
  <AppNavigation/>
</NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,
  width:'100%',


  }
})
