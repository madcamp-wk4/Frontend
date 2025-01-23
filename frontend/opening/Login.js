// import React from 'react';
// import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const LoginScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
//           <Text style={styles.backText}> 이전</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Profile Image and Text */}
//       <View style={styles.profileContainer}>
//         <Image source={require('../assets/profile_init.png')} style={styles.profileImage} />
//         <Text style={styles.description}>
//           그거 아시나요? 앱의 개발자는 이전에 등록해둔 전 썸녀와의 행복했던 기록을 깜빡하고 안 지웠다가 여친한데 혼났다고 합니다!! 증거인멸은 필수입니다 여러분:D
//         </Text>
//       </View>

//       {/* Input Fields */}
//       <View style={styles.inputContainer}>
//         <View style={styles.inputWrapper}>
//           <TextInput placeholder="이메일" style={styles.textInput} />
//           <Image source={require('../assets/mail.png')} style={styles.inputIcon} />
//         </View>
//         <View style={styles.inputWrapper}>
//           <TextInput placeholder="비밀번호" style={styles.textInput} secureTextEntry={true} />
//           <Image source={require('../assets/lock-icon.png')} style={styles.inputIcon} />
//         </View>
//       </View>

//       {/* Login Button */}
//       <LinearGradient
//         colors={['#FD749B', '#281AC8']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//         style={styles.loginButton}
//       >
//         <TouchableOpacity onPress={() => navigation.navigate("mainHome")}>
//           <Text style={styles.loginText}>로그인</Text>
//         </TouchableOpacity>
//       </LinearGradient>

//       {/* Sign-up Link */}
//       <TouchableOpacity style={styles.signupContainer} onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.signupText}>
//           계정이 없으신가요? <Text style={styles.signupLink}>회원가입을 원하면 클릭하세요</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFBF7',
//     paddingHorizontal: 30,
//    // justifyContent: 'center',
//     padding : 80
//   },
//   header: {
//     marginTop: 40,
//     marginBottom: 20,
//   },
//   backText: {
//     color: '#A75DFF',
//     fontSize: 16,
//   },
//   profileContainer: {
//     alignItems: 'center',
//     marginBottom: 50,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 20,
//   },
//   description: {
//     textAlign: 'center',
//     color: '#6D6D6D',
//     fontSize: 14,
//     lineHeight: 20,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   inputWrapper: {
//     position: 'relative',
//     marginBottom: 15,
//   },
//   textInput: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#D1D1D1',
//     borderRadius: 10,
//     paddingLeft: 40,
//     backgroundColor: '#FFF',
//   },
//   inputIcon: {
//     position: 'absolute',
//     left: 10,
//     top: 12,
//     width: 25,
//     height: 25,
//   },
//   loginButton: {
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   loginText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   snsText: {
//     textAlign: 'center',
//     color: '#6D6D6D',
//     marginBottom: 10,
//   },
//   snsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   snsIcon: {
//     width: 40,
//     height: 40,
//     marginHorizontal: 10,
//   },
//   signupContainer: {
//     marginTop: 10,
//   },
//   signupText: {
//     textAlign: 'center',
//     color: '#6D6D6D',
//   },
//   signupLink: {
//     color: '#A75DFF',
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HandleLogin from '../loginStorage/setHandleLogin'; // HandleLogin 가져오기

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('오류', '이메일과 비밀번호를 입력해주세요.');
      return;
    }

    // HandleLogin 호출
    await HandleLogin({ email, password, navigation });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
          <Text style={styles.backText}> 이전</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Image and Text */}
      <View style={styles.profileContainer}>
        <Image source={require('../assets/profile_init.png')} style={styles.profileImage} />
        <Text style={styles.description}>
          그거 아시나요? 앱의 개발자는 이전에 등록해둔 전 썸녀와의 행복했던 기록을 깜빡하고 안 지웠다가 여친한데 혼났다고 합니다!! 증거인멸은 필수입니다 여러분:D
        </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="이메일"
            style={styles.textInput}
            value={email}
            onChangeText={setEmail} // 이메일 상태 업데이트
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Image source={require('../assets/mail.png')} style={styles.inputIcon} />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="비밀번호"
            style={styles.textInput}
            value={password}
            onChangeText={setPassword} // 비밀번호 상태 업데이트
            secureTextEntry={true}
          />
          <Image source={require('../assets/lock-icon.png')} style={styles.inputIcon} />
        </View>
      </View>

      {/* Login Button */}
      <LinearGradient
        colors={['#FD749B', '#281AC8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.loginButton}
      >
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Sign-up Link */}
      <TouchableOpacity style={styles.signupContainer} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>
          계정이 없으신가요? <Text style={styles.signupLink}>회원가입을 원하면 클릭하세요</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF7',
    paddingHorizontal: 30,
    padding: 80,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  backText: {
    color: '#A75DFF',
    fontSize: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    color: '#6D6D6D',
    fontSize: 14,
    lineHeight: 20,
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
    width: 25,
    height: 25,
  },
  loginButton: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    marginTop: 10,
  },
  signupText: {
    textAlign: 'center',
    color: '#6D6D6D',
  },
  signupLink: {
    color: '#A75DFF',
    fontWeight: 'bold',
  },
});

export default Login;
