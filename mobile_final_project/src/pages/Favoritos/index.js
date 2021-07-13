import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from './styles';
import {
    listarFavoritos,
    adicionarFavoritos,
    deleteFavorito
} from '../../data/favoritos_db'
import { CartContext } from '../../context/CartProvider';
import { Icon } from 'react-native-elements';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

export const Favoritos = () => {
    const [favorito, setFavorito] = useState(listarFavoritos())
    const { cart, addItem, removeItem, clearCart, count, count3 } = useContext(CartContext)
    const [quantidadeTotal, setQuantidadeTotal] = useState(0)
    const [cartItems, setCartItems] = useState(0);
    const [favorite, setFavorite] = useState(0);
    const [state, setState] = useState(0);
    
    useEffect(() => {

    }, [favorito.length])
    
    useEffect(() => {
        var soma = cart.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.quantidade;
        }, 0);
        setQuantidadeTotal(soma)

    }, [cartItems])

    useEffect(() => {
        
    }, [count3])


    function countCart(nome, descricao, preco, url) {
        count()
        setCartItems(cartItems + 1)
        addItem(nome, descricao, preco, url)
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <FlatList
                    data={favorito}
                    extraData={favorito}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.listItem}>
                                <Image
                                    source={{ uri: item.favorito_url }}
                                    style={styles.productImage}
                                />
                                <View style={styles.productInfo}>
                                    <Text style={styles.listItemText}>{item.favorito_nome}</Text>
                                </View>
                                <View style={styles.productInfo}>
                                    <Text style={styles.listItemText}>R$ {item.favorito_preco}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={styles.btnAddCart}
                                        onPress={() => { countCart(item.favorito_nome, item.favorito_descricao, item.favorito_preco, item.favorito_url) }}
                                    >
                                        <Icon name="add-circle-outline" type="ionicon" size={36} color='#ff531a' />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.btnAddCart}
                                        onPress={() => { setFavorite(favorite + 1), deleteFavorito(item.favorito_id) }}
                                    >
                                        <Icon2 name="star" size={36} color='#ff531a' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
            </ScrollView>
        </SafeAreaView>

    )
}