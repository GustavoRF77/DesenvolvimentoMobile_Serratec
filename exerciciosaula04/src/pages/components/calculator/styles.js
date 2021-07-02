import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20
    },

    num: {
        textAlign: 'center',
        fontSize: 100,
        fontWeight: 'bold',
        color: 'orange'

    },

    botao: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 30
    },

    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },

    equalButton: {
        marginTop: 10
    }
})

export default styles;