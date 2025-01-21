// // import React from 'react-native'
// // import { SafeAreaView, Image, Text, StyleSheet, View} from 'react-native';
// // import LinearGradient from 'react-native-linear-gradient';

// // const Guide1 = () => {

// //     return (
// //         <SafeAreaView>

// //             <View>
// //                 <Image source={require('../assets/flowers.png')}>
// //                 </Image>
// //             </View>

// //             <View>
// //                 <Text>
// //                     기억하고 싶은 순간을 
// //                     기록하고 평가하세요! 
// //                 </Text>
// //             </View>

// //             <View>
// //                 소중한 데이터 경험을 기록하고, 서로의 취향을 알아가며 더욱 깊이 있는 관계를 만들어보세요!
// //             </View>

        
// //         </SafeAreaView>
// //     );


// //     const styles = StyleSheet.create({

// //     }

// //     )
// // };

// // export default Guide1;



// // import React from 'react';
// // import { SafeAreaView, Image, Text, StyleSheet, View } from 'react-native';
// // import { LinearGradient } from 'expo-linear-gradient';
// // import MaskedView from '@react-native-masked-view/masked-view';

// // // Gradient Text 컴포넌트
// // const GradientText = ({ children, style }) => {
// //   return (
// //     <MaskedView
// //       maskElement={<Text style={[styles.gradientText, style]}>{children}</Text>}
// //     >
// //       <LinearGradient
// //         colors={['#FD749B', '#281AC8']} // Gradient colors
// //         // start={{ x: 0, y: 0 }}
// //         // end={{ x: 1, y: 1 }}
// //         style={{ flex: 1 }}
// //       />
// //     </MaskedView>
// //   );
// // };

// // // Guide1 컴포넌트
// // const Guide1 = () => {
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       {/* 꽃 이미지 */}
// //       <View style={styles.imageContainer}>
// //         <Image
// //           source={require('../assets/flowers.png')}
// //           style={styles.image}
// //         />
// //       </View>

// //       {/* Gradient Text */}
// //       <View style={styles.textContainer}>
// //         <GradientText style={styles.title}>
// //           기억하고 싶은 순간을 기록하고 평가하세요!
// //         </GradientText>
// //       </View>

// //       {/* 일반 텍스트 */}
// //       <View style={styles.textContainer}>
// //         <Text style={styles.description}>
// //           소중한 데이터 경험을 기록하고, 서로의 취향을 알아가며 더욱 깊이 있는 관계를 만들어보세요!
// //         </Text>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // // 스타일 정의
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#ffffff',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   imageContainer: {
// //     marginBottom: 20,
// //   },
// //   image: {
// //     width: 200,
// //     height: 200,
// //     resizeMode: 'contain',
// //   },
// //   textContainer: {
// //     marginVertical: 10,
// //     paddingHorizontal: 20,
// //   },
// //   gradientText: {
// //     fontSize: 24,
// //     fontWeight: '700',
// //     textAlign: 'center',
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: '700',
// //     textAlign: 'center',
// //   },
// //   description: {
// //     fontSize: 16,
// //     color: '#555',
// //     textAlign: 'center',
// //   },
// // });

// // export default Guide1;
// import React from 'react';
// import { SafeAreaView, Image, Text, StyleSheet, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import MaskedView from '@react-native-masked-view/masked-view';

// const GradientText = ({ children, style }) => {
//   return (
//     <MaskedView
//       maskElement={<Text style={[styles.gradientText, style]}>{children}</Text>}
//     >
//       <LinearGradient
//         colors={['#FD749B', '#281AC8']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//         style={{ flex: 1 }}
//       />
//     </MaskedView>
//   );
// };

// const Guide1 = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={require('../assets/flowers.png')} style={styles.image} />
//       </View>
//       <View style={styles.textContainer}>
//         <GradientText style={styles.title}>
//           기억하고 싶은 순간을 기록하고 평가하세요!
//         </GradientText>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.description}>
//           소중한 데이터 경험을 기록하고, 서로의 취향을 알아가며 더욱 깊이 있는 관계를 만들어보세요!
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     marginBottom: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//   },
//   textContainer: {
//     marginVertical: 10,
//     paddingHorizontal: 20,
//   },
//   gradientText: {
//     fontSize: 24,
//     fontWeight: '700',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//   },
// });

// export default Guide1;
import React from 'react';
import { View, Image, Text, Button, StyleSheet, SafeAreaView} from 'react-native';

const Onboarding1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        
        <Button title="Next" onPress={() => navigation.navigate('Onboarding2')} />
        <Button title="Skip" onPress={() => navigation.navigate('Login')} />
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

export default Onboarding1;
