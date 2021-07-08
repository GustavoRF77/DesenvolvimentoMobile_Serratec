import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';
import { deleteProduto, listarProdutos, atualizarProduto, adicionarProdutos } from '../../data/produto/produto_db'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

export const Products = () => {
    const [produtos, setProdutos] = useState(listarProdutos())
    const [data, setData] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [preco, setPreco] = useState(null);


    function deleteP(produto_id) {
        deleteProduto(produto_id)
        setData(!data)
    }

    function edit(produto_id) {
        console.log(nome, descricao, preco)
        if (nome == '' || descricao == '' || preco == '') {
            Alert.alert(
                "Erro",
                "Campo(s) vazio(s)",
                [
                    {
                        text: "Cancel",
                        onPress: () => setModalVisible(false),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
            return
        } else if ((nome == null || descricao == null || preco == null)) {
            setModalVisible(false)
            return
        }
        atualizarProduto(produto_id, nome, descricao, parseInt(preco))
        setModalVisible(false)
        setData(!data)
    }

    function salvarProduto() {
        if (nome == '' || descricao == '' || preco == '' || nome == null || descricao == null || preco == null) {
            Alert.alert(
                "Erro",
                "Campo(s) vazio(s)",
                [
                    {
                        text: "Cancel",
                        onPress: () => setModalVisible(false),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
            return
        }
        adicionarProdutos(nome, descricao, parseInt(preco))
        setModalVisible1(false)
        setData(!data)
        setNome('')
        setDescricao('')
        setPreco('')
    }

    return (
        <SafeAreaView>
            
            <FlatList
            style={{backgroundColor:'purple'}}
                data={produtos}

                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <ScrollView style={{padding: 20}}>
                            <View
                            style={{flexDirection: 'row',
                            justifyContent: 'space-between'}}>
                                <Text style={{flexDirection: 'column'}}>{item.produto_nome}</Text>
                                <Text style={{flexDirection: 'column'}}>{item.produto_descricao}</Text>
                                <Text style={{flexDirection: 'column'}}>{item.produto_preco}</Text>
                                <TouchableOpacity
                                    style={{
                                        width: 44,
                                        height: 44,
                                        
                                        top: 0,
                                        flexDirection: 'column'
                                    }}
                                    onPress={() => deleteP(item.produto_id)}>
                                    <Icon name='delete' size={20} color='black' />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        width: 44,
                                        height: 44,
                                        top: 0,
                                        flexDirection: 'column'
                                    }}
                                    onPress={() => setModalVisible(true)}>
                                    <Icon1 name='edit' size={20} color='black' />
                                </TouchableOpacity>

                                <Modal
                                    animationType="fade"
                                    visible={modalVisible}
                                >
                                    <TextInput placeholder='Nome do Produto' onChangeText={nome => setNome(nome)}  defaultValue={item.produto_nome} maxLength={20}/>
                                    <TextInput placeholder='Descrição do Produto' onChangeText={descricao => setDescricao(descricao)} defaultValue={item.produto_descricao}maxLength={20} />
                                    <TextInput placeholder='Preço do Produto' onChangeText={preco => setPreco(preco)}  defaultValue={item.produto_preco.toString()} keyboardType="number-pad"maxLength={20} />
                                    <Button title='Salvar' onPress={() => edit(item.produto_id)} />
                                    <Button title='Cancelar' onPress={() => setModalVisible(false)} />
                                </Modal>

                            </View>

                        </ScrollView>

                    )
                }}

                extraData={data} />
            <Modal
                animationType="fade"
                visible={modalVisible1}>
                <TextInput placeholder='Nome do Produto' onChangeText={nome => setNome(nome)}  maxLength={10} />
                <TextInput placeholder='Descrição do Produto' onChangeText={descricao => setDescricao(descricao)} maxLength={10} />
                <TextInput placeholder='Preço do Produto' onChangeText={preco => setPreco(preco)}  maxLength={10} keyboardType="number-pad"/>
                <Button title='Salvar' onPress={salvarProduto} />
                <Button title='Cancelar' onPress={() => setModalVisible1(false)} />
            </Modal>
            <View>
                <TouchableOpacity
                    style={{
                        
                        margin: 20,
                        marginRight: 20,
                        bottom: 0,
                        alignSelf: 'flex-end',
                        
                        
                    }}
                    onPress={() => setModalVisible1(true)}>
                    <Icon2 name='add-circle-outline' size={60} color='black' />
                </TouchableOpacity>
            </View>
           
        </SafeAreaView>
    )

}

