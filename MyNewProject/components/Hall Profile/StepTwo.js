// StepTwo.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppTextInput from '../AppTextInput';
import ImageInput from './ImageInput';
const StepTwoSchema = Yup.object().shape({
  capacity: Yup.number().required('Capacity is required'),
  pricePerHead: Yup.number().required('Price per head is required'),
  facilities: Yup.string().required('Facilities field is required'),
});

export default function StepTwo() {
  return (
    <Formik
      initialValues={{ capacity: '', pricePerHead: '', facilities: '' }}
      validationSchema={StepTwoSchema}
      onSubmit={(values) => {
        console.log('Step Two Values:', values);
      }}
    >
      {({ handleChange, handleBlur, values, errors, touched }) => (
        <View>
        <Text style={styles.label}>Upload Hall Image</Text>
        <ImageInput/>
          <Text style={styles.label}>Capacity</Text>
          <AppTextInput
            style={styles.input}
            onChangeText={handleChange('capacity')}
            onBlur={handleBlur('capacity')}
            value={values.capacity}
            placeholder="e.g. 200"
            keyboardType="numeric"
          />
          {touched.capacity && errors.capacity && (
            <Text style={styles.error}>{errors.capacity}</Text>
          )}

          <Text style={styles.label}>Price Per Head</Text>
          <AppTextInput
            style={styles.input}
            onChangeText={handleChange('pricePerHead')}
            onBlur={handleBlur('pricePerHead')}
            value={values.pricePerHead}
            placeholder="e.g. 1500"
            keyboardType="numeric"
          />
          {touched.pricePerHead && errors.pricePerHead && (
            <Text style={styles.error}>{errors.pricePerHead}</Text>
          )}

          <Text style={styles.label}>Facilities</Text>
          <AppTextInput
            style={styles.input}
            onChangeText={handleChange('facilities')}
            onBlur={handleBlur('facilities')}
            value={values.facilities}
            placeholder="e.g. Parking, AC, Projector"
          />
          {touched.facilities && errors.facilities && (
            <Text style={styles.error}>{errors.facilities}</Text>
          )}

        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: '600',
    marginBottom: 6,
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 6,
  //   padding: 10,
  //   marginBottom: 12,
  // },
  error: {
    color: 'red',
    marginBottom: 12,
    fontSize: 12,
  },
});
