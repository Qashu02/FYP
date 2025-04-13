// StripeScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, Image, ScrollView } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

export default function StripeScreen() {
  const { confirmPayment } = useStripe();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Replace this with your actual backend endpoint
      const response = await fetch('https://your-backend.com/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 15000 }), // Amount in paise (₹150.00)
      });

      const { clientSecret } = await response.json();

      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
      });

      if (error) {
        Alert.alert('Payment failed', error.message);
      } else if (paymentIntent) {
        Alert.alert('Payment successful', `PaymentIntent ID: ${paymentIntent.id}`);
      }
    } catch (err) {
      Alert.alert('Error', 'Unable to initiate payment.');
    }

    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://placekitten.com/400/200' }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Grand Palace Hall</Text>
      <Text style={styles.info}>Date: May 20, 2025</Text>
      <Text style={styles.info}>Time: 6:00 PM - 10:00 PM</Text>
      <Text style={styles.info}>Services: Decoration, Catering</Text>
      <Text style={styles.total}>Total: ₹15,000</Text>

      <Text style={styles.payTitle}>Enter Card Details:</Text>
      <CardField
        postalCodeEnabled={false}
        style={styles.cardField}
        cardStyle={{
          backgroundColor: '#f1f1f1',
          textColor: '#000',
        }}
      />

      <View style={styles.buttonWrapper}>
        <Button
          title={loading ? 'Processing...' : 'Pay ₹150'}
          onPress={handlePayment}
          disabled={loading}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  image: { height: 200, width: '100%', borderRadius: 12, marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  info: { fontSize: 16, marginBottom: 2 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  payTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 12 },
  cardField: { height: 50, marginVertical: 10 },
  buttonWrapper: { marginTop: 20 },
});
