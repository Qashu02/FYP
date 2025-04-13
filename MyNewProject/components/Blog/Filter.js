
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../config/colors'
export default function Filter() {
  return (
    <View style={styles.container }>
        <TouchableOpacity>
 <MaterialCommunityIcons  name='filter-variant' color={colors.light} size={30}/>

        </TouchableOpacity>
        <TouchableOpacity>

 <MaterialCommunityIcons name='bell-ring' size={30}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:700
        
        
      }
      

});

