// components/FullscreenWrapper.js
import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';

const FullscreenWrapper = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {children}
    </View>
  );
};

export default FullscreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
      ios: {
        paddingTop: 0,
      },
    }),
  },
});
