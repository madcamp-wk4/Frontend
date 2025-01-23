

import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backText}>이전</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/profile_init.png')} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.profileText}>
          현 애인의 생일을 비밀번호로 하지 마세요! 저도 이 사실을 알고 있지 않겠습니까..
        </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="이름" style={styles.textInput} />
          <Image source={require('../assets/user-icon.png')} style={styles.inputIcon} />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="이메일" style={styles.textInput} />
          <Image source={require('../assets/mail.png')} style={styles.inputIcon} />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="비밀번호" style={styles.textInput} secureTextEntry={true} />
          <Image source={require('../assets/lock-icon.png')} style={styles.inputIcon} />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="비밀번호 확인" style={styles.textInput} secureTextEntry={true} />
          <Image source={require('../assets/lock-icon.png')} style={styles.inputIcon} />
        </View>
      </View>

      {/* Signup Button */}
      <LinearGradient
        colors={['#FD749B', '#281AC8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.signupButton}
      >
        <TouchableOpacity onPress={() => navigation.navigate('createdAccount')} text="회원가입">
          <Text style={styles.signupText}>회원가입</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF7',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    color: '#A75DFF',
    fontSize: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileText: {
    textAlign: 'center',
    color: '#6D6D6D',
    fontSize: 14,
    marginHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  textInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 10,
    paddingLeft: 40,
    backgroundColor: '#FFF',
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
    top: 12,
    width: 35,
    height: 40,
  },

  signupButton: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signupText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default SignupScreen;
