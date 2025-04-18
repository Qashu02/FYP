// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,StyleSheet, Settings } from 'react-native';
import OrderScreen from './Screens/OrderScreen';

import FilterScreen from './Screens/FilterScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import AuthNavigation from './Navigation/AuthNavigation';
import LoginScreen from './Screens/LoginScreen';
import ManagerNavigation from './Navigation/ManagerNavigation';
import HallManagerDashboard from './Screens/HallManagerDashboard';
import TabNavigator from './Navigation/TabNavigation';
import FeedNavigation from './Navigation/FeedNavigation';
import MenuDetailsScreen from './Screens/MenuDetailsScreen';
import HallListScreen from './Screens/HallListScreen';



export default function App() {

  return (
    <View style={styles.container}>
   <NavigationContainer>
 <FeedNavigation/>
      </NavigationContainer>
   

    </View>
   
   
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,
  width:'100%',


  }
})
