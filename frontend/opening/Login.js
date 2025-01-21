// import React from 'react';
// import { View, Image, Text, navigation, Button, StyleSheet, SafeAreaView, TextInput} from 'react-native';
// import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
// import MainHome from '../home/mainHome';

// const CustomSVGMail = () => (
//   <Svg xmlns="http://www.w3.org/2000/svg" width={13} height={2} viewBox="0 0 13 2" fill="none">
//     <Path
//       d="M0.570908 1.24133H11.6478"
//       stroke="url(#paint0_linear)"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <Defs>
//       <LinearGradient
//         id="paint0_linear"
//         x1="6.66322"
//         y1="1.08393"
//         x2="6.66831"
//         y2="2.85719"
//         gradientUnits="userSpaceOnUse"
//       >
//         <Stop stopColor="#FD749B" />
//         <Stop offset={1} stopColor="#281AC8" />
//       </LinearGradient>
//     </Defs>
//   </Svg>
// );

// const CustomSVGPassword = () => (
//   <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={19} viewBox="0 0 15 19" fill="none">
//     <Path
//       d="M3.28365 6.1084H11.4237C12.916 6.1084 14.137 7.3294 14.137 8.82174V16.9618C14.137 17.7758 13.5944 18.3184 12.7803 18.3184H1.92698C1.11298 18.3184 0.570312 17.7758 0.570312 16.9618V8.82174C0.570312 7.3294 1.79132 6.1084 3.28365 6.1084Z"
//       stroke="url(#paint0_linear)"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <Path
//       d="M3.28516 4.75165C3.28516 2.44531 5.04883 0.681641 7.35517 0.681641C9.66151 0.681641 11.4252 2.44531 11.4252 4.75165"
//       stroke="url(#paint1_linear)"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <Path
//       d="M8.70943 10.1777L5.99609 12.8911"
//       stroke="url(#paint2_linear)"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <Path
//       d="M5.99609 10.1777L8.70943 12.8911"
//       stroke="url(#paint3_linear)"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <Defs>
//       <LinearGradient
//         id="paint0_linear"
//         x1="8.032"
//         y1="4.18645"
//         x2="8.6521"
//         y2="25.8204"
//         gradientUnits="userSpaceOnUse"
//       >
//         <Stop stopColor="#FD749B" />
//         <Stop offset={1} stopColor="#281AC8" />
//       </LinearGradient>
//       <LinearGradient
//         id="paint1_linear"
//         x1="7.76217"
//         y1="0.0409905"
//         x2="7.87707"
//         y2="7.25641"
//         gradientUnits="userSpaceOnUse"
//       >
//         <Stop stopColor="#FD749B" />
//         <Stop offset={1} stopColor="#281AC8" />
//       </LinearGradient>
//       <LinearGradient
//         id="paint2_linear"
//         x1="7.48843"
//         y1="9.75063"
//         x2="7.64151"
//         y2="14.5573"
//         gradientUnits="userSpaceOnUse"
//       >
//         <Stop stopColor="#FD749B" />
//         <Stop offset={1} stopColor="#281AC8" />
//       </LinearGradient>
//       <LinearGradient
//         id="paint3_linear"
//         x1="7.48843"
//         y1="9.75063"
//         x2="7.64151"
//         y2="14.5573"
//         gradientUnits="userSpaceOnUse"
//       >
//         <Stop stopColor="#FD749B" />
//         <Stop offset={1} stopColor="#281AC8" />
//       </LinearGradient>
//     </Defs>
//   </Svg>
// );

// const Login = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={require('../assets/flowers.png')} style={styles.image} />
//       </View>

//       <View style={styles.textContainer}>
//         <TextInput style={CustomSVGMail}> 이메일 </TextInput>

//         <TextInput style={CustomSVGPassword}> 비밀번호 </TextInput>

//         <Button title="로그인" onPress={() => navigation.navigate('mainHome')} />
//         <Button title="아직 회원이 아니신가요?" onPress={() => navigation.navigate('SignUp')} />
//       </View>
      


      
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#EEE',
//   },
//   text: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   editText : {
//     borderColor :'#D1D1D1',
//     fontSize : 20
//   }

// });

// export default Login;

import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backText}> 이전</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Image and Text */}
      <View style={styles.profileContainer}>
        <Image source={require('../assets/profile_init.png')} style={styles.profileImage} />
        <Text style={styles.description}>
          "그거 아시나요? 어떤 개발자는 이곳에 등록해둔 것 하나로써 행복했던 기억을 공개하고 있지않았던가? {`\n`}
          즐거웠기를 바랍니다!! 여러분도 :D"
        </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="이메일" style={styles.textInput} />
          <Image source={require('../assets/mail.png')} style={styles.inputIcon} />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="비밀번호" style={styles.textInput} secureTextEntry={true} />
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
        <TouchableOpacity>
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
    paddingHorizontal: 20,
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
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
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
  snsText: {
    textAlign: 'center',
    color: '#6D6D6D',
    marginBottom: 10,
  },
  snsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  snsIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
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

export default LoginScreen;
