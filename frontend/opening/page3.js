import React from 'react';
import { View, Image, Text, Button, StyleSheet, SafeAreaView} from 'react-native';

const Onboarding3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Button title="시작하기기" onPress={() => navigation.navigate('Login')} />
        <Image source={require('../assets/flowers.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
                    기억하고 싶은 순간을 기록하고 평가하세요!
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          소중한 데이터 경험을 기록하고, 서로의 취향을 알아가며 더욱 깊이 있는 관계를 만들어보세요!
        </Text>
      </View>
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

export default Onboarding3;
