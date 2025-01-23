import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const ChatRoom = ({ route }) => {
  const { item } = route.params; // 현재 데이트 기록 정보
  const [messages, setMessages] = useState([
    { id: "q-0", text: "안녕하세요! 데이트 장소는 어디로 가셨나요?" }, // 첫 번째 질문
  ]);
  const [inputText, setInputText] = useState(""); // 사용자가 입력하는 답변
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 질문 인덱스

  // 고정된 질문 리스트
  const questions = [
    "안녕하세요! 데이트 장소는 어디로 가셨나요?",
    "어떤 활동을 하셨나요?",
    "데이트는 어떠셨나요? 즐거우셨나요?",
    "상대방은 어떤 기분이었나요?",
    "상대방에 대하여 추가로 알아낸 것이 있나요?",
  ];

  // 메시지 저장 및 분석
  const sendMessage = async () => {
    if (inputText.trim()) {
      try {
        // POST 요청으로 답변 저장
        const response = await axios.post(
          "http://143.248.197.200:3000/messages",
          {
            userId: 1, // 현재 로그인된 사용자 ID
            text: inputText,
            dateRecordId: parseInt(item.id), // 현재 데이트 기록 ID
          }
        );

        const savedMessage = response.data.data;
        console.log("Message saved:", savedMessage);

        // 사용자 답변을 로컬 상태에 추가
        setMessages((prev) => [
          ...prev,
          { id: `a-${currentQuestionIndex}`, text: inputText }, // 사용자의 답변
        ]);

        setInputText(""); // 입력 초기화

        // 메시지 분석 요청
        console.log("Analyzing message with ID:", savedMessage.messageId);
        await axios.post("http://143.248.197.200:3000/message-analysis/analyze-message", {
          messageId: savedMessage.messageId,
        });

        console.log("Message analyzed successfully!");

        // 다음 질문 진행
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
          setMessages((prev) => [
            ...prev,
            {
              id: `q-${currentQuestionIndex + 1}`,
              text: questions[currentQuestionIndex + 1],
            }, // 다음 질문 추가
          ]);
        } else {
          alert("모든 질문이 완료되었습니다!");
        }
      } catch (error) {
        console.error(
          "Error saving or analyzing message:",
          error.response?.data || error.message
        );
        alert("메시지를 저장하거나 분석하는 중 문제가 발생했습니다.");
      }
    } else {
      alert("답변을 입력해주세요!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        data={messages}
        keyExtractor={(msg, index) => msg.id || `msg-${index}`} // ID 생성
        renderItem={({ item }) => (
          <Text
            style={[
              styles.message,
              item.id.startsWith("q") ? styles.question : styles.answer,
            ]}
          >
            {item.text}
          </Text>
        )}
        contentContainerStyle={styles.messagesContainer}
      />
      {currentQuestionIndex < questions.length && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="답변을 입력하세요..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>전송</Text>
          </TouchableOpacity>
        </View>
      )}
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
    borderRadius: 8,
    marginBottom: 5,
    maxWidth: "70%",
  },
  question: {
    backgroundColor: "#F1F1F1",
    alignSelf: "flex-start",
  },
  answer: {
    backgroundColor: "#FD749B",
    color: "#FFFFFF",
    alignSelf: "flex-end",
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
