import React from 'react'
import { SafeAreaView } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const guide1 = () => {



    return (
        <SafeAreaView>

            <View>
                <Image source={require('../assets/flowers.svg')}>
                </Image>
            </View>

            <View>
                <Text>
                    기억하고 싶은 순간을 <br/>
                    기록하고 평가하세요! 
                </Text>
            </View>

            <View>
                소중한 데이터 경험을 기록하고, 서로의 취향을 <br/> 알아가며 더욱 깊이 있는 관계를 만들어보세요!
            </View>

            <View>
                <Image source={require('../assets/Group-step1.svg')}>

                </Image>
            </View>
        </SafeAreaView>
    );


    const styles = StyleSheet.create({

    }

    )
};