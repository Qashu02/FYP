// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,StyleSheet, Settings } from 'react-native';

import Screen from './components/Screen'

import AdminNavigation from './Navigation/AdminNavigation';
import ChatScreen from './Screens/ChattScreen';


export default function App() {

  return (
<NavigationContainer>

<Screen style={styles.container}>
<ChatScreen/>
</Screen>
</NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container:{
 backgroundColor:'white',
  flex:1,
  width:'100%',


  }
})
