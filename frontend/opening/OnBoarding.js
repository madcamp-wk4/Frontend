import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

const Onboarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: '1',
      title: '기억하고 싶은 순간을\n기록하고 평가하세요!',
      subtitle: '소중한 데이트 경험을 기록하고, 서로의 취향을 알아\n가며 더욱 깊이 있는 관계를 만들어보세요!',
      image: require('../assets/flowers.png')
    },
    {
      id: '2',
      title: '데이트를 기록하고\n 상대방을 더 잘 이해해보세요',
      subtitle: '다양한 카테고리의 데이트 활동을 기록하고 평가하세요.\n 영화,음식,여행 등 모든 경험이 쌓여\n 더욱 의미있는 관계로 발전할 수 있어요. ',
      image: require('../assets/board2.png')
    },
    {
      id: '3',
      title: '더 특별한 만남을 위한 가이드!',
      subtitle: '우리의 맞춤형 분석을 통해 서로를 더 잘 이해\n하고, 더욱 즐거운 데이트를 계획해보세요.\n 기록하고 성장하는 연애의 시작!',
      image: require('../assets/createAccount.png')
    },
  ];

  const { width, height} = Dimensions.get('window');

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width }]}>
      {/* Illustration */}
      <Image source={item.image} style={styles.image} />

      {/* Title */}
      <Text style={styles.title}>{item.title}</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  const handleViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  return (
    <View style={styles.container}>
      {/* FlatList for Swiping */}
      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleViewableItemsChanged}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      {/* Skip/Next Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('mainHome')}
      >
        <Text style={styles.buttonText}>
          {currentIndex === slides.length - 1 ? '시작하기' : 'Skip'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF7',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6D3ECB',
    textAlign: 'center',
    marginBottom: 10,
    height:80
    
  },
  subtitle: {
    fontSize: 14,
    color: '#6D6D6D',
    textAlign: 'center',
    lineHeight: 20,
    flexShrink: 1
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D1D1D1',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#6D3ECB',
  },
  button: {
    backgroundColor: '#6D3ECB',
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Onboarding;
