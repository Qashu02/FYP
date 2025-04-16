import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../config/colors';

export default function ManageAvailabilityScreen() {
  const [availabilityList, setAvailabilityList] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAddDate = (event, date) => {
    setShowPicker(false);
    if (date) {
      const exists = availabilityList.find(
        (item) => item.date.toDateString() === date.toDateString()
      );
      if (!exists) {
        setAvailabilityList([
          ...availabilityList,
          { date, available: true },
        ]);
      }
    }
  };

  const toggleAvailability = (index) => {
    const updated = [...availabilityList];
    updated[index].available = !updated[index].available;
    setAvailabilityList(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Availability</Text>

      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.addBtn}>
        <Text style={styles.addText}>+ Add Available Date</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleAddDate}
        />
      )}

      <FlatList
        data={availabilityList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.dateItem}>
            <Text style={styles.dateText}>{item.date.toDateString()}</Text>
            <Switch
              value={item.available}
              onValueChange={() => toggleAvailability(index)}
              trackColor={{ false: '#ccc', true: colors.secondary }}
              thumbColor={item.available ? colors.secondary : '#999'}
            />
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No availability added yet.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  addBtn: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dateItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dateText: {
    fontSize: 16,
    color: colors.primary,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: colors.text,
    fontSize: 15,
  },
});
