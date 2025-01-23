import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';

const HandleLogin = async ({ email, password, navigation }) => {
    try {
        const response = await axios.post('http://143.248.197.197:3000/login', {
            email,
            password,
        });

        if (response.status === 200) {
            const user = response.data.user; // 서버에서 반환된 사용자 정보
            await AsyncStorage.setItem('loggedInUser', JSON.stringify(user)); // 사용자 정보 저장
            Alert.alert('성공', response.data.message);
            navigation.navigate('mainHome'); // mainHome으로 이동
        }
    } catch (error) {
        console.error(error);
        if (error.response) {
            if (error.response.status === 401) {
                Alert.alert('실패', '이메일이 존재하지 않습니다. 회원가입을 진행해주세요.');
            } else if (error.response.status === 402) {
                Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
            } else {
                Alert.alert('실패', '로그인에 실패했습니다. 다시 시도해주세요.');
            }
        } else {
            Alert.alert('실패', '서버와 연결할 수 없습니다.');
        }
    }
};

export default HandleLogin;
