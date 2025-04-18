import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from 'react-native'
import React from 'react'
import { StackRouter } from "@react-navigation/native";
import HallManagerDashboard from '../Screens/HallManagerDashboard'
import OrderScreen from "../Screens/OrderScreen";
import ManageAvailabilityScreen from "../Screens/ManageAvailabilityScreen";

export default function ManagerNavigation() {
    const Stack=createNativeStackNavigator()
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Hall Manager Dashboard" component={HallManagerDashboard}/>
    <Stack.Screen name="Order" component={OrderScreen}/>
    <Stack.Screen name="Manage Availability" component={ManageAvailabilityScreen}/>

   </Stack.Navigator>
  )
}