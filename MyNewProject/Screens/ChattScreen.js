import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Dummy user for now
  const user = {
    name: 'John Doe',
    avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    const now = new Date();
    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'me',
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: now.toDateString(),
    };
    setMessages([newMessage, ...messages]);
    setInput('');
  };

  const renderItem = ({ item, index }) => {
    const showDateHeader =
      index === messages.length - 1 || messages[index + 1]?.date !== item.date;

    return (
      <View>
        {showDateHeader && (
          <View style={styles.dateHeader}>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        )}
        <View
          style={[
            styles.message,
            item.sender === 'me' ? styles.myMessage : styles.otherMessage,
          ]}
        >
          <View style={styles.timeAndText}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{user.name}</Text>
      </View>

      {/* Chat messages */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        inverted
      />

      {/* Input field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={24} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { fontSize: 16, fontWeight: 'bold' },

  dateHeader: {
    alignItems: 'center',
    marginVertical: 10,
  },
  dateText: {
    fontSize: 13,
    color: '#888',
  },

  message: {
    marginVertical: 4,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  myMessage: {
    backgroundColor: '#d1e7ff',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#eee',
    alignSelf: 'flex-start',
  },
  timeAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
  timeText: {
    fontSize: 12,
    color: '#555',
    marginRight: 8,
  },
  messageText: {
    fontSize: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    marginRight: 10,
  },
});

export default ChatScreen;
