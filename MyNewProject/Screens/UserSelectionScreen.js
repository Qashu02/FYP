import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import AppButton from '../components/AppButton';
import TopVector from '../components/Login/WeddingImage';
import colors from '../config/colors';
import { useRoute, useNavigation } from '@react-navigation/native';
import authApi from "../api/auth"

function UserSelectionScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const formData = route.params?.formData;

  const handleRoleSelect = async (role) => {
    try {
      const response = await authApi.register({ ...formData, role });
  
      if (!response.ok) {
        Alert.alert("Registration Failed", response.data?.message || "Something went wrong");
        return;
      }
  
      Alert.alert("Success", "Account created successfully");
  
      // Navigate based on the role
      if (role === 'manager') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Hall Profile Form' }],
        });
      } else if (role === 'customer') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Client Tab' }],
        });
      }
  
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert("Error", "An unexpected error occurred");
    }
  };
  

  return (
    <View style={styles.container}>
      <TopVector />
      <View style={styles.content}>
        <Text style={styles.text}>Who Are You?</Text>
        <AppButton
          style={styles.button}
          title="Client"
          icon="arrow-right"
          onPress={() => handleRoleSelect('customer')}
        />
        <AppButton
          style={styles.button}
          title="Hall Manager"
          icon="arrow-right"
          onPress={() => handleRoleSelect('manager')}
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
    fontSize: 18,
    fontWeight: 'bold',
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
    marginBottom: 20
  }
});

export default UserSelectionScreen;
