import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import WeddingImage from '../components/Login/WeddingImage';
import AppButton from '../components/AppButton';
import Sign from '../components/Login/Sign';

const { height } = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  return (
   

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
     <WeddingImage style={styles.wedding} source={require('../assets/Wedding.png')}/>
        <Sign style={styles.signin} />
        <AppButton title="Log in"  onPress={()=>navigation.navigate('User Selection')}/>

        <TouchableOpacity style={styles.forgotContainer} onPress={()=>navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <AppButton style={styles.createBtn} color="white" title="Create New Account"  onPress={()=>navigation.navigate('Registration')}/>
      </ScrollView>
  
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    paddingHorizontal: 20,

  },
  signin: {
    width: '100%',
    marginBottom: 20,
  },
  forgotContainer: {
    marginVertical: 10,
  },
  forgotText: {
    color: '#555',
    textAlign: 'center',
  },
  createBtn: {
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
wedding:{
  marginLeft:200,
  marginTop:100
}
});

export default LoginScreen;
