import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export const Home = ({navigation}) => {

    return (
        <View>
            <TouchableOpacity
                style={{
                    width: 44,
                    height: 44,
                    margin: 20,
                    top: 0
                }}
                onPress={() => navigation.openDrawer()}>
                <Icon name='menu' size={20} color='black' />
            </TouchableOpacity>
            <Text>
                Essa é a página Home
            </Text>
        </View>

    )
}