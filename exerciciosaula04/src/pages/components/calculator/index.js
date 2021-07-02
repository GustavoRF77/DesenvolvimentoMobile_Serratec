import React, { useState, useEffect } from "react";
import { Button, View, Text, TextInput } from "react-native";
import styles from './styles'

const Calc = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [total, setTotal] = useState(0);
    const [operator, setOperator] = useState('');
    function result() {
        if (operator === "+") {
            setTotal(parseFloat(num1) + parseFloat(num2))
        } else if (operator === "-") {
            setTotal(parseFloat(num1) - parseFloat(num2))
        } else if (operator === "x") {
            setTotal(parseFloat(num1) * parseFloat(num2))
        } else {
            setTotal(parseFloat(num1) / parseFloat(num2))
        }
    }

    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.input}
                placeholder='Insira o primeiro numero'
                keyboardType='numeric'
                onChangeText={(text) => setNum1(text)}
                value={num1}
            />
            <View style = {styles.botao}>
                <Button onPress={() => setOperator("+")} title="  +  " />
                <Button onPress={() => setOperator("-")} title="  -  " />
                <Button onPress={() => setOperator("x")} title="  x  " />
                <Button onPress={() => setOperator("/")} title="  /  " />
            </View>
            <TextInput
                style = {styles.input}
                placeholder='Insira o segundo numero'
                keyboardType='numeric'
                onChangeText={(text) => setNum2(text)}
                value={num2}
            />
            <View style = {styles.equalButton}>
                <Button onPress={result} title="=" />
            </View>
            <Text style = {styles.num}>{total}</Text>
        </View>
    )
}

export default Calc