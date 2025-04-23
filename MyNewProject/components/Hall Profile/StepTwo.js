import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppTextInput from '../AppTextInput';
import AppErrorMessage from '../AppErrorMessage';
import ImageInputList from './ImageInputList';

const StepTwoSchema = Yup.object().shape({
  capacity: Yup.number()
    .required('Capacity is required')
    .min(1, 'Capacity must be greater than 0'),
  menuPackages: Yup.array().min(1, 'At least one menu package is required'),
  images: Yup.array().min(1, 'At least one image is required'),
});

const StepTwo = React.forwardRef((_, ref) => {
  const formikRef = useRef();

  React.useImperativeHandle(ref, () => ({
    validateAndSubmit: async () => {
      const isValid = await formikRef.current?.validateForm();
      formikRef.current?.setTouched({
        capacity: true,
        menuPackages: true,
        images: true,
      });
      return Object.keys(isValid).length === 0;
    },
  }));

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Formik
            innerRef={formikRef}
            initialValues={{
              capacity: '',
              menuPackages: [],
              images: [],
              newPackage: '',
              newPrice: '',
            }}
            validationSchema={StepTwoSchema}
            onSubmit={(values) => {
              console.log('StepTwo submitted:', values);
            }}
          >
            {({
              handleChange,
              handleBlur,
              values,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
              validateField,
              validateForm,
            }) => {
              // Define the validation function outside handlers
              const validateImageField = () => {
                if (values.images.length > 0) {
                  validateField('images');
                }
              };

              // Use effect hook consistently - it will always be rendered
              useEffect(() => {
                if (touched.images) {
                  validateImageField();
                }
              }, [values.images.length, touched.images]);

              const handleAddImage = async (uri) => {
                const updatedImages = [...values.images, uri];
                await setFieldValue('images', updatedImages);
                await setFieldTouched('images', true);
                // Validation will be triggered by the useEffect
              };

              const handleRemoveImage = async (uri) => {
                const updatedImages = values.images.filter((imageUri) => imageUri !== uri);
                await setFieldValue('images', updatedImages);
                await setFieldTouched('images', true);
                // Validation will be triggered by the useEffect
              };

              const addMenuPackage = async () => {
                if (values.newPackage.trim()) {
                  const packageObject = {
                    name: values.newPackage.trim(),
                    pricePerHead: parseFloat(values.newPrice) || 0,
                  };

                  const updated = [...values.menuPackages, packageObject];
                  await setFieldValue('menuPackages', updated);
                  await setFieldTouched('menuPackages', true);
                  validateField('menuPackages');

                  setFieldValue('newPackage', '');
                  setFieldValue('newPrice', '');
                  Keyboard.dismiss();
                }
              };

              const removeMenuPackage = async (index) => {
                const updated = values.menuPackages.filter((_, i) => i !== index);
                await setFieldValue('menuPackages', updated);
                await setFieldTouched('menuPackages', true);
                validateField('menuPackages');
              };

              return (
                <ScrollView
                  contentContainerStyle={styles.formContainer}
                  keyboardShouldPersistTaps="handled"
                >
                  <Text style={styles.label}>Upload Hall Images</Text>
                  <ImageInputList
                    imageUris={values.images}
                    onAddImage={handleAddImage}
                    onRemoveImage={handleRemoveImage}
                  />
                  <AppErrorMessage visible={touched.images && errors.images} error={errors.images} />

                  <Text style={styles.label}>Capacity</Text>
                  <AppTextInput
                    placeholder="e.g. 200"
                    keyboardType="numeric"
                    value={values.capacity}
                    onChangeText={handleChange('capacity')}
                    onBlur={() => {
                      setFieldTouched('capacity');
                      validateField('capacity');
                    }}
                  />
                  <AppErrorMessage visible={touched.capacity && errors.capacity} error={errors.capacity} />

                  <Text style={styles.label}>Menu Package Name</Text>
                  <TextInput
                    style={styles.input}
                    value={values.newPackage}
                    onChangeText={(text) => setFieldValue('newPackage', text)}
                    placeholder="e.g., Veg, Non-Veg"
                  />

                  <Text style={styles.label}>Price Per Head</Text>
                  <TextInput
                    style={styles.input}
                    value={values.newPrice}
                    onChangeText={(text) => setFieldValue('newPrice', text)}
                    keyboardType="numeric"
                    placeholder="e.g., 1500"
                  />

                  <TouchableOpacity onPress={addMenuPackage} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Package</Text>
                  </TouchableOpacity>

                  <AppErrorMessage visible={touched.menuPackages && errors.menuPackages} error={errors.menuPackages} />

                  <FlatList
                    data={values.menuPackages}
                    renderItem={({ item, index }) => (
                      <View key={index} style={styles.packageItem}>
                        <View>
                          <Text style={styles.packageText}>{item.name}</Text>
                          <Text style={styles.priceText}>PKR {item.pricePerHead.toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => removeMenuPackage(index)}
                          style={styles.removeButton}
                        >
                          <Text style={styles.removeButtonText}>Remove</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </ScrollView>
              );
            }}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  label: {
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 10,
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
    fontWeight: '600',
  },
  priceText: {
    color: '#555',
    fontSize: 13,
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

export default StepTwo;