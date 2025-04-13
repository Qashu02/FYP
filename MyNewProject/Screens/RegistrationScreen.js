import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const Card = ({ hall }) => {
  return (
    <View style={styles.container}>
      {/* Full-screen Image Background */}
      <ImageBackground source={{ uri: hall.image }} style={styles.image} resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.name}>{hall.name}</Text>
          <Text style={styles.location}>{hall.location}</Text>
          <Text style={styles.price}>{hall.price}</Text>
          <Text style={styles.description}>{hall.description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fills the entire screen
  },
  image: {
    height, // Full height of the screen
    width, // Full width of the screen
    justifyContent: 'flex-end', // Align content at the bottom
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay
    padding: 20,
  },
  name: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 20,
    color: '#eee',
    marginTop: 5,
  },
  price: {
    fontSize: 20,
    color: '#00ffcc',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 10,
  },
});

export default Card;