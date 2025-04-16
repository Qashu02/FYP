import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardField } from '@stripe/stripe-react-native';

export default function PaymentScreen() {
  const [cardDetails, setCardDetails] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Card Details</Text>

      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#fff',
          textColor: '#000',
          fontSize: 16,
          placeholderColor: '#999',
        }}
        style={styles.cardContainer}
        onCardChange={(card) => setCardDetails(card)}
      />

      <View style={styles.preview}>
        <Text style={styles.previewText}>
          {cardDetails?.complete ? '✅ Card is valid' : '📝 Waiting for input...'}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
  },
  preview: {
    alignItems: 'center',
    marginTop: 20,
  },
  previewText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#444',
  },
});
