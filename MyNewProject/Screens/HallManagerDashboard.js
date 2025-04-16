import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import colors from '../config/colors';

export default function HallManagerDashboard() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Welcome, Manager!</Text>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.card}>
          <Ionicons name="calendar" size={24} color="white" />
          <Text style={styles.cardValue}>32</Text>
          <Text style={styles.cardLabel}>Total Bookings</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="cash" size={24} color="white" />
          <Text style={styles.cardValue}>Rs. 45,000</Text>
          <Text style={styles.cardLabel}>Revenue</Text>
        </View>

      </View>

      {/* Action Buttons */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actions}>
        <ActionButton icon={<Feather name="clipboard" size={28} color={colors.secondary} />} label="View Orders" />
        <ActionButton icon={<Feather name="calendar" size={28} color={colors.secondary} />} label="Manage Availability" />
        <ActionButton icon={<Feather name="book-open" size={28} color={colors.secondary} />} label="Update Menu" />
        <ActionButton icon={<Feather name="settings" size={28} color={colors.secondary} />} label="Settings" />
      </View>
    </ScrollView>
  );
}

const ActionButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.actionCard} onPress={() => alert(label)}>
    <View style={styles.iconWrapper}>{icon}</View>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
    marginTop:30
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: colors.secondary,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  cardValue: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardLabel: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginVertical: 16,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 14,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 10,
    marginBottom: 16,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  iconWrapper: {
    marginBottom: 10,
  },
  actionLabel: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
});
