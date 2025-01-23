import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ChatRoom = ({ route }) => {
  const { item } = route.params; // 전달받은 데이터
  const [messages, setMessages] = useState([
    { id: "1", text: "안녕하세요! 데이트 즐거우셨나요?" },
    { id: "2", text: "네! 정말 재밌었어요." },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: (messages.length + 1).toString(), text: inputText },
      ]);
      setInputText("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        data={messages}
        keyExtractor={(msg) => msg.id}
        renderItem={({ item }) => (
          <Text style={styles.message}>{item.text}</Text>
        )}
        contentContainerStyle={styles.messagesContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="메시지를 입력하세요..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>전송</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FD749B",
  },
  messagesContainer: {
    flexGrow: 1,
    marginBottom: 20,
  },
  message: {
    padding: 10,
    backgroundColor: "#F1F1F1",
    borderRadius: 8,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#FD749B",
    padding: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ChatRoom;