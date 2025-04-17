import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../config/colors';

export default function FilterScreen({ navigation }) {
  const [hasParking, setHasParking] = useState(false);
  const [hasBridalRoom, setHasBridalRoom] = useState(false);
  const [hasAC, setHasAC] = useState(false);
  const [location, setLocation] = useState('');
  const [menuKeyword, setMenuKeyword] = useState('');
  const [pricePerHead, setPricePerHead] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleApplyFilters = () => {
    const filters = {
      parking: hasParking,
      bridalRoom: hasBridalRoom,
      ac: hasAC,
      location,
      menuKeyword,
      pricePerHead,
      capacity,
    };

    console.log('Applied Filters:', filters);
    // navigation.navigate('SearchResults', { filters });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Filter Halls</Text>

      {/* Location */}
      <View style={styles.filterGroup}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter city or area"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      {/* Parking & Bridal Room */}
      <View style={styles.filterGroupRow}>
        <Text style={styles.label}>Parking Available</Text>
        <Switch
          value={hasParking}
          onValueChange={setHasParking}
          trackColor={{ true: colors.secondary }}
        />
      </View>

      <View style={styles.filterGroupRow}>
        <Text style={styles.label}>Bridal Room</Text>
        <Switch
          value={hasBridalRoom}
          onValueChange={setHasBridalRoom}
          trackColor={{ true: colors.secondary }}
        />
      </View>

      {/* AC */}
      <View style={styles.filterGroupRow}>
        <Text style={styles.label}>AC Available</Text>
        <Switch
          value={hasAC}
          onValueChange={setHasAC}
          trackColor={{ true: colors.secondary }}
        />
      </View>

      {/* Menu Filter */}
      <View style={styles.filterGroup}>
        <Text style={styles.label}>Menu Keyword</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. BBQ, Buffet, Desserts"
          value={menuKeyword}
          onChangeText={setMenuKeyword}
        />
      </View>

      {/* Price Per Head */}
      <View style={styles.filterGroup}>
        <Text style={styles.label}>Price Per Head (Rs)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 1200"
          value={pricePerHead}
          onChangeText={setPricePerHead}
          keyboardType="numeric"
        />
      </View>

      {/* Capacity */}
      <View style={styles.filterGroup}>
        <Text style={styles.label}>Minimum Capacity</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 200"
          value={capacity}
          onChangeText={setCapacity}
          keyboardType="numeric"
        />
      </View>

      {/* Apply Button */}
      <TouchableOpacity style={styles.applyBtn} onPress={handleApplyFilters}>
        <Text style={styles.applyBtnText}>Apply Filters</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.primary,
  },
  filterGroup: {
    marginBottom: 20,
  },
  filterGroupRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  applyBtn: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  applyBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
