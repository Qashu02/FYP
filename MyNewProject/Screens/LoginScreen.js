import React, { cloneElement } from 'react';
import { View,StyleSheet ,Text, TouchableOpacity} from 'react-native';


import TopVector from '../components/Login/TopVector';
import AppButton from '../components/AppButton';

import Sign from '../components/Login/Sign';

const LoginScreen=(props) =>{
    return (
  <View style={styles.container}>

<TopVector/>

   
  
   <Sign style={ styles.signin}/>
   <AppButton title={"Log in"} />

   <TouchableOpacity>
   <Text>Forgot Password?</Text>
</TouchableOpacity>
<AppButton style={styles.acc} color='white' title={'Create New Account'}/>


    
     </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:"90%",
alignItems:'center',

marginTop:60

    },
    signin:{
        width:'100%'
    },
 acc:{
    top:30,
    borderColor:'black',
    borderWidth:1,
    fontWeight:"100",
    fontSize:10,
    alignSelf:'center'
 },

})
export default LoginScreen;