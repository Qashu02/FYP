// components/ResponsiveView.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const ResponsiveView = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

export default ResponsiveView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // or scale(20)
    backgroundColor: '#fff',
  },
});
