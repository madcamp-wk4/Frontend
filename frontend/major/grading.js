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
  ScrollView,
} from "react-native";
import axios from "axios";
import { Swipeable } from "react-native-gesture-handler";

const Grading = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]); // 데이트 기록 리스트
  const [gradingResult, setGradingResult] = useState(null); // 채점 결과
  const [isModalVisible, setModalVisible] = useState(false); // 모달 상태

  // 데이트 기록 데이터 불러오기
  const fetchData = async () => {
    try {
      const response = await axios.get("http://143.248.197.200:3000/date-records");
      const formattedData = response.data.map((item) => ({
        id: item.recordId.toString(),
        title: item.summarize,
        category: item.location,
        date: item.date.split("T")[0], // "YYYY-MM-DD" 포맷으로 변환
        description: item.activity,
        image: item.image_url ? { uri: item.image_url } : require("../assets/icon.png"),
      }));
      setData(formattedData);
    } catch (error) {
      console.error("Error fetching date records:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 채점 요청 보내기
  const handleGrading = async (recordId) => {
    try {
      console.log("Requesting grading for recordId:", recordId);
      const response = await axios.post("http://143.248.197.200:3000/score-record", {
        recordId: parseInt(recordId, 10),
      });

      // 채점 결과 저장 및 모달 열기
      setGradingResult(response.data.data.result);
      setModalVisible(true);
    } catch (error) {
      console.error("Error processing grading:", error.response?.data || error.message);
      alert("채점 중 문제가 발생했습니다.");
    }
  };

  // 필터링된 데이터
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // 아이템 삭제 함수 (프론트엔드에서 삭제)
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
        <Text style={styles.title}>데이트 채점</Text>
      </View>

      {/* 검색창 */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="데이트 기록 검색"
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
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handleGrading(item.id)} // 아이템 클릭 시 채점 요청
            >
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemContent}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemCategory}>{item.category}</Text>
                  <Text style={styles.itemDate}>{item.date}</Text>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          </Swipeable>
        )}
      />

      {/* 채점 결과 모달 */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // Android 뒤로 가기 버튼 대응
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.modalScroll}>
              <Text style={styles.resultTitle}>채점 결과</Text>
              {gradingResult ? (
                <>
                  <View style={styles.resultBox}>
                    <Text style={styles.resultLabel}>대분류 1</Text>
                    <Text style={styles.resultText}>{gradingResult.mainCategory1}</Text>
                  </View>
                  <View style={styles.resultBox}>
                    <Text style={styles.resultLabel}>대분류 2</Text>
                    <Text style={styles.resultText}>{gradingResult.mainCategory2}</Text>
                  </View>
                  <View style={styles.resultBox}>
                    <Text style={styles.resultLabel}>소분류 1</Text>
                    <Text style={styles.resultText}>{gradingResult.subCategory1}</Text>
                  </View>
                  <View style={styles.resultBox}>
                    <Text style={styles.resultLabel}>소분류 2</Text>
                    <Text style={styles.resultText}>{gradingResult.subCategory2}</Text>
                  </View>
                  <View style={styles.resultBox}>
                    <Text style={styles.resultLabel}>총점</Text>
                    <Text style={styles.resultText}>{gradingResult.aiScore}</Text>
                  </View>
                  <View style={styles.resultBox}>
                    <Text style={styles.resultLabel}>이유</Text>
                    <Text style={styles.resultText}>{gradingResult.reason}</Text>
                  </View>
                </>
              ) : (
                <Text>채점 결과를 불러오는 중...</Text>
              )}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>닫기</Text>
            </TouchableOpacity>
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
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
    maxHeight: "80%",
  },
  modalScroll: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FD749B",
  },
  resultBox: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderColor: "#DDD",
    borderWidth: 1,
  },
  resultLabel: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
    color: "#555",
  },
  resultText: {
    fontSize: 14,
    color: "#333",
  },
  closeButton: {
    backgroundColor: "#FD749B",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Grading;