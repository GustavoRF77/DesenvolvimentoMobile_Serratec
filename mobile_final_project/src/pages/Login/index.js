import * as React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, TouchableOpacity, TextInput, Switch, Modal, Alert } from 'react-native';
import { adicionarLogins, listarLogins } from '../../data/produto/login_db';
import { styles } from './styles';
import { CartContext } from '../../context/CartProvider';

export const Login = ({ navigation }) => {
    const [passwd, setPasswd] = React.useState(true)
    const [modalVisible, setModalVisible] = React.useState(false);
    const [senha, setSenha] = React.useState(null);
    const [senha0, setSenha0] = React.useState(null);
    const [senha1, setSenha1] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [email1, setEmail1] = React.useState(null);
    const [erro, setErro] = React.useState(false);
    const [erro1, setErro1] = React.useState(false);
    const { login, log } = React.useContext(CartContext)


    function salvarLogin() {
        if (senha0 == '' || email1 == '' || senha1 == '' || senha0 == null || email1 == null || senha1 == null) {
            Alert.alert(
                "Erro",
                "Há Campo(s) vazio(s)",
                [

                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
            setErro1(true)
            return
        }
        if (senha0 == senha1) {
            if (adicionarLogins(email1, senha1) == true) {
                Alert.alert(
                    "Erro",
                    "Email já existente",
                    [

                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
                setSenha0('')
                setSenha1('')
                setErro1(true)
                return
            } else {
                setEmail1('')
                setSenha0('')
                setSenha1('')
                setErro1(false)
                setModalVisible(false)
                Alert.alert(
                    "Sucesso",
                    "Cadastro Realizado Com Sucesso",
                    [

                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );

            }

        } else {
            Alert.alert(
                "Erro",
                "Senhas não batem",
                [

                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
            setSenha0('')
            setSenha1('')
            setErro1(true)
            return
        }
    }
    function verificarLogin() {

        if (listarLogins(email, senha) === true) {
            login(true)
            Alert.alert(
                "Correto",
                "Login Correto",
                [
                    { text: "OK", onPress: () => navigation.navigate('Home') }
                ]
            );




            return
        } else {
            Alert.alert(
                "Erro",
                "Login Errado",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
            setErro(true)
            setSenha('')

            return
        }

    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Faça seu Login Aqui!</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.input_container}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={erro ? 'red' : 'gray'}
                        style={[styles.textInput, erro ? styles.actionError : styles.errorMsg]}
                        onChangeText={email => { setEmail(email), setErro(false) }} value={email != '' ? email : ''} />
                </View>
                <View style={styles.input_container}>
                    <TextInput placeholder="Password"
                        placeholderTextColor={erro ? 'red' : 'gray'}
                        style={[styles.textInput, erro ? styles.actionError : styles.errorMsg]}
                        secureTextEntry={passwd}
                        onChangeText={senha => { setSenha(senha), setErro(false) }}
                        value={senha != '' ? senha : ''}
                    />
                </View>
                <View style={styles.switch_container}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#ff531a" }}
                        thumbColor={passwd ? "#fff" : "orange"}
                        ios_backgroundColor="#3e3e3e"
                        onChange={() => setPasswd(!passwd)}
                        value={!passwd}
                    />
                    <Text>{passwd ? "Mostrar Senha" : "Esconder Senha"}</Text>
                </View>

                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => { verificarLogin() }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signup_container}>
                    <TouchableOpacity onPress={() => { setModalVisible(!modalVisible), setErro(false), setEmail(''), setSenha('') }}><Text>Não tem login? Cadastre-se</Text></TouchableOpacity>
                </View>

                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text>Continuar sem Logar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="fade"
                visible={modalVisible}
            >
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text_header}>Faça seu Cadastro Aqui!</Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.input_container}>
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor={erro1 ? 'red' : 'gray'}
                                style={[styles.textInput, erro1 ? styles.actionError : styles.errorMsg]}
                                onChangeText={email => { setEmail1(email), setErro1(false) }} value={email1 != '' ? email1 : ''} />
                        </View>
                        <View style={styles.input_container}>
                            <TextInput placeholder="Password"
                                placeholderTextColor={erro1 ? 'red' : 'gray'}
                                style={[styles.textInput, erro1 ? styles.actionError : styles.errorMsg]}
                                secureTextEntry={passwd}
                                onChangeText={senha => { setSenha0(senha), setErro1(false) }}
                                value={senha0 != '' ? senha0 : ''}
                            />
                        </View>

                        <View style={styles.input_container}>
                            <TextInput placeholder="Password"
                                placeholderTextColor={erro1 ? 'red' : 'gray'}
                                style={[styles.textInput, erro1 ? styles.actionError : styles.errorMsg]}
                                secureTextEntry={passwd}
                                onChangeText={senha => { setSenha1(senha), setErro1(false) }}
                                value={senha1 != '' ? senha1 : ''}
                            />
                        </View>
                        <View style={styles.switch_container}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#000" }}
                                thumbColor={passwd ? "#fff" : "orange"}
                                ios_backgroundColor="#3e3e3e"
                                onChange={() => setPasswd(!passwd)}
                                value={!passwd}
                            />
                            <Text>{passwd ? "Mostrar Senhas" : "Esconder Senhas"}</Text>
                        </View>

                        <View style={styles.button_container}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => salvarLogin()}>
                                <Text>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button_container}>
                            <TouchableOpacity onPress={() => { setModalVisible(!modalVisible), setErro1(false), setEmail1(''), setSenha0(''), setSenha1('') }} style={styles.button}><Text>Cancelar</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        </View >
    )
}

