import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { listarProdutos } from '../../data/produto/produto_db'

export const Products = () => {
    const[produtos, setProdutos] = useState(listarProdutos())
    return (
        <SafeAreaView>
            <FlatList 
            data={produtos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
                return(
                    <View>
                        <Text>{produtos.produto_nome}</Text>
                        <Text>{produtos.produto_descricao}</Text>
                        <Text>{produtos.produto_preco}</Text>
                    </View>
                )
            }}

            />
        </SafeAreaView>
    )
}

