import React, { useEffect, useState, useContext } from 'react';
import {
    Image,
    Text,
    View,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity, Button
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import {CartContext} from '../../context/CartProvider';

import styles from './styles';



export const Home = () => {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { cart, addItem, removeItem, clearCart, count } = useContext(CartContext)
    const [quantidadeTotal, setQuantidadeTotal] = useState(0)
    const [cartItems, setCartItems] = useState(0);



    useEffect(() => {
        getProdutos();
    }, []);

    getProdutos = () => {
        setIsLoading(true);
        axios.get('https://residencia-ecommerce.herokuapp.com/produto')
            .then((response) => {
                //console.log(response.data);
                setProdutos(response.data);
                setIsLoading(false);
            }).catch(function (error) {
                console.log(error);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        var soma = cart.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.quantidade;
        }, 0);
        setQuantidadeTotal(soma)
        
    }, [cartItems])

    function countCart(nome, descricao, preco, url) {
        count()
        setCartItems(cartItems + 1)
        addItem(nome, descricao, preco, url)
    }

    return (
        <SafeAreaView>
            {(isLoading) ?
                <View style={styles.containerAct}>
                    <ActivityIndicator size="large" color="#5500dc" />
                </View>
                :
                <FlatList
                    data={produtos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.listItem}>
                                <Image
                                    source={{ uri: item.url }}
                                    style={styles.productImage}
                                />
                                <View style={styles.productInfo}>
                                    <Text style={styles.listItemText}>{item.nome}</Text>
                                </View>
                                <View style={styles.productInfo}>
                                    <Text style={styles.listItemText}>R$ {item.valorUnitario}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={styles.btnAddCart}
                                        onPress={() => { countCart(item.nome, item.descricao, item.valorUnitario, item.url) }}
                                    >
                                        <Icon name="add-circle-outline" type="ionicon" size={36} color='#ff531a' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
            }
        </SafeAreaView>
    );
};

