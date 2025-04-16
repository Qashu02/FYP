import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function StepThree() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'monthly',
      title: 'Monthly Plan',
      price: '$50 / month',
      description: 'Billed monthly',
      savings: '',
    },
    {
      id: '6months',
      title: '6 Months Plan',
      price: '$270 / 6 months',
      description: 'Save $30 compared to monthly',
      savings: 'Save $30',
    },
    {
      id: 'yearly',
      title: 'Yearly Plan',
      price: '$500 / year',
      description: 'Best value plan',
      savings: 'Save $100',
    },
  ];

  const handleSelect = (id) => {
    setSelectedPlan(id);
    console.log("Selected Plan:", id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose a Pricing Plan</Text>

      {plans.map((plan) => (
        <TouchableOpacity
          key={plan.id}
          style={[
            styles.card,
            selectedPlan === plan.id && styles.selectedCard,
          ]}
          onPress={() => handleSelect(plan.id)}
        >
          <Text style={styles.title}>{plan.title}</Text>
          <Text style={styles.price}>{plan.price}</Text>
          <Text style={styles.description}>{plan.description}</Text>
          {plan.savings ? (
            <Text style={styles.savings}>{plan.savings}</Text>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fefefe',
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3, // For Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  selectedCard: {
    borderColor: '#d33',
    backgroundColor: '#fff5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  price: {
    fontSize: 16,
    marginTop: 4,
    color: '#555',
  },
  description: {
    fontSize: 14,
    marginTop: 4,
    color: '#777',
  },
  savings: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
    color: '#d33',
  },
});
