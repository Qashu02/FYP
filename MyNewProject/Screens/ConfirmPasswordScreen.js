import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import WeddingImage from '../components/Login/WeddingImage';

function ConfirmPasswordScreen({navigation}) {
  return (
    <View style={styles.container}>
    
      <View style={styles.content}>
        <Text style={styles.text}>Choose New Password</Text>
        <AppTextInput style={styles.input} placeholder='Enter Password' lock={'eye'} />
        <AppTextInput style={styles.input} placeholder='Confirm Password' lock={"eye"} />
        <AppButton title={'Submit'} onPress={()=>navigation.navigate('Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
  },
  vectorContainer: {
    width: "100%",
    height: 150, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    marginTop: 30,
    width: "90%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  wedding:{
    marginLeft:200
  }
})

export default ConfirmPasswordScreen;