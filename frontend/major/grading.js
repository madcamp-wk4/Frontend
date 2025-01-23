import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const Grading = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([
    {
      id: "1",
      title: "방탈출 데이트",
      category: "방탈출",
      date: "2025/01/17",
      description: "깜짝 놀라는 순간이 많았다~",
      image: require("../assets/icon.png"),
    },
    {
      id: "2",
      title: "성심당 투어",
      category: "성심당",
      date: "2025/01/13",
      description: "성심당 투어!! 최애는 튀김소보로",
      image: require("../assets/icon.png"),
    },
    {
      id: "3",
      title: "라오 여행 돌아다니기",
      category: "라오 여행",
      date: "2025/01/10",
      description: "애인을 위한 특별한 시간",
      image: require("../assets/icon.png"),
    },
  ]);

  // 필터링된 데이터
  const filteredData = data.filter((item) =>
    item.title.includes(searchText)
  );

  // 아이템 삭제 함수
  const deleteItem = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  // 스와이프 컴포넌트
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
        <TouchableOpacity>
          <Text style={styles.editIcon}>✎</Text>
        </TouchableOpacity>
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
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Swipeable renderRightActions={() => renderRightActions(item.id)}>
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemContent}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemCategory}>{item.category}</Text>
                  <Text style={styles.itemDate}>{item.date}</Text>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
            </View>
          </Swipeable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  editIcon: {
    fontSize: 18,
    color: "#888",
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
});

export default Grading;