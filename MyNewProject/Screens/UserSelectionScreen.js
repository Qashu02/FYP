import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import AppButton from '../components/AppButton';
import TopVector from '../components/Login/TopVector';
import colors from '../config/colors';
function UserSelectionScreen(props) {
    return (

  <View style={styles.container}>
    <TopVector/> 
  <View style={styles.content}>

  <Text style={styles.text}> Who Are You?</Text>
  <AppButton style={styles.button} title={"Client"} icon="arrow-right"   />
  <AppButton style={styles.button} title={"Hall Manager"} icon={'arrow-right'}/>
  </View>
  </View>
    );
}
const styles = StyleSheet.create({
    container:{
width:'100%',
alignItems:'center',
    },

    text:{
        fontSize:18,
        fontWeight:'bold'
    },
    content:{
        width:'90%',
        marginTop:100
    },
button:{
   backgroundColor:colors.background,
   flexDirection:'row',
    justifyContent:"space-between",
    borderWidth:1,
    

    
}

})
export default UserSelectionScreen;