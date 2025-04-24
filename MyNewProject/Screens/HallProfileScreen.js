import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import colors from '../config/colors';

const HallProfileScreen = ({navigation}) => {
  const [hallDetails, setHallDetails] = useState({
    name: 'Grand Hall',
    location: '123 Event Street, City',
    capacity: 300,
    type: 'Wedding / Conference',
    contact: '+1234567890',
    description: 'A spacious hall perfect for all types of events.',
    images: ['https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80'],
    reviews: [
      { id: '1', user: 'Adeel Khan', rating: 4, comment: 'Great place, could improve the lighting.' },
      { id: '2', user: 'Fatima Yousaf', rating: 5, comment: 'Loved it! Perfect for weddings.' },
    ],
    services: [
      { name: 'Catering', price: '1000' },
      { name: 'Sound System', price: '500' },
      { name: 'Decoration', price: '300' },
    ],
    availability: 'Available',
  });

  const isHallManager=false

 

  const renderReview = ({ item }) => (
    <View style={styles.review}>
      <Text style={styles.reviewUser}>{item.user}</Text>
      <Text style={styles.reviewRating}>★ {item.rating}</Text>
      <Text style={styles.reviewComment}>{item.comment}</Text>
    </View>
  );

  const ListHeader = () => (
    <View>
      {/* Hall Image */}
      <View style={styles.header}>
        <Image source={{ uri: hallDetails.images[0] }} style={styles.headerImage} />
      </View>

      {/* Hall Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.hallName}>{hallDetails.name}</Text>
        <Text style={styles.location}>{hallDetails.location}</Text>
        <Text style={styles.capacity}>Capacity: {hallDetails.capacity} Guests</Text>
        <Text style={styles.type}>Type: {hallDetails.type}</Text>
        <Text style={styles.description}>{hallDetails.description}</Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity onPress={()=>navigation.navigate('Edit Profile',{editMode:true})} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Rating Header */}
      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsTitle}>Rating & Reviews</Text>
        <Text style={styles.rating}>★ 4.5 (120 Reviews)</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Reviews',{isHallManager:true})}>
          <Text style={styles.viewReviews}>View All Reviews</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

 

  return (
    <FlatList
      ListHeaderComponent={ListHeader}
      
      data={hallDetails.reviews}
      keyExtractor={(item) => item.id}
      renderItem={renderReview}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    marginBottom: 20,
  },
  headerImage: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
  infoContainer: {
    marginBottom: 20,
  },
  hallName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: '#777',
  },
  capacity: {
    fontSize: 16,
  },
  type: {
    fontSize: 16,
    color: '#777',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: '#444',
  },
  editButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  editButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  reviewsContainer: {
    marginBottom: 10,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  rating: {
    fontSize: 16,
    color: '#555',
  },
  viewReviews: {
    color: colors.secondary,
    marginTop: 10,
  },
  review: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  reviewUser: {
    fontWeight: 'bold',
  },
  reviewRating: {
    color: '#FFD700',
  },
  reviewComment: {
    marginTop: 5,
    fontSize: 14,
  },
  availabilityContainer: {
    marginTop: 20,
  },
  availabilityTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  availabilityStatus: {
    fontSize: 16,
    color: colors.secondary,
  },
  contactContainer: {
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  contactText: {
    fontSize: 16,
  },
});

export default HallProfileScreen;
