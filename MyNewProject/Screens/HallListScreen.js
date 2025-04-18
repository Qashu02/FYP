import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Blog/Card';

const HallListScreen = ({ navigation }) => {
  const hallData = [
    {
      id: '1',
      name: 'Royal Grand Hall',
      location: 'Downtown City Center',
      price: '$1500/day',
      rating: 4.7,
      description: 'Spacious venue perfect for weddings and corporate events.',
      images: [
        'https://images.unsplash.com/photo-1549921296-3a412c3f342b',
        'https://images.unsplash.com/photo-1573164574472-cb89e39749b4',
        'https://images.unsplash.com/photo-1610129426411-b50b8b5e95e1',
      ],
    },
    {
      id: '2',
      name: 'Elegant Banquet',
      location: 'Uptown Avenue',
      price: '$1200/day',
      rating: 4.5,
      description: 'Modern décor with customizable seating for all occasions.',
      images: [
        'https://images.unsplash.com/photo-1600132801085-5e89f1c32c4f',
        'https://images.unsplash.com/photo-1611930021621-5c9b5d1e7890',
        'https://images.unsplash.com/photo-1558211583-d26f9101e07b',
      ],
    },
    {
      id: '3',
      name: 'Sunset View Hall',
      location: 'Seaside Boulevard',
      price: '$1800/day',
      rating: 4.9,
      description: 'Beautiful sea view perfect for memorable moments.',
      images: [
        'https://images.unsplash.com/photo-1606788075766-3a4b8a60103d',
        'https://images.unsplash.com/photo-1563720229385-5dc8ab07b2f1',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      ],
    },
  ];

  const handleCardPress = (hall) => {
    navigation.navigate('HallDetails', { hall });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header with Filter and Notification Icons */}
      <View style={styles.header}>
        <Text style={styles.title}>Available Halls</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <Ionicons name="filter" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Notifications tapped')}>
            <Ionicons name="notifications-outline" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Hall List */}
      <FlatList
        data={hallData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card hall={item} onPress={() => handleCardPress(item)} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HallListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
});
