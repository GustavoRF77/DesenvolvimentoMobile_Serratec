import React, { useState } from 'react';
import { TextInput, View, Button, TouchableOpacity } from 'react-native';
import { adicionarProdutos } from '../../data/produto/produto_db'
import Icon from 'react-native-vector-icons/SimpleLineIcons';




export function Cadastro({ navigation }) {
    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [preco, setPreco] = useState(null);

    function salvarProduto() {
        adicionarProdutos(nome, descricao, parseInt(preco))
    }

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
            <TextInput placeholder='Nome do Produto' onChangeText={nome => setNome(nome)} value={nome} />
            <TextInput placeholder='Descrição do Produto' onChangeText={descricao => setDescricao(descricao)} value={descricao} />
            <TextInput placeholder='Preço do Produto' onChangeText={preco => setPreco(preco)} value={preco} />
            <Button title='Salvar' onPress={salvarProduto} />
        </View>
    );
}