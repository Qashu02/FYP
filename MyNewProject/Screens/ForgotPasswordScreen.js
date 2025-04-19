import React from 'react';
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native';
import TopVector from '../components/Login/WeddingImage';
import BottomVector from '../components/Login/BottomVector';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import WeddingImage from '../components/Login/WeddingImage';
function ForgotPasswordScreen({navigation}) {
    return (
  <View style={styles.container}> 


<View style={styles.content}>

  <Text style={styles.text}>Forgot Password</Text>
<AppTextInput icon={'email'} placeholder={'Enter your Email'}/>
<AppButton title={'Submit'} onPress={()=>navigation.navigate('ConfirmPassword')}/>
<TouchableOpacity onPress={()=>navigation.navigate('Login')}>


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
alignContent:'center'

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
        color: '#555',
    
    },
    vector:{
    marginVertical:220,
    flex:1
    },
    wedding:{
    position:'relative',
    top:100

    }

    
})
export default ForgotPasswordScreen;