import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient"; // Expo에서 제공하는 LinearGradient
import { useNavigation } from "@react-navigation/native"

// SVG Icons
const gradingIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
<path d="M15.1394 7.18604L18.6743 7.18604L18.6743 2.76743L15.1394 2.76744L15.1394 7.18604Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.907 7.36279V16.2" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.06985 10.721L11.6047 10.7209L11.6047 6.30234L8.06984 6.30235L8.06985 10.721Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.83716 11.7814V16.2" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.83716 1.17676V5.59536" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.907 1.17676V2.06048" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.00003 14.2559L4.53491 14.2559L4.5349 9.83726L1.00002 9.83727L1.00003 14.2559Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.76733 9.83721L2.76733 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.76733 16.0232V15.1395" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const calendarIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="31" viewBox="0 0 26 31" fill="none">
<path d="M25 22.2C25 18.6 25 13.1 25 5.9C25 4.3 23.7 3 22.1 3H3.9C2.3 3 1 4.3 1 5.9V23.3C1 24.9 2.3 26.2 3.9 26.2H7.3H13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 9.1001H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 1V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 1V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 30C15.6863 30 13 27.3137 13 24C13 20.6863 15.6863 18 19 18C22.3137 18 25 20.6863 25 24C25 27.3137 22.3137 30 19 30Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 22V25H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const myPageIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path d="M10.9355 10.6666V10.1666H10.8262L10.7268 10.2123L10.9355 10.6666ZM6.53115 10.6666L6.73912 10.2119L6.64007 10.1666H6.53115V10.6666ZM8.73333 10.2C11.411 10.2 13.5833 8.02771 13.5833 5.35H12.5833C12.5833 7.47542 10.8588 9.2 8.73333 9.2V10.2ZM3.88333 5.35C3.88333 8.02771 6.05563 10.2 8.73333 10.2V9.2C6.60791 9.2 4.88333 7.47542 4.88333 5.35H3.88333ZM8.73333 0.5C6.05563 0.5 3.88333 2.6723 3.88333 5.35H4.88333C4.88333 3.22458 6.60791 1.5 8.73333 1.5V0.5ZM13.5833 5.35C13.5833 2.6723 11.411 0.5 8.73333 0.5V1.5C10.8588 1.5 12.5833 3.22458 12.5833 5.35H13.5833ZM12.6 10.1666H10.9355V11.1666H12.6V10.1666ZM16.9667 14.5333C16.9667 12.1214 15.0119 10.1666 12.6 10.1666V11.1666C14.4596 11.1666 15.9667 12.6737 15.9667 14.5333H16.9667ZM16.9667 15.0166V14.5333H15.9667V15.0166H16.9667ZM15.0167 16.9666C16.0933 16.9666 16.9667 16.0933 16.9667 15.0166H15.9667C15.9667 15.541 15.541 15.9666 15.0167 15.9666V16.9666ZM2.45 16.9666H15.0167V15.9666H2.45V16.9666ZM0.5 15.0166C0.5 16.0933 1.37334 16.9666 2.45 16.9666V15.9666C1.92562 15.9666 1.5 15.541 1.5 15.0166H0.5ZM0.5 14.5333V15.0166H1.5V14.5333H0.5ZM4.86667 10.1666C2.4548 10.1666 0.5 12.1214 0.5 14.5333H1.5C1.5 12.6737 3.00708 11.1666 4.86667 11.1666V10.1666ZM6.53115 10.1666H4.86667V11.1666H6.53115V10.1666ZM8.73333 10.65C8.02338 10.65 7.35094 10.4918 6.73912 10.2119L6.32317 11.1213C7.05864 11.4577 7.87245 11.65 8.73333 11.65V10.65ZM10.7268 10.2123C10.1189 10.4916 9.44371 10.65 8.73333 10.65V11.65C9.59379 11.65 10.4109 11.4579 11.1443 11.121L10.7268 10.2123Z" stroke="white" stroke-width="1"/>
</svg>`;

const chatIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <path d="M4.63647 3.90906H13.3637" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.07692 1H13.9231C15.6462 1 17 2.33333 17 4.0303V9.18182C17 10.8788 15.6462 12.2121 13.9231 12.2121H11.4615L9 15.5455L6.53846 12.2121H3.03077C1.92308 12.2121 1 11.303 1 10.2121V4.0303C1 2.33333 2.35385 1 4.07692 1Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.63647 6.09094H13.3637" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.63647 9H9.00011" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const profileIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 12C13.0609 12 14.0783 11.5786 14.8284 10.8284C15.5786 10.0783 16 9.06087 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.9999 17.28C21.9998 17.8817 21.7618 18.459 21.3379 18.886C20.3619 19.87 19.4149 20.896 18.4019 21.844C18.2887 21.9473 18.1402 22.0032 17.987 22C17.8338 21.9969 17.6877 21.9349 17.5789 21.827L14.6609 18.887C14.2365 18.4599 13.9983 17.8822 13.9983 17.28C13.9983 16.6779 14.2365 16.1002 14.6609 15.673C14.8726 15.4596 15.1244 15.2903 15.4018 15.1747C15.6793 15.0592 15.9769 14.9997 16.2774 14.9997C16.578 14.9997 16.8755 15.0592 17.153 15.1747C17.4304 15.2903 17.6822 15.4596 17.8939 15.673L17.9999 15.78L18.1059 15.673C18.4238 15.3524 18.8298 15.1335 19.2724 15.0442C19.715 14.9548 20.1742 14.9991 20.5915 15.1713C21.0089 15.3436 21.3656 15.636 21.6164 16.0115C21.8672 16.387 22.0007 16.8285 21.9999 17.28Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M5 20V19C4.99976 17.819 5.29833 16.6571 5.86794 15.6225C6.43754 14.5879 7.25965 13.7142 8.25773 13.0828C9.25582 12.4515 10.3974 12.0829 11.5763 12.0114C12.7551 11.9399 13.9329 12.1678 15 12.674" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const BottomNavBar = () => {
    const navigation = useNavigation();
  
    return (
      <View>
        {/* 중앙 버튼 */}
        <View style={styles.centerButtonWrapper}>
          <TouchableOpacity
            style={styles.centerButton}
            onPress={() => navigation.navigate("mainHome")}
          >
            <SvgXml xml={calendarIcon} width={30} height={30} />
          </TouchableOpacity>
        </View>
  
        {/* 하단 네비게이션 바 */}
        <LinearGradient
          colors={["#FD749B", "#281AC8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.wrapper}
        >
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("grading")}
            >
              <SvgXml xml={gradingIcon} width={24} height={24} />
              <Text style={styles.label}>채점받기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("loverProfile")}
            >
              <SvgXml xml={profileIcon} width={24} height={24} />
              <Text style={styles.label}>애인 프로필</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("chatting")}
            >
              <SvgXml xml={chatIcon} width={24} height={24} />
              <Text style={styles.label}>데이트 기록</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("myProfile")}
            >
              <SvgXml xml={myPageIcon} width={24} height={24} />
              <Text style={styles.label}>마이페이지</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      height: 80, // 상자의 높이 줄이기
      position: "relative",
    },
    centerButtonWrapper: {
      position: "absolute",
      top: -40, // 버튼이 상자 위로 겹치도록 이동
      left: "50%",
      transform: [{ translateX: -40 }], // 버튼 중앙 정렬
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
      elevation: 5,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 5 },
      zIndex: 10, // 상자가 버튼 아래로 가도록 설정
    },
    centerButton: {
      backgroundColor: "#FD749B",
      width: 64,
      height: 64,
      borderRadius: 32,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height: "100%",
      paddingHorizontal: 20,
    },
    button: {
      alignItems: "center",
    },
    label: {
      color: "#FFFFFF",
      fontSize: 10,
      marginTop: 5,
      fontFamily: "Poppins",
    },
  });
  
  export default BottomNavBar;