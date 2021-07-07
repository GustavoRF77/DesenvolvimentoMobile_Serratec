import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const Hamburger = ({ navigation }) => {
    return (
          
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
            
        
    )
}

