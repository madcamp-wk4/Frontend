import React from 'react';
import { View, Image, Text, Button} from 'react-native';

const CreatedAccount = ({ navigation }) => {

    return (

        <View>

            <Image source={"../assets/"}>

            </Image>
           <Button title="시작하기" onPress={() => navigation.navigate('mainHome')} />

            <Text>
                계정 생성 완료!!
            </Text>

            <Text>
                위 앱은 행복한 연애를 위하여 만들었습니다. 
                불순한 의도로 사용하시면 안됩니다:D
            </Text> 

        </View>
        
    );
};

export default CreatedAccount;