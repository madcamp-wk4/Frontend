import AsyncStorage from '@react-native-async-storage/async-storage';

const GetLoggedInUser = async () => {
    try {
        const userData = await AsyncStorage.getItem('loggedInUser'); // 저장된 사용자 정보 가져오기
        if (userData) {
            const user = JSON.parse(userData); // JSON 문자열을 객체로 변환
            return user; // 사용자 정보 반환
        }
        return null; // 로그인된 사용자 정보가 없으면 null 반환
    } catch (error) {
        console.error('Failed to get logged-in user:', error);
        return null; // 에러가 발생하면 null 반환
    }
};
export default GetLoggedInUser;