import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors';
import { FontAwesome } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');

const Card = ({ hall, onPress, navigation }) => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
      setActiveIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (activeIndex < hall.images.length - 1) {
      const newIndex = activeIndex + 1;
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
      setActiveIndex(newIndex);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {/* Swipable Images */}
        <FlatList
          data={hall.images}
          ref={flatListRef}
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        />

        {/* Left and Right Navigation Icons */}
        <View style={styles.leftArrow}>
          <TouchableOpacity onPress={goToPrevious} disabled={activeIndex === 0}>
            <Ionicons name="chevron-back-circle" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.rightArrow}>
          <TouchableOpacity onPress={goToNext} disabled={activeIndex === hall.images.length - 1}>
            <Ionicons name="chevron-forward-circle" size={40} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Overlay Content */}
        <View style={styles.overlay}>
          <Text style={styles.name}>{hall.name}</Text>
          <Text style={styles.rating}><FontAwesome name='star' size={30} color={'#D4AF37'}/> {hall.rating}</Text>
          <Text style={styles.location}>{hall.location}</Text>
          <Text style={styles.price}>{hall.price}</Text>
          <Text style={styles.description}>{hall.description}</Text>
        </View>

        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.title}>Available Halls</Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
              <Ionicons name="filter" size={24} color="#fff" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Notifications tapped')}>
              <Ionicons name="notifications-outline" size={24} color="#fff" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: width,
    height: height,
    backgroundColor: '#000',
   
  },
  
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',

    backgroundColor: colors.secondary,
    padding: 20,
  },
  name: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 18,
    color: '#eee',
    marginTop: 4,
  },
  price: {
    fontSize: 18,
    color: '#00ffcc',
    marginTop: 4,
  },
  rating:{
color:'#eee',
fontSize:20,
fontWeight:'700',
alignSelf:'flex-end',
position:'absolute',
top:20,
right:15

  },
  description: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 8,
  },
  leftArrow: {
    position: 'absolute',
    top: height / 2 - 20,
    left: 15,
    zIndex: 2,
  },
  rightArrow: {
    position: 'absolute',
    top: height / 2 - 20,
    right: 15,
    zIndex: 2,
  },
});
