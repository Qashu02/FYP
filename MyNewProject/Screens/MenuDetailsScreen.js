import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Pressable, Text, TouchableOpacity } from 'react-native';

import MenuSelector from '../components/Blog/MenuSelector';
import HallInfoSection from '../components/Blog/HallInfoSelection';
import HallAvailability from '../components/Blog/HallAvailability';
import colors from '../config/colors';
import ReviewSection from '../components/Blog/ReviewSection'; // Adjust path as needed

const MenuDetailsScreen = () => {
  const [activeTab, setActiveTab] = useState('info'); // 'info' or 'reviews'
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
    <View style={{ flex: 1 }}>
      {/* Tab Navigation Row */}
      <View style={styles.tabRow}>
        <TouchableOpacity onPress={() => setActiveTab('info')}>
          <Text style={[styles.tabText, activeTab === 'info' && styles.activeTab]}>
            Hall Info
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('reviews')}>
          <Text style={[styles.tabText, activeTab === 'reviews' && styles.activeTab]}>
            Reviews
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <FlatList
        data={[]} // No list items, just using header/footer
        keyExtractor={() => 'key'}
        ListHeaderComponent={() => (
          <View style={styles.content}>
            {activeTab === 'info' ? (
              <>
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
              </>
            ) : (
              <ReviewSection />
            )}
          </View>
        )}
        ListFooterComponent={() =>
          activeTab === 'info' ? (
            <View style={styles.footer}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Confirm & Pay</Text>
              </Pressable>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default MenuDetailsScreen;

const styles = StyleSheet.create({
  tabRow: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 20,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeTab: {
    color: colors.secondary,
    fontWeight: 'bold',
    borderColor: colors.secondary,
  },
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
