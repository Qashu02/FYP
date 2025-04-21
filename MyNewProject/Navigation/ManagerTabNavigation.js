import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HallManagerDashboard from '../Screens/HallManagerDashboard'
import React from 'react';
import MessageScreen from '../Screens/MessageScreen';
import EventScreen from '../Screens/EventScreen';
import HallProfileScreen from '../Screens/HallProfileScrreen';
function ManagerTabNavigation(props) {
    const Tab=createBottomTabNavigator();

    return (
  <Tab.Navigator screenOptions={{headerShown:false}}>
<Tab.Screen name=' Hall Manager Dashboard' component={HallManagerDashboard}/>
<Tab.Screen name='Event' component={EventScreen}/>
<Tab.Screen name=' Message' component={MessageScreen}/>
<Tab.Screen name= "Hall Profile" component={HallProfileScreen}/>

  </Tab.Navigator>
    );
}


export default ManagerTabNavigation;