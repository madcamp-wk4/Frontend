import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 뒤로가기 기능을 위한 훅

export default function StandardGrading() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigation = useNavigation(); // 네비게이션 사용

  const mbtiCategories = ['ENFP', 'ENFJ', 'INTJ', 'ENTP', 'ISTP', 'ISFP', 'ESTJ', 'INFJ', 'ISTJ', 'ENTJ'];
  const otherCategories = ['음식', '여행', '게임', '취미', '운동', '예술', '자연', '쇼핑'];

  const handleSelect = (value) => {
    setSelectedCategory(value);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>채점 기준</Text>

      {/* Description Box */}
      <View style={styles.descriptionBox}>
        <Text style={styles.description}>
          1. 감정적 만족도 (Emotional Satisfaction){'\n'}
          ✔️ 서로 즐거웠는지, 공감이 오갔는지, 감정적으로 편안했는지{'\n'}
          ✔️ MBTI 유형별 고려점{'\n'}
          F(감정형): 감정적인 교감과 공감이 충분했는지{'\n'}
          T(사고형): 논리적인 대화가 자연스럽고 지적인 자극이 있었는지{'\n\n'}
          
          2. 대화의 흐름과 공감 (Communication & Empathy){'\n'}
          ✔️ 대화가 자연스럽고 어색하지 않았는지{'\n'}
          ✔️ 서로의 의견을 존중하며 경청했는지{'\n'}
          ✔️ MBTI 유형별 고려점{'\n'}
          E(외향형): 활발한 대화와 즉흥적인 리액션이 있었는지{'\n'}
          I(내향형): 깊이 있는 대화가 이루어졌는지{'\n\n'}

          3. 데이트 장소와 활동의 적합성 (Venue & Activity Fit){'\n'}
          ✔️ 상대방의 성향에 맞는 장소/활동이었는지{'\n'}
          ✔️ 새로운 경험이 긍정적으로 작용했는지{'\n'}
          ✔️ MBTI 유형별 고려점{'\n'}
          S(감각형): 현실적이고 오감을 자극하는 활동(맛집, 영화, 여행 등)이 적절했는지{'\n'}
          N(직관형): 창의적이거나 새로운 경험(전시회, 심도 깊은 토론 등)이 있었는지{'\n\n'}

          4. 서로에 대한 배려와 존중 (Respect & Consideration){'\n'}
          ✔️ 서로 예의를 갖추고 배려했는지{'\n'}
          ✔️ 상대방의 취향을 존중했는지{'\n'}
          ✔️ MBTI 유형별 고려점{'\n'}
          J(판단형): 계획된 일정이 원활하게 진행되었는지{'\n'}
          P(인식형): 즉흥적인 변화에도 유연하게 대처했는지{'\n\n'}

          5. 물리적 & 심리적 편안함 (Comfort & Ease){'\n'}
          ✔️ 데이트 중 불편함 없이 자연스러웠는지{'\n'}
          ✔️ 서로 부담을 느끼지 않았는지{'\n'}
          ✔️ MBTI 유형별 고려점{'\n'}
          I(내향형): 혼잡하거나 지나치게 활동적인 일정이 부담스럽지 않았는지{'\n'}
          E(외향형): 지나치게 조용하거나 정적인 일정이 지루하지 않았는지{'\n\n'}

          6. 기대와 현실의 조화 (Expectation vs. Reality){'\n'}
          ✔️ 기대했던 데이트와 실제 데이트가 크게 다르지 않았는지{'\n'}
          ✔️ 예상치 못한 상황에서도 긍정적으로 해결했는지{'\n\n'}

          추가적인 체크포인트:{'\n'}
          💡 데이트 이후의 반응: 연락이 지속되거나 긍정적인 피드백이 있었는지{'\n'}
          💡 재미 요소: 함께 웃거나 유쾌한 순간이 많았는지{'\n'}
          💡 서로에게 끌림: 외모, 성격, 가치관 등이 긍정적으로 다가왔는지
        </Text>
      </View>

      {/* MBTI Categories */}
      <Text style={styles.subTitle}>MBTI 유형</Text>
      <View style={styles.leftAlignedContainer}>
        {mbtiCategories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.categoryButton,
              selectedCategory === item && styles.selectedCategoryButton,
            ]}
            onPress={() => handleSelect(item)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item && styles.selectedCategoryText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Other Categories */}
      <Text style={styles.subTitle}>기타</Text>
      <View style={styles.leftAlignedContainer}>
        {otherCategories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.categoryButton,
              selectedCategory === item && styles.selectedCategoryButton,
            ]}
            onPress={() => handleSelect(item)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item && styles.selectedCategoryText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    backButton: {
      marginBottom: 24, // 아래로 더 내리기 위해 여백 증가
      marginTop: 20,    // 위쪽에서 약간의 여백 추가
      alignSelf: 'flex-start', // 왼쪽 정렬
    },
    backButtonText: {
      fontSize: 32, // 화살표 크기 확대
      color: '#6E44FF',
      fontWeight: 'bold', // 화살표를 더 굵게 표시
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#6E44FF',
      marginBottom: 16,
      marginTop: -19, 
      textAlign: 'center',
    },
    descriptionBox: {
      borderWidth: 1,
      borderColor: '#6E44FF',
      borderRadius: 10,
      padding: 16,
      backgroundColor: '#F9F9FF',
      marginBottom: 24,
    },
    description: {
      fontSize: 14,
      color: '#333',
      lineHeight: 20,
    },
    subTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#6E44FF',
      marginBottom: 8,
      marginTop: 16,
    },
    leftAlignedContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start', // 왼쪽 정렬
    },
    categoryButton: {
      borderRadius: 3,
      borderWidth: 1,
      borderColor: '#6E44FF',
      paddingHorizontal: 16,
      paddingVertical: 8,
      margin: 8,
    },
    selectedCategoryButton: {
      backgroundColor: '#6E44FF',
    },
    categoryText: {
      fontSize: 14,
      color: '#6E44FF',
    },
    selectedCategoryText: {
      color: '#fff',
    },
  });
  