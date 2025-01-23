import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function StandardSorting() {
  const [selectedCategory, setSelectedCategory] = useState({
    activityType: '',
    location: '',
    mood: '',
    purpose: '',
  });

  const categories = {
    activityType: ['액티브', '문화', '음식', '여행', '게임', '취미'],
    location: ['실내', '야외', '집'],
    mood: ['로맨틱', '힐링', '익사이팅', '캐주얼', '감성', '즉흥'],
    purpose: ['첫 데이트', '기념일', '장거리 연애', '깜짝', '극복', '일상 데이트'],
  };

  const handleSelect = (category, value) => {
    setSelectedCategory((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Title Container */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>분류 기준</Text>
        <View style={styles.titleBox}>
          <Text style={styles.description}>
            1. 활동 유형 (Activity Type){'\n'}기준: 데이트에서 가장 중심이 되는 활동(역할)을 기준으로 분류{'\n'}목적: 데이트의 핵심적인 활동 방식과 연관된 경험을 정의
          </Text>
          <Text style={styles.description}>
            2. 장소 (Location){'\n'}기준: 데이트가 이루어지는 물리적 공간을 기준으로 분류{'\n'}목적: 데이트의 전반적인 동선과 환경적 특성을 정의
          </Text>
          <Text style={styles.description}>
            3. 분위기 (Mood){'\n'}기준: 데이트가 전달하는 감정적 경험을 중심으로 분류{'\n'}목적: 데이트의 전체적인 느낌과 감성적 요소를 결정
          </Text>
          <Text style={styles.description}>
            4. 목적 (Purpose){'\n'}기준: 데이트를 하게 된 주요 동기(이유)를 기준으로 분류{'\n'}목적: 연애 관계에서 특정한 목표를 충족하는 데이트
          </Text>
        </View>
      </View>

      {/* Categories */}
      {Object.keys(categories).map((category) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>
            {category === 'activityType' && '활동 유형'}
            {category === 'location' && '장소'}
            {category === 'mood' && '분위기'}
            {category === 'purpose' && '목적'}
          </Text>
          <View style={styles.optionsContainer}>
            {categories[category].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.option,
                  selectedCategory[category] === item && styles.selectedOption,
                ]}
                onPress={() => handleSelect(category, item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedCategory[category] === item && styles.selectedOptionText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    titleContainer: {
      alignItems: 'center',
      marginTop: 25, // 테스트로 크게 설정
     
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#6E44FF',
      marginBottom: 16,
    },
    titleBox: {
      borderWidth: 1,
      borderColor: '#6E44FF',
      borderRadius: 10,
      padding: 16,
      backgroundColor: '#F9F9FF',
      width: '90%',
    },
    description: {
      fontSize: 14,
      color: '#333',
      marginBottom: 16,
    },
    categoryContainer: {
      marginBottom: 24,
      marginTop: 16,
    },
    categoryTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#6E44FF',
      marginBottom: 8,
    },
    optionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    option: {
      borderRadius: 3,
      borderWidth: 1,
      borderColor: '#6E44FF',
      paddingHorizontal: 16,
      paddingVertical: 8,
      margin: 4,
    },
    selectedOption: {
      backgroundColor: '#6E44FF',
    },
    optionText: {
      fontSize: 14,
      color: '#6E44FF',
    },
    selectedOptionText: {
      color: '#fff',
    },
  });
  