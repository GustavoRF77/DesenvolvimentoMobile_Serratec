import React from 'react';
import { View, Text, Button } from 'react-native';
import { useState } from 'react';
import styles from './styles';

const Count = () => {
    const [count, setCount] = useState(0);
    const adicionar =  () => {
        setCount(count + 1);
    }
    const retirar =  () => {
        setCount(count - 1);
    } 
    return (
        <View style = {styles.container}>
            <Text style = {styles.num}>
                {count}
            </Text>
            <View style = {styles.botao}>
                <Button  color = 'purple' title = '+' onPress={adicionar}/>
            </View>
            <View style = {styles.botao}>
                <Button  color = 'purple' title = '-' onPress={retirar}/>
            </View>
        </View>
    );
};

export default Count;