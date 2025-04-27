import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import AuthApi from '../api/auth';
import { saveData } from '../Utils/storage';
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';
import * as Yup from 'yup';

import WeddingImage from '../components/Login/WeddingImage';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppErrorMessage from '../components/AppErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string().required('Password is required'),
});

const LoginScreen = ({ navigation }) => {
  const handleLogin = async (values) => {
    const response = await AuthApi.login(values);
  
    if (!response.ok) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: response.data?.message || 'Invalid email or password',
      });
      return;
    }
  
    const { name, email, role } = response.data.user;  // Ensure response contains 'user'
  
    // Log the user data before saving to AsyncStorage
    console.log('User Data to be stored:', { name, email, role });
  
    // Save to AsyncStorage
    await saveData('user', { name, email, role });
  
    Toast.show({
      type: 'success',
      text1: 'Login Successful',
      text2: 'Welcome back!',
    });
  
    const targetScreen = role === 'manager' ? 'Manager Tab' : 'Client Tab';
  
    navigation.reset({
      index: 0,
      routes: [{ name: targetScreen }],
    });
  };
  

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <WeddingImage style={styles.wedding} source={require('../assets/Wedding.png')} width={150} />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <Text style={styles.heading}>Sign In</Text>

              <AppTextInput
                icon="email"
                placeholder="Enter your email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              <AppErrorMessage error={errors.email} visible={touched.email} />

              <AppTextInput
                icon="lock"
                placeholder="Enter your password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              <AppErrorMessage error={errors.password} visible={touched.password} />

              <AppButton title="Log in" onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <TouchableOpacity style={styles.forgotContainer} onPress={() => navigation.navigate('Forgot Password')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <AppButton
          style={styles.createBtn}
          color="white"
          title="Create New Account"
          onPress={() => navigation.navigate('Registration')}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
    marginBottom: 20,
    marginTop: 10,
    color: '#333',
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
  wedding: {
    marginLeft: 200,
    marginTop:100
  },
});

export default LoginScreen;
