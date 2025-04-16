import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../../config/colors'

export default function ImageInput({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>

   <MaterialCommunityIcons style={styles.icon} name='camera'  size ={50} color={colors.light} />

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
container:{
    width:100,
    height:100,
    borderRadius:15,
    backgroundColor:colors.background,
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    flexDirection:'row'
    
},    icon:{
    width:50,
    height:50,
    
  },

})