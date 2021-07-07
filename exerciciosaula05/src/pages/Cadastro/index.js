import React from 'react';
import { TextInput, View, Button } from 'react-native';


export function Cadastro () {
    return(
        <View>
            <TextInput placeholder = 'Nome do Produto'/>
            <TextInput placeholder = 'Descrição do Produto'/>
            <TextInput placeholder = 'Preço do Produto'/>
            <Button title = 'Salvar'/>
        </View>
    );
}