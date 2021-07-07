import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


function Feed({ navigation }) {
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
        </View>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Feed' component={Feed} />
            <Drawer.Screen name='Cadastro' component={Cadastro} />
        </Drawer.Navigator>
    );
}

function MyTabs() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Settings" component={Cadastro} />
        </Drawer.Navigator>
    );
}

export default function App({ }) {
    return (
        <NavigationContainer>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>,
            <NavigationContainer>
                <MyDrawer />
            </NavigationContainer>
        </NavigationContainer>
    );
}