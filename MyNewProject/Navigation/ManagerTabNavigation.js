import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HallManagerDashboard from '../Screens/HallManagerDashboard'
import React from 'react';
import MessageScreen from '../Screens/MessageScreen';
import OrderScreen from '../Screens/OrderScreen'
function ManagerTabNavigation(props) {
    const Tab=createBottomTabNavigator();

    return (
  <Tab.Navigator screenOptions={{headerShown:false}}>
<Tab.Screen name=' Hall Manager Dashboard' component={HallManagerDashboard}/>
<Tab.Screen name='Order' component={OrderScreen}/>
<Tab.Screen name=' Message' component={MessageScreen}/>

  </Tab.Navigator>
    );
}


export default ManagerTabNavigation;