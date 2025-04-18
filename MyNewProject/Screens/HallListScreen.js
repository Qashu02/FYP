// HallListScreen.js
import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/Blog/Card';

const hallData = [
  {
    id: '1',
    name: 'Luxury Grand Hall',
    location: 'Karachi, Pakistan',
    price: 'PKR 80,000',
    description: 'Premium venue for weddings & events.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Elite Event Space',
    location: 'Lahore, Pakistan',
    price: 'PKR 60,000',
    description: 'Modern design with full amenities.',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80',
  },
];

const HallListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={hallData}
        renderItem={({ item }) => (
      
            <Card hall={item} onPress={()=>navigation.navigate('Menu Details')} />
        
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HallListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
