import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import colors from '../config/colors';

const defaultAvatar = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';

const user = {
  name: 'John Doe',
  avatar: '',
  email: 'john.doe@example.com',
};
const color=colors.secondary
export default function ProfileScreen({navigation}) {
  const handlePress = (label) => {
    console.log(`Opening ${label} screen...`);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', style: 'destructive', onPress: () => console.log('User logged out') },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Profile Info */}
      <TouchableOpacity style={styles.profileSection} onPress={()=>navigation.navigate('Edit Profile')}>
        <Image
          source={{ uri: user.avatar || defaultAvatar }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </TouchableOpacity>

      {/* Menu Options */}
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Message")}>
        <Ionicons name="chatbubbles-outline" size={22} color={color} />
        <Text style={styles.menuText}>Messages</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Booking History')}>
        <MaterialIcons name="history" size={22} color={color} />
        <Text style={styles.menuText}>Booking History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Track Booking')}>
        <Ionicons name="location-outline" size={22} color={color} />
        <Text style={styles.menuText}>Track Booking</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SettingsPage')}>
        <Feather name="settings" size={22} color={color} />
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>

    

      <TouchableOpacity style={[styles.menuItem, styles.logout]} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={22} color="red" />
        <Text style={[styles.menuText, { color: 'red' }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop:50,
      flex: 1,
      padding: 20,
    
    },
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    avatar: {
      width: 64,
      height: 64,
      borderRadius: 32,
      marginRight: 16,
      backgroundColor: '#eee',
    },
    name: {
      fontSize: 18,
      fontWeight: '600',
    },
    email: {
      color: '#777',
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 14,
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
    menuText: {
      fontSize: 16,
      marginLeft: 12,
      color:colors.dark
    },
    logout: {
      marginTop: 20,
      borderTopWidth: 1,
      borderColor: '#eee',
    },
  });
  