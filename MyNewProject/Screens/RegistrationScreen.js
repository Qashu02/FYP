import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import TopVector from '../components/Login/WeddingImage';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';

import WeddingImage from '../components/Login/WeddingImage';
function RegistrationScreen({navigation}) {
  return (

    
    <Screen style={styles.container}>
          <View style={styles.vectorContainer}>
            {/* <TopVector /> */}
          <WeddingImage style={styles.wedding} source={require('../assets/Wedding.png')}/>
          </View>
          
          <View style={styles.content}>
            <Text style={styles.head}>Registration</Text>
            <AppTextInput icon={"account"} placeholder={"Enter Name"} style={styles.input} />
            <AppTextInput icon={"email"} placeholder={"Enter Email"} style={styles.input} />
            <AppTextInput icon={"lock"} placeholder={"Create Password"} style={styles.input} secureTextEntry />
            <AppTextInput icon={"lock"} placeholder={"Confirm Password"} style={styles.input} secureTextEntry />
            
            <AppButton title={"Create Account"} style={styles.button} onPress={()=>navigation.navigate('Login')} />
            <TouchableOpacity style={styles.textContainer} onPress={()=>navigation.navigate('Login')}>
              <Text style={styles.text}>I already have an account</Text>
            </TouchableOpacity>
          </View>
        </Screen>
   
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  vectorContainer: {
    width: "100%",
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: "100%",
    alignItems: 'center',
    paddingTop: 20
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: colors.primary
  },
  input: {
    marginBottom: 15
  },
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: colors.secondary,
    borderRadius: 25,
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 30
  },
  text: {
    textAlign: 'center',
    color: '#555',
  },
  wedding:{
marginLeft:200,
  }
})

export default RegistrationScreen;