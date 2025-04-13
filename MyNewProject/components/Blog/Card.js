// components/Card.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Platform, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors';

const { width, height } = Dimensions.get('window');

const Card = ({ hall }) => {
  return (
    <TouchableWithoutFeedback >
    <View
    style={styles.card}>


      
      {/* Full Screen Background Image */}
      <ImageBackground
        source={{ uri: hall.image }}
        style={styles.background}
        resizeMode="cover"
        >
        {/* Bottom Overlay with Text */}
        <View style={styles.overlay}>
          <Text style={styles.name}>{hall.name}</Text>
          <Text style={styles.location}>{hall.location}</Text>
          <Text style={styles.price}>{hall.price}</Text>
          <Text style={styles.description}>{hall.description}</Text>
        </View>
      </ImageBackground>

      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.title}>Available Halls</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => console.log('Filter tapped')}>
            <Ionicons name="filter" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Notifications tapped')}>
            <Ionicons name="notifications-outline" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
        </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width,
    height,  // Ensure full screen
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',  // Keep overlay at the bottom of the screen
  },
  topBar: {
    position: 'absolute',  // Fix the top bar at the top
    top: 0,  // Start from the top
    left: 0,
    right: 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50, // Ensure space for status bar on Android
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,  // Ensure the top bar stays above the image
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  overlay: {
    backgroundColor: colors.secondary,  // Semi-transparent background
    padding: 20,
    paddingBottom: 30, // Ensure space at the bottom
    width: '100%',
  },
  name: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 18,
    color: '#eee',
    marginTop: 4,
  },
  price: {
    fontSize: 18,
    color: '#00ffcc',
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 8,
  },
});
