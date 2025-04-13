import React from 'react';
import { View,StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../../config/colors';
import Screen from '../Screen';
 const TopVector=({style}) =>{

    return (
  <View style={ styles.container   }>
    <MaterialCommunityIcons style={styles.vectorleft} name='circle' size={500} color={'#FF6984'} />
    <MaterialCommunityIcons style={styles.vectorRight} name='circle' size={ 300} color={colors.secondary}/>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{
flexDirection:'row',
justifyContent:'flex-start',
alignItems:'flex-start',
flex:1,
marginBottom:10


    },
    vectorleft:{
      position :'absolute',
    bottom:-30,
    left:-100
    
     
    },
    vectorRight:{
        position:'absolute',
        bottom:50,
        right:-20
    }
})
export default TopVector;