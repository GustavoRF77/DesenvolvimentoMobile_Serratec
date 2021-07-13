import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    categoriaItem: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#ff531a',
        flexDirection: 'row',
        borderRadius: 20,

    },

    categoriaInfo: {
        margin: 0,
        padding: 0,
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
    },

    btnListarProd: {
        backgroundColor: 'transparent',
    },

    categoriaText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 0,
        padding: 0

    },

    productImage: {
        width: 100,
        height: 100,
        borderRadius: 8
    },

    productInfo: {
        marginLeft: 10,
        flex: 1,
    },

    listItemText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20

    },

    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: 400,
        borderRadius: 10,
        padding: 20,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },

    containerAct: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },

    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
    },

    listItem: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#d1d1e0',
        flexDirection: 'row',
        borderRadius: 10
    },

    productImage: {
        width: 100,
        height: 100,
        borderRadius: 8
    },

    productInfo: {
        marginLeft: 10,
        flex: 1,
        textAlign: 'center',
    },

    title: {
        flex: 1,
        fontSize: 18,
        width: 200,
        padding: 10,
        justifyContent: 'center'
    },

    btnAddCart: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#ff531a',
        borderRadius: 50,
        padding: 15

    },


});
export default styles;