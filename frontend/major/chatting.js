import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Chatting = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState({
    title: "",
    category: "",
    date: "",
    description: "",
    image: null,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dateRecords"); // 서버 IP 사용
      const formattedData = response.data.map((item) => ({
        id: item.recordId.toString(),
        title: item.summarize,
        category: item.location,
        date: item.date.split("T")[0], // "YYYY-MM-DD" 포맷으로 변환
        description: item.activity,
        image: item.image_url || null,
      }));
      setData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addItem = async () => {
    if (
      newItem.title.trim() &&
      newItem.category.trim() &&
      newItem.date.trim() &&
      newItem.description.trim()
    ) {
      try {
        const response = await axios.post("http://localhost:3000/dateRecords", {
          summarize: newItem.title,
          location: newItem.category,
          date: newItem.date,
          activity: newItem.description,
          image_url: newItem.image,
        });

        setData((prev) => [
          ...prev,
          {
            id: response.data.recordId.toString(),
            title: newItem.title,
            category: newItem.category,
            date: newItem.date,
            description: newItem.description,
            image: newItem.image,
          },
        ]);
        setNewItem({ title: "", category: "", date: "", description: "", image: null });
        setModalVisible(false);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    } else {
      alert("모든 필드를 채워주세요!");
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/dateRecords/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const pickImageForItem = async (id) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, image: imageUri } : item
        )
      );
    }
  };

  const filteredData = data.filter((item) =>
    item.title.includes(searchText)
  );

  const renderRightActions = (id) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => deleteItem(id)}
    >
      <Text style={styles.deleteText}>X</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 제목과 메뉴 */}
      <View style={styles.header}>
        <Text style={styles.title}>데이트 기록</Text>
      </View>

      {/* 검색창 */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="채팅 기록 검색"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* 리스트 */}
      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Swipeable renderRightActions={() => renderRightActions(item.id)}>
            <View style={styles.itemContainer}>
              {/* 이미지 클릭 */}
              <TouchableOpacity onPress={() => pickImageForItem(item.id)}>
                <Image
                  source={
                    item.image
                      ? { uri: item.image }
                      : require("../assets/icon.png")
                  }
                  style={styles.itemImage}
                />
              </TouchableOpacity>
              {/* 리스트의 나머지 부분 클릭 시 ChatRoom 이동 */}
              <TouchableOpacity
                style={styles.itemContent}
                onPress={() => navigation.navigate("chatroom", { item })}
              >
                <View style={styles.itemHeader}>
                  <Text style={styles.itemCategory}>{item.category}</Text>
                  <Text style={styles.itemDate}>{item.date}</Text>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </TouchableOpacity>
            </View>
          </Swipeable>
        )}
      />

      {/* 추가 버튼 */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {/* 모달 */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>새 데이트 추가</Text>
            <TextInput
              style={styles.input}
              placeholder="제목"
              value={newItem.title}
              onChangeText={(text) => setNewItem({ ...newItem, title: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="카테고리"
              value={newItem.category}
              onChangeText={(text) => setNewItem({ ...newItem, category: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="날짜"
              value={newItem.date}
              onChangeText={(text) => setNewItem({ ...newItem, date: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="설명"
              value={newItem.description}
              onChangeText={(text) => setNewItem({ ...newItem, description: text })}
            />
            <TouchableOpacity style={styles.imagePicker} onPress={pickImageForItem}>
              <Text style={styles.imagePickerText}>
                {newItem.image ? "이미지 선택됨" : "이미지 선택"}
              </Text>
            </TouchableOpacity>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={addItem}
              >
                <Text style={styles.modalButtonText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
    backgroundColor: "#FD749B",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  searchBar: {
    padding: 10,
    backgroundColor: "#F8F8F8",
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    borderColor: "#DDD",
    borderWidth: 1,
    color: "#333",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  itemContent: {
    flex: 1,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  itemCategory: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  itemDate: {
    fontSize: 12,
    color: "#888",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemDescription: {
    fontSize: 14,
    color: "#666",
  },
  deleteButton: {
    backgroundColor: "#FF5C5C",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: "100%",
  },
  deleteText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#281AC8",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#281AC8",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
    marginBottom: 15,
    padding: 10,
  },
  imagePicker: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  imagePickerText: {
    color: "#333",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    backgroundColor: "#FD749B",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#888",
  },
  modalButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Chatting;