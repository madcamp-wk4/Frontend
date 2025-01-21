import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CreatedAccount = ({ navigation }) => {

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.backText}> 이전</Text>
                    </TouchableOpacity>
            </View>
            
            <View>
                <Image source={require("../assets/account_success.png")}></Image>
                <LinearGradient
                    colors={['#FD749B', '#281AC8']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.signupButton}
                ></LinearGradient>

            </View>
            
            

            <Text>
                계정 생성 완료!!
            </Text>

            <Text>
                위 앱은 행복한 연애를 위하여 만들었습니다. 
                불순한 의도로 사용하시면 안됩니다:D
            </Text> 

            <LinearGradient
                    colors={['#FD749B', '#281AC8']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.signupButton}
            ></LinearGradient>

                  
            <TouchableOpacity onPress={() => navigation.navigate('mainHome')}>
                    <Text style={styles.signupText}>시작하기기</Text>
            </TouchableOpacity>      

        </View>
        
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF7',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
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


export default CreatedAccount;