import React, { useEffect, useState, useContext } from 'react';
import {
    Image,
    Text,
    View,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity, Alert
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { CartContext } from '../../context/CartProvider';
import { adicionarFavoritos, deleteFavorito, listarFavoritos } from '../../data/favoritos_db';
import Icon2 from 'react-native-vector-icons/AntDesign';

import styles from './styles';



export const Home = ({ navigation }) => {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { cart, addItem, removeItem, clearCart, count, count4 } = useContext(CartContext)
    const [quantidadeTotal, setQuantidadeTotal] = useState(0)
    const [cartItems, setCartItems] = useState(0);
    const [favorite, setFavorite] = useState(0);
    const [arrayteste, setArrayteste] = useState(listarFavoritos);


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

    function teste(nome, descricao, valorUnitario, url, id, item) {
        var teste = 0;
        console.log(arrayteste.length);
        if (arrayteste.length == 0) {
            console.log('aqui1');
            adicionarFavoritos(nome, descricao, valorUnitario, id, url);
            Alert.alert(
                "Produto Adicionado",
                "Produto adicionado aos favoritos",
                [
                    { text: "OK", onPress: () => { teste = 0, console.log(teste) } }
                    ,
                    { text: "Ir para Favoritos", onPress: () => { teste = 0, navigation.navigate('Favoritos') } }
                ]
            );
            return
        }
        arrayteste.map(produto => {
            if (produto.favorito_id == id) {
                console.log('aqui2');
                teste += 1;
                deleteFavorito(id);
                Alert.alert(
                    "Produto Removido",
                    "Produto removido dos favoritos",
                    [
                        { text: "OK", onPress: () => { teste = 0, console.log(teste) } }
                        ,
                        { text: "Ir para Favoritos", onPress: () => { teste = 0, navigation.navigate('Favoritos') } }
                    ]
                );
            }
        })
        if (teste === 0) {
            console.log('aqui3');
            adicionarFavoritos(nome, descricao, valorUnitario, id, url);
            Alert.alert(
                "Produto Adicionado",
                "Produto adicionado aos favoritos",
                [
                    { text: "OK", onPress: () => { teste = 0, console.log(teste) } }
                    ,
                    { text: "Ir para Favoritos", onPress: () => { teste = 0, navigation.navigate('Favoritos') } }
                ]
            );
            return
        }
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
                                    <TouchableOpacity
                                        style={styles.btnAddCart}
                                        onPress={() => { teste(item.nome, item.descricao, item.valorUnitario.toString(), item.url, item.id, item), count4() }}
                                    >
                                        <Icon2 name="star" size={36} color='#ff531a' />
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

