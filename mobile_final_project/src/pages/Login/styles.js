import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff531a'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: '#ff531a'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    input_container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    actionError: {
        borderColor: 'red'
    },
    textInput: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 0,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#05375a',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 50,
    },
    errorMsg: {
        borderColor: 'black',
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ff531a',
        borderRadius: 50,
        padding: 15

    },
    button_container: {
        marginTop: 20,

    },
    switch_container: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
    },
    signup_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10
    }
});