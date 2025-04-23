import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AuthApi from '../api/auth'
import WeddingImage from '../components/Login/WeddingImage';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppErrorMessage from '../components/AppErrorMessage';
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email("Invalid email"),
  password: Yup.string().required("Password is required"),
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
  
    const { role } = response.data;
  
    if (role === 'manager') {
      navigation.navigate('Manager Tab');
    } else {
      navigation.navigate('Client Tab');
    }
  
    Toast.show({
      type: 'success',
      text1: 'Login Successful',
      text2: 'Welcome back!',
    });
  };
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <WeddingImage style={styles.wedding} source={require('../assets/Wedding.png')} />

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
    marginTop: 100,
  },
});

export default LoginScreen;