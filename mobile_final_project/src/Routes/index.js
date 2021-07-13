import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CartStackNavigation } from '../navigation';

const Stack = createStackNavigator();

export const Rotas = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={CartStackNavigation} />
        </Stack.Navigator>
    )
}