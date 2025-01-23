import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const LoverProfile = () => {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = () => {
    console.log("갤러리 열기 실행됨"); // 확인용 로그

    const options = {
        mediaType: "photo",
        quality: 1,
    };

    launchImageLibrary(options, (response) => {
        console.log("response:", response); // 응답 내용 출력

        if (response.didCancel) {
            Alert.alert("취소", "사진 선택이 취소되었습니다.");
        } else if (response.errorCode) {
            Alert.alert("오류", `사진 선택 오류: ${response.errorMessage}`);
        } else if (response.assets && response.assets.length > 0) {
            const uri = response.assets[0].uri; // 선택된 이미지의 URI
            console.log("선택된 이미지 URI:", uri); // 선택된 이미지 경로 확인
            setImageUri(uri);
        }
    });
};


  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>애인 프로필</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
      <TouchableOpacity onPress={selectImage}>
      <Image
          source={
            imageUri
              ? { uri: imageUri } 
              : require("../assets/account.png")
          }
        />
        </TouchableOpacity>
        
        
        <Text style={styles.name}>김지원</Text>
        <Text style={styles.status}>Status: 💙 썸 타는 중</Text>

        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {[
            { label: "인정", value: "4/5" },
            { label: "스친심", value: "2/5" },
            { label: "신뢰", value: "5/5" },
            { label: "선물", value: "3/5" },
            { label: "함께하는 시간", value: "4/5" },
          ].map((item, index) => (
            <View key={index} style={styles.rating}>
              <Text style={styles.ratingLabel}>{item.label}</Text>
              <Text style={styles.ratingValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Features */}
        <Text style={styles.sectionTitle}>특징</Text>
        <Text style={styles.featuresText}>
          명확는 길을 매우 좋아하며 예상치 못한 부분에서 상대에게 매력을 느끼는
          타입입니다. 우애와 애정은 소홀히 하지 않게 됩니다.
        </Text>

        {/* Memo Section */}
        <Text style={styles.sectionTitle}>기억할 내용</Text>
        <Text style={styles.memoText}>
          반지 두고 오면 안 됩니다. 자리를 잘 잡아야 합니다. 소중한 장소를 잊지
          말아야 합니다.
        </Text>

        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>편집</Text>
        </TouchableOpacity>
      </View>

      {/* Tags */}
      <Text style={styles.sectionTitle}>CATEGORY</Text>
      <View style={styles.tagsContainer}>
        {["고양이", "방송이", "안전 & 안정", "카톡", "추위", "센스 있는"].map(
          (tag, index) => (
            <TouchableOpacity key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          )
        )}
        <TouchableOpacity style={styles.addTag}>
          <Text style={styles.addTagText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Location */}
      <Text style={styles.sectionTitle}>LOCATION</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>신촌</Text>
        <TouchableOpacity>
          <Text style={styles.editLocation}>Edit location</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    fontSize: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: "#9c27b0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  status: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  ratingsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  rating: {
    margin: 10,
    alignItems: "center",
  },
  ratingLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  ratingValue: {
    fontSize: 14,
    color: "#555",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  featuresText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  memoText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  editButton: {
    backgroundColor: "#9c27b0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  tag: {
    backgroundColor: "#e1bee7",
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 14,
    color: "#333",
  },
  addTag: {
    backgroundColor: "#9c27b0",
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  addTagText: {
    fontSize: 14,
    color: "#fff",
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  locationText: {
    fontSize: 16,
    color: "#333",
  },
  editLocation: {
    fontSize: 14,
    color: "#9c27b0",
  }
});

export default LoverProfile;
