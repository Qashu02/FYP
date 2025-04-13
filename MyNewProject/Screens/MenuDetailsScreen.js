import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Pressable, Text } from 'react-native';

import MenuSelector from '../components/Blog/MenuSelector';
import HallInfoSection from '../components/Blog/HallInfoSelection';
import HallAvailability from '../components/Blog/HallAvailability';
import colors from '../config/colors';
import ReviewSection from '../App';


const MenuDetailsScreen = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [guestCount, setGuestCount] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const menuPackages = [
    {
      id: '1',
      name: 'One Dish',
      description: 'Includes 1 main dish, salad & soft drink',
      pricePerHead: 500,
    },
    {
      id: '2',
      name: 'Two Dishes',
      description: 'Includes 2 mains, salad, raita & dessert',
      pricePerHead: 800,
    },
    {
      id: '3',
      name: 'Full Course',
      description: 'Starters, 2 mains, sides, desserts, drinks',
      pricePerHead: 1200,
    },
  ];

  return (
    <FlatList
      data={[]} // no actual data items
      keyExtractor={() => 'key'}
      ListHeaderComponent={() => (
        <View style={styles.content}>
          <HallInfoSection />

          <HallAvailability
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />

          <MenuSelector
            selectedPackage={selectedPackage}
            setSelectedPackage={setSelectedPackage}
            guestCount={guestCount}
            setGuestCount={setGuestCount}
            menuPackages={menuPackages}
          />
        </View>
      )}
      ListFooterComponent={() => (
        <View style={styles.footer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Confirm & Pay</Text>
          </Pressable>
     
        </View>

      )}

    />
  );
};

export default MenuDetailsScreen;

const styles = StyleSheet.create({
  content: {
    padding: 16,
    backgroundColor: '#fff',
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
