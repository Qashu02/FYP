import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StepOne from '../components/Hall Profile/StepOne';
import StepTwo from '../components/Hall Profile/StepTwo';
import StepThree from '../components/Hall Profile/StepThree';
import { AntDesign } from '@expo/vector-icons';
import colors from '../config/colors';

export default function HallProfileFormScreen() {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1: return <StepOne />;
      case 2: return <StepTwo />;
      case 3: return <StepThree />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        {[1, 2, 3].map((s) => (
          <TouchableOpacity key={s} onPress={() => setStep(s)}>
            <View style={[styles.stepDot, step >= s && styles.activeStep]} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Step Form Component */}
      {renderStep()}

      {/* Icon Navigation */}
      <View style={styles.navButtons}>
        {step > 1 &&  step <3 &&(
          <TouchableOpacity onPress={() => setStep(step - 1)} style={styles.iconBtn}>
            <AntDesign name="arrowleft" size={28} color="#fff" />
          </TouchableOpacity>
        )}
        {step < 3 ? (
          <TouchableOpacity onPress={() => setStep(step + 1)} style={styles.iconBtn}>
            <AntDesign name="arrowright" size={28} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => alert('Submitted')} style={styles.submitBtn}>
            <Text style={styles.btnText}>Pay Now</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 60,
  },
  progressContainer: {
    paddingBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  stepDot: {
    width: 60,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
  },
  activeStep: {
    backgroundColor: 'red',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    alignItems: 'center',
  },
  iconBtn: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
