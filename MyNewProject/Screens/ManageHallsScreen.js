import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../config/colors';

export default function ManageHallsScreen() {
  const [halls, setHalls] = useState([
    {
      id: '1',
      name: 'Grand Palace Hall',
      description: 'A beautiful hall for weddings and parties. Spacious with modern facilities.',
      location: 'Downtown City',
      services: ['Catering', 'Decoration', 'Music', 'Lighting'],
      status: 'pending',
      images: [
        'https://images.unsplash.com/photo-1582719478250-04aa94975f8c',
        'https://images.unsplash.com/photo-1572569982261-2b62dc2a1da2',
      ],
    },
    {
      id: '2',
      name: 'Sunset Gardens',
      description: 'Outdoor garden ideal for birthday parties and special occasions.',
      location: 'City Park',
      services: ['Photography', 'Live Band'],
      status: 'pending',
      images: [
        'https://images.unsplash.com/photo-1612531384832-3c60e72d4ee3',
        'https://images.unsplash.com/photo-1600047506528-47e1c5b8de6b',
      ],
    },
  ]);

  const handleAccept = (hallId) => {
    setHalls((prevHalls) =>
      prevHalls.map((hall) =>
        hall.id === hallId ? { ...hall, status: 'approved' } : hall
      )
    );
  };

  const handleReject = (hallId) => {
    setHalls((prevHalls) =>
      prevHalls.map((hall) =>
        hall.id === hallId ? { ...hall, status: 'rejected' } : hall
      )
    );
  };

  const renderHall = ({ item }) => (
    <View style={styles.card}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
        {item.images.map((imgUrl, index) => (
          <Image key={index} source={{ uri: imgUrl }} style={styles.image} />
        ))}
      </ScrollView>

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Services:</Text>
          {item.services.map((service, index) => (
            <Text key={index} style={styles.serviceItem}>• {service}</Text>
          ))}
        </View>

        <Text style={styles.status}>Status: {item.status}</Text>

        {item.status === 'pending' && (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={() => handleAccept(item.id)}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => handleReject(item.id)}>
              <Text style={styles.buttonText}>Reject</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <FlatList
      data={halls}
      keyExtractor={(item) => item.id}
      renderItem={renderHall}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    overflow: 'hidden',
  },
  imageScroll: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 10,
  },
  info: {
    padding: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
  },
  location: {
    fontSize: 16,
    color: colors.medium,
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: colors.dark,
    marginBottom: 10,
  },
  servicesContainer: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  serviceItem: {
    fontSize: 14,
    color: colors.medium,
    marginLeft: 8,
  },
  status: {
    fontSize: 14,
    color: 'orange',
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
