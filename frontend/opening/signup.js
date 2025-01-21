import React from 'react';
import {Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      
      
      <TextInput placeholder='이름'> </TextInput>
      <TextInput placeholder='이메일일'> </TextInput>
      <TextInput placeholder='비밀번호'> </TextInput>
      <TextInput placeholder='비밀번호 확인'> </TextInput>
      
      <Button title="회원가입" onPress={() => navigation.navigate('createdAccount')} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Signup;
