import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import {MaterialCommunityIcons } from "@expo/vector-icons"

import AppTextInput from '../AppTextInput';
const Sign=()  =>{
    return (
  <View style={styles.container}>
    <Text style={styles.heading}>Sign In</Text>
        <AppTextInput icon={'email'}
        placeholder={'Enter your email'}/>

        <AppTextInput icon={'lock'}
        placeholder={'Enter password'}/>
        
   

    
     </View>
    );
}
const styles = StyleSheet.create({
    container:{
       width:"100%"
        
    },
    heading:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'left',
        textTransform:'uppercase'
    },

})
export default Sign;