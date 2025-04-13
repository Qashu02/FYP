import React from 'react';
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native';
import TopVector from '../components/Login/TopVector';
import BottomVector from '../components/Login/BottomVector';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
function ForgotPasswordScreen(props) {
    return (
  <View style={styles.container}> 

  <TopVector/>

<View style={styles.content}>

  <Text style={styles.text}>Forgot Password</Text>
<AppTextInput icon={'email'} placeholder={'Enter your Email'}/>
<AppButton title={'Submit'}/>
<TouchableOpacity>


<Text style={styles.login}> Log in</Text>
</TouchableOpacity>
</View>


  </View>
    );
}
const styles = StyleSheet.create({
    container:{
width:"100%",
alignItems:'center',

    },
    content:{
        width:"90%",
marginTop:80,
alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        
    },
    login:{
        fontSize:18,
    
    }

    
})
export default ForgotPasswordScreen;