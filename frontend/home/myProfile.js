// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// const MyProfile = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Text style={styles.backButton}>←</Text>
//         </TouchableOpacity>
//         <Text style={styles.title}>마이 페이지</Text>
//         <TouchableOpacity>
//           <Text style={styles.mailIcon}>📧</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Profile Section */}
//       <View style={styles.profileContainer}>
//         <Image
//           source={{ uri: "https://via.placeholder.com/100" }} // 유저 프로필 이미지 URL 또는 로컬 이미지
//           style={styles.profileImage}
//         />
//         <Text style={styles.name}>오상근</Text>
//         <Text style={styles.status}>Status: 💚 썸 (연애중)</Text>

//         {/* Scores */}
//         <View style={styles.scoresContainer}>
//           {[
//             { label: "인정", value: "1/5" },
//             { label: "스킨십", value: "5/5" },
//             { label: "신뢰", value: "4/5" },
//             { label: "선물", value: "5/5" },
//             { label: "함께하는 시간", value: "4/5" },
//           ].map((score, index) => (
//             <View key={index} style={styles.scoreItem}>
//               <Text style={styles.scoreLabel}>{score.label}</Text>
//               <Text style={styles.scoreValue}>{score.value}</Text>
//             </View>
//           ))}
//         </View>

//         {/* Feature Section */}
//         <Text style={styles.featureTitle}>특징</Text>
//         <Text style={styles.featureDescription}>
//           운동을 매우 좋아하며 예상치 못한 상대의 매력을 느끼는 스타일입니다. 상대와 함께 활동하는 것을 좋아합니다.
//         </Text>
//         <Text style={styles.highlight}>
//           애인의 성격이 정말 멋집니다. 이 부분이 부럽습니다.
//         </Text>

//         <TouchableOpacity style={styles.editButton}>
//           <Text style={styles.editButtonText}>편집</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Categories */}
//       <Text style={styles.sectionTitle}>CATEGORY</Text>
//       <View style={styles.tagsContainer}>
//         {["강아지", "외향인", "최강동화정원", "전화", "추위", "감동적인"].map((tag, index) => (
//           <TouchableOpacity key={index} style={styles.tag}>
//             <Text style={styles.tagText}>{tag}</Text>
//           </TouchableOpacity>
//         ))}
//         <TouchableOpacity style={styles.addTag}>
//           <Text style={styles.addTagText}>+</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Location */}
//       <Text style={styles.sectionTitle}>LOCATION</Text>
//       <View style={styles.locationContainer}>
//         <Text style={styles.locationText}>대전</Text>
//         <TouchableOpacity>
//           <Text style={styles.editLocation}>Edit location</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   backButton: {
//     fontSize: 20,
//     color: '#9c27b0',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   mailIcon: {
//     fontSize: 20,
//     color: '#9c27b0',
//   },
//   profileContainer: {
//     margin: 16,
//     padding: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     alignSelf: 'center',
//     marginBottom: 16,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#333',
//   },
//   status: {
//     fontSize: 14,
//     textAlign: 'center',
//     color: '#666',
//     marginBottom: 16,
//   },
//   scoresContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginBottom: 16,
//   },
//   scoreItem: {
//     width: '33%',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   scoreLabel: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   scoreValue: {
//     fontSize: 14,
//     color: '#666',
//   },
//   featureTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   featureDescription: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 16,
//     lineHeight: 20,
//   },
//   highlight: {
//     fontSize: 14,
//     color: '#ff9800',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   editButton: {
//     alignSelf: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: '#9c27b0',
//     borderRadius: 20,
//   },
//   editButtonText: {
//     fontSize: 14,
//     color: '#fff',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginHorizontal: 16,
//     marginTop: 16,
//   },
//   tagsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     paddingHorizontal: 16,
//     marginBottom: 16,
//   },
//   tag: {
//     backgroundColor: '#e1bee7',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     marginRight: 8,
//     marginBottom: 8,
//   },
//   tagText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   addTag: {
//     backgroundColor: '#9c27b0',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     marginRight: 8,
//     marginBottom: 8,
//   },
//   addTagText: {
//     fontSize: 14,
//     color: '#fff',
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//   },
//   locationText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   editLocation: {
//     fontSize: 14,
//     color: '#9c27b0',
//   },
// });

// export default MyProfile;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import GetLoggedInUser from '../loginStorage/getLoggedIn'; // GetLoggedInUser 가져오기

const MyProfile = () => {
  const [user, setUser] = useState(null); // 사용자 정보를 상태로 관리

  // 컴포넌트가 렌더링될 때 로그인한 사용자 정보 가져오기
  useEffect(() => {
    const fetchUser = async () => {
      const loggedInUser = await GetLoggedInUser(); // AsyncStorage에서 사용자 정보 가져오기
      setUser(loggedInUser); // 사용자 정보를 상태에 저장
    };
    fetchUser();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>마이 페이지</Text>
        <TouchableOpacity>
          <Text style={styles.mailIcon}>📧</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        {user ? ( // 로그인한 사용자가 있을 경우
          <>
            <Image
              source={{ uri: user.profileImage || "https://via.placeholder.com/100" }} // 프로필 이미지 URL 또는 기본 이미지
              style={styles.profileImage}
            />
            <Text style={styles.name}>{user.name || "사용자 이름"}</Text>
            <Text style={styles.status}>{user.status || "Status: 💚 썸 (연애중)"}</Text>
          </>
        ) : (
          <Text style={styles.noUserText}>로그인 정보가 없습니다. 로그인해주세요.</Text>
        )}

        {/* Scores */}
        {user && (
          <View style={styles.scoresContainer}>
            {[
              { label: "인정", value: `${user.admit || 0}/5` },
              { label: "스킨십", value: `${user.skinship || 0}/5` },
              { label: "신뢰", value: `${user.trust || 0}/5` },
              { label: "선물", value: `${user.present || 0}/5` },
              { label: "함께하는 시간", value: `${user.togetherTime || 0}/5` },
            ].map((score, index) => (
              <View key={index} style={styles.scoreItem}>
                <Text style={styles.scoreLabel}>{score.label}</Text>
                <Text style={styles.scoreValue}>{score.value}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Feature Section */}
        {user && (
          <>
            <Text style={styles.featureTitle}>특징</Text>
            <Text style={styles.featureDescription}>
              {user.feature || "사용자 특징이 없습니다."}
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>편집</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    fontSize: 20,
    color: '#9c27b0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  mailIcon: {
    fontSize: 20,
    color: '#9c27b0',
  },
  profileContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  status: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
  },
  noUserText: {
    fontSize: 16,
    color: '#f00',
    textAlign: 'center',
    marginBottom: 16,
  },
  scoresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  scoreItem: {
    width: '33%',
    alignItems: 'center',
    marginBottom: 8,
  },
  scoreLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  scoreValue: {
    fontSize: 14,
    color: '#666',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  editButton: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#9c27b0',
    borderRadius: 20,
  },
  editButtonText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default MyProfile;
