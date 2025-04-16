import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppTextInput from '../AppTextInput';

const StepOneSchema = Yup.object().shape({
  hallName: Yup.string().required('Hall Name is required'),
  location: Yup.string().required('Location is required'),
  contact: Yup.string()
    .required('Contact number is required')
    .matches(/^[0-9]{10,15}$/, 'Enter valid contact number'),
  facilities: Yup.object().shape({
    parking: Yup.boolean(),
    air_conditioning: Yup.boolean(),
    bridal_room: Yup.boolean(),
  }),
});

export default function StepOne() {
  return (
    <Formik
      initialValues={{
        hallName: '',
        location: '',
        contact: '',
        facilities: {
          parking: false,
          air_conditioning: false,
          bridal_room: false,
        },
      }}
      validationSchema={StepOneSchema}
      onSubmit={(values) => {
        console.log('Step One Values:', values);
      }}
    >
      {({ handleChange, handleBlur, values, setFieldValue, errors, touched }) => (
        <View>
          <Text style={styles.label}>Hall Name</Text>
          <AppTextInput
            style={styles.input}
            onChangeText={handleChange('hallName')}
            onBlur={handleBlur('hallName')}
            value={values.hallName}
            placeholder="Enter Hall Name"
          />
          {touched.hallName && errors.hallName && (
            <Text style={styles.error}>{errors.hallName}</Text>
          )}

          <Text style={styles.label}>Location</Text>
          <AppTextInput
            style={styles.input}
            onChangeText={handleChange('location')}
            onBlur={handleBlur('location')}
            value={values.location}
            placeholder="Enter Location"
          />
          {touched.location && errors.location && (
            <Text style={styles.error}>{errors.location}</Text>
          )}

          <Text style={styles.label}>Contact</Text>
          <AppTextInput
            style={styles.input}
            onChangeText={handleChange('contact')}
            onBlur={handleBlur('contact')}
            value={values.contact}
            placeholder="Enter Contact Number"
            keyboardType="phone-pad"
          />
          {touched.contact && errors.contact && (
            <Text style={styles.error}>{errors.contact}</Text>
          )}

          <Text style={styles.label}>Facilities</Text>
          {['parking', 'air_conditioning', 'bridal_room'].map((facilityKey) => (
            <View key={facilityKey} style={styles.facilityRow}>
              <Text style={styles.facilityLabel}>{formatFacilityLabel(facilityKey)}</Text>
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  values.facilities[facilityKey] && styles.selectedAvailable,
                ]}
                onPress={() =>
                  setFieldValue(`facilities.${facilityKey}`, true)
                }
              >
                <Text style={styles.optionText}>Available</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  values.facilities[facilityKey] === false && styles.selectedNotAvailable,
                ]}
                onPress={() =>
                  setFieldValue(`facilities.${facilityKey}`, false)
                }
              >
                <Text style={styles.optionText}>Not Available</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </Formik>
  );
}

function formatFacilityLabel(key) {
  return key
    .replace('_', ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

const styles = StyleSheet.create({
  label: {
    fontWeight: '600',
    marginBottom: 6,
  },
  error: {
    color: 'red',
    marginBottom: 12,
    fontSize: 12,
  },
  // input: {
  //   borderColor: '#ccc',
  //   borderWidth: 1,
  //   borderRadius: 6,
  //   paddingHorizontal: 10,
  //   paddingVertical: 8,
  //   marginBottom: 12,
  // },
  facilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  facilityLabel: {
    flex: 1,
    fontWeight: '500',
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#999',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 5,
  },
  selectedAvailable: {
    backgroundColor: '#c0f7d4',
    borderColor: 'green',
  },
  selectedNotAvailable: {
    backgroundColor: '#f7c0c0',
    borderColor: 'red',
  },
  optionText: {
    fontSize: 12,
  },
});
