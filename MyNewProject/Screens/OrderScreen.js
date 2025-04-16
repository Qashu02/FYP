import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import OrderCard from '../components/HallManager/OrderCard';

const sampleOrders = [
  {
    id: '1',
    customerName: 'John Doe',
    date: '2025-04-20',
    time: '7 PM - 11 PM',
    status: 'Pending',
    price: '₹20,000',
    services: ['Catering', 'Decoration'],
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    date: '2025-05-02',
    time: '5 PM - 10 PM',
    status: 'Accepted',
    price: '₹30,000',
    services: ['Music', 'Lighting'],
  },
];

export default function OrderScreen() {
  const [orders, setOrders] = useState(sampleOrders);

  const updateStatus = (id, newStatus) => {
    const updated = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <OrderCard order={item} onStatusChange={updateStatus} />
        )}
        ListEmptyComponent={<Text>No orders available.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
