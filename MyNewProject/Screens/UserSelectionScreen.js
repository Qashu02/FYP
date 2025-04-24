import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppButton from '../components/AppButton';
import TopVector from '../components/Login/WeddingImage';
import colors from '../config/colors';
import { useRoute, useNavigation } from '@react-navigation/native';
import authApi from "../api/auth";
import Toast from 'react-native-toast-message';
import { getData, saveData, removeData } from "../Utils/storage";

function UserSelectionScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const formData = route.params?.formData;
  const [loading, setLoading] = useState(false);

  // Function to handle the user role selection
  const handleRoleSelect = async (role) => {
    setLoading(true);  // Set loading to true to disable buttons
    
    try {
      // Check if user is already stored in AsyncStorage
      const existingUser = await getData('user');
      
      // If user exists in storage but with a different email, clear it (logout previous user)
      if (existingUser && existingUser.email !== formData.email) {
        await removeData('user');
        console.log("Cleared existing user to register new one");
      }
      
      // Proceed with registration for the new user
      const response = await authApi.register({ ...formData, role });
      
      if (!response.ok) {
        // Check if the error is because the email already exists
        if (response.data?.message?.toLowerCase().includes('email already exist') || 
            response.data?.error?.toLowerCase().includes('email already exist') ||
            existingUser?.email === formData.email) { // Also check local storage
          
          Toast.show({
            type: 'error',
            text1: 'Email Already Registered',
            text2: 'Please try logging in instead'
          });
          navigation.navigate('Login');
          setLoading(false);
          return;
        }
        
        // Show general error message for other errors
        Toast.show({
          type: 'error',
          text1: 'Registration Failed',
          text2: response.data?.message || 'Something went wrong'
        });
        setLoading(false);
        return;
      }
      
      // Successful registration
      const user = response.data.user;
      
      // Store user data in AsyncStorage
      await saveData('user', user);
      
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Account created successfully!'
      });
      
      // Redirect based on role
      navigation.reset({
        index: 0,
        routes: [{ name: role === 'manager' ? 'Hall Profile Form' : 'Client Tab' }],
      });
    } catch (error) {
      console.error('Registration error:', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message || 'An unexpected error occurred'
      });
    } finally {
      setLoading(false);  // Reset loading state after the process is complete
    }
  };

  return (
    <View style={styles.container}>
      <TopVector />
      <View style={styles.content}>
        <Text style={styles.text}>Who Are You?</Text>
        <AppButton
          title="Client"
          icon="arrow-right"
          onPress={() => handleRoleSelect('customer')}
          style={styles.button}
          disabled={loading}  // Disable button when loading
        />
        <AppButton
          title="Hall Manager"
          icon="arrow-right"
          onPress={() => handleRoleSelect('manager')}
          style={styles.button}
          disabled={loading}  // Disable button when loading
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 30,
    textAlign: 'center',
  },
  content: {
    width: '90%',
    marginTop: 100,
  },
  button: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default UserSelectionScreen;