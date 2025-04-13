import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AppTextInput from '../AppTextInput'; // Make sure this is correctly implemented

const ReviewSection = () => {
  const [reviewList, setReviewList] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const totalReviews = reviewList.length;
const averageRating =
  totalReviews > 0
    ? (reviewList.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    : 0;


  const handleAddReview = () => {
    if (reviewText.trim() === '' || rating === 0) return;

    const newReview = {
      id: Date.now().toString(),
      name: 'Guest',
      comment: reviewText,
      rating,
    };

    setReviewList([newReview, ...reviewList]);
    setReviewText('');
    setRating(0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.reviewer}>{item.name}</Text>
      <Text style={styles.comment}>{item.comment}</Text>
      <View style={styles.starRow}>
        {[1, 2, 3, 4, 5].map((i) => (
          <FontAwesome
            key={i}
            name={i <= item.rating ? 'star' : 'star-o'}
            size={16}
            color="#FFD700"
          />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reviews</Text>

      <View style={{ marginBottom: 10 }}>
  <Text style={{ fontWeight: 'bold' }}>
    Total Reviews: {totalReviews}
  </Text>
  <Text style={{ fontWeight: 'bold' }}>
    Average Rating: {averageRating} / 5
  </Text>
</View>




      <View style={styles.starRow}>
        {[1, 2, 3, 4, 5].map((i) => (
          <TouchableOpacity key={i} onPress={() => setRating(i)}>
            <FontAwesome
              name={i <= rating ? 'star' : 'star-o'}
              size={28}
              color="#FFD700"
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

      <AppTextInput
        placeholder="Write your reviews..."
        iconPress="send"
        onIconPress={handleAddReview}
        value={reviewText}
        onChangeText={setReviewText}
        onSubmitEditing={handleAddReview}
        style={styles.reviewBox}
      />

      <FlatList
        data={reviewList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ReviewSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  starRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  star: {
    marginRight: 6,
  },
  reviewBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  reviewItem: {
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  reviewer: {
    fontWeight: 'bold',
  },
  comment: {
    marginVertical: 4,
  },
});
