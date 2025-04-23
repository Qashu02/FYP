import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';

import WeddingImage from '../components/Login/WeddingImage';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppErrorMessage from '../components/AppErrorMessage';

import { Formik } from 'formik';
import * as Yup from 'yup';

import authApi from "../api/auth/register"

function RegistrationScreen({ navigation }) {
  const [submitError, setSubmitError] = useState(null);

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleRegister = async (values, { setSubmitting }) => {
    setSubmitError(null);
    const response = await authApi.register({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    if (!response.ok) {
      setSubmitError(response.data?.error?.message || response.data?.message);
    } else {
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Login");
    }

    setSubmitting(false);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
        keyboardVerticalOffset={60}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.vectorContainer}>
            <WeddingImage style={styles.wedding} width={150} source={require('../assets/Wedding.png')} />
          </View>

          <Formik
            initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={ValidationSchema}
            onSubmit={handleRegister}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
              <View style={styles.content}>
                <Text style={styles.head}>Registration</Text>

                <AppTextInput
                  icon="account"
                  placeholder="Enter Name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  style={styles.input}
                />
                <AppErrorMessage error={errors.name} visible={touched.name} />

                <AppTextInput
                  icon="email"
                  placeholder="Enter Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  style={styles.input}
                />
                <AppErrorMessage error={errors.email} visible={touched.email} />

                <AppTextInput
                  icon="lock"
                  placeholder="Create Password"
                  secureTextEntry
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  style={styles.input}
                />
                <AppErrorMessage error={errors.password} visible={touched.password} />

                <AppTextInput
                  icon="lock"
                  placeholder="Confirm Password"
                  secureTextEntry
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  style={styles.input}
                />
                <AppErrorMessage error={errors.confirmPassword} visible={touched.confirmPassword} />

                <AppErrorMessage error={submitError} visible={!!submitError} />

                <AppButton title={isSubmitting ? "Creating..." : "Create Account"} onPress={handleSubmit} disabled={isSubmitting} style={styles.button} />

                <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.text}>I already have an account</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  vectorContainer: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  content: {
    width: "100%",
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.primary,
  },
  input: {
    marginBottom: 5,
    width: '100%',
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
  wedding: {
    marginLeft: 200,
  }
});

export default RegistrationScreen;
