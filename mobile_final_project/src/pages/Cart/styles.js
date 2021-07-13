import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: '#00BEFE',
        justifyContent: 'center',
        alignItems: 'center'
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
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
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
    title: {
        fontSize: 18,
        width: 200,
        padding: 10
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },
    btnAddCart: {
        backgroundColor: '#fff',
    },
    txtBtn: {
        color: '#000',
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ff531a',
        borderRadius: 50,
        padding: 15

    },
    buttonContainer: {
        margin: 20
    }
})