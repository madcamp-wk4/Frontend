import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CreatedAccount = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backText}>이전</Text>
        </TouchableOpacity>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/account_success.png')}
          style={styles.image}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>계정 생성 완료!!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        위 앱은 행복한 연애를 위하여 만들었습니다. {'\n'}
        불순한 의도로 사용하시면 안됩니다 :D
      </Text>

      {/* Button */}
      <LinearGradient
        colors={['#FD749B', '#281AC8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientButton}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('mainHome')}
          style={styles.touchableButton}
        >
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backText: {
    color: '#6D3ECB',
    fontSize: 16,
    fontWeight: '600',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6D3ECB',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#6D6D6D',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 30,
  },
  gradientButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  touchableButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreatedAccount;
