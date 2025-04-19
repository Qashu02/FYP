import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Forgot Password</Text>
        <AppTextInput icon={'email'} placeholder={'Enter your Email'} />
        <AppButton title={'Submit'} onPress={() => navigation.navigate('ConfirmPassword')} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.login}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the whole screen
    justifyContent: 'center', // Vertical center
    alignItems: 'center',     // Horizontal center
    backgroundColor: '#fff',  // Optional: set background
  },
  content: {
    width: "90%",
    alignItems: 'center',
   
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  login: {
    fontSize: 16,
    color: '#555',
    marginTop: 10
  }
});

export default ForgotPasswordScreen;
