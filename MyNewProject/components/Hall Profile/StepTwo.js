import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppTextInput from '../AppTextInput';
import ImageInput from './ImageInput';

const StepTwoSchema = Yup.object().shape({
  capacity: Yup.number().required('Capacity is required'),
  pricePerHead: Yup.number().required('Price per head is required'),
  menuPackages: Yup.array().min(1, 'At least one menu package is required'),
});

export default function StepTwo() {
  const [menuPackages, setMenuPackages] = useState([]);
  const [newPackage, setNewPackage] = useState('');

  const addMenuPackage = () => {
    if (newPackage.trim()) {
      setMenuPackages([...menuPackages, newPackage.trim()]);
      setNewPackage('');
      Keyboard.dismiss(); // Dismiss the keyboard after adding the package
    }
  };

  const removeMenuPackage = (index) => {
    const updatedPackages = menuPackages.filter((_, i) => i !== index);
    setMenuPackages(updatedPackages);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <FlatList
        data={[{ key: 'form' }]} // Fake data to trigger the FlatList rendering
        renderItem={() => (
          <View style={styles.formContainer}>
            {/* Hall Image */}
            <Text style={styles.label}>Upload Hall Image</Text>
            <ImageInput />

            {/* Capacity */}
            <Text style={styles.label}>Capacity</Text>
            <AppTextInput
              style={styles.input}
              placeholder="e.g. 200"
              keyboardType="numeric"
            />

            {/* Price Per Head */}
            <Text style={styles.label}>Price Per Head</Text>
            <AppTextInput
              style={styles.input}
              placeholder="e.g. 1500"
              keyboardType="numeric"
            />

            {/* Menu Packages */}
            <Text style={styles.label}>Menu Packages</Text>
            <TextInput
              style={styles.input}
              value={newPackage}
              onChangeText={setNewPackage}
              placeholder="Add Menu Package (e.g., Veg, Non-Veg)"
            />
            <TouchableOpacity onPress={addMenuPackage} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add Package</Text>
            </TouchableOpacity>

            {/* List of Menu Packages */}
            <FlatList
              data={menuPackages}
              renderItem={({ item, index }) => (
                <View style={styles.packageItem}>
                  <Text style={styles.packageText}>{item}</Text>
                  <TouchableOpacity onPress={() => removeMenuPackage(index)} style={styles.removeButton}>
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={<Text>No packages added yet</Text>}
            />
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: '#132743',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  packageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 8,
    borderRadius: 6,
  },
  packageText: {
    color: '#132743',
  },
  removeButton: {
    backgroundColor: '#D7385E',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
