// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,StyleSheet, Settings } from 'react-native';





import AppNavigation from './Navigation/AppNavigation';

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
