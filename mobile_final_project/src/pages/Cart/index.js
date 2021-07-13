import React, { useState, useContext, useEffect } from "react";
import { CartContext } from '../../context/CartProvider'
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";

export function Cart({ navigation }) {


    const { cart, removeItem, clearCart, log, count } = useContext(CartContext)
    const [total, setTotal] = useState(0);

    useEffect(() => {
        var soma = cart.reduce(function (accumulator, currentValue) {
            return accumulator + (currentValue.preco * currentValue.quantidade);
        }, 0);
        setTotal(soma)
    }, [cart])
    useEffect(() => {

    }, [count])


    return (

        <SafeAreaView>
            <ScrollView>
                <FlatList
                    data={cart}
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
                                    <Text style={styles.listItemText}>R$ {item.preco}</Text>
                                </View>
                                <View style={styles.productInfo}>
                                    <Text style={styles.listItemText}>{item.quantidade}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={styles.btnAddCart}
                                        onPress={() => { removeItem(item.nome) }}
                                    >
                                        <Icon name="delete" type="ionicon" size={36} color='black' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />


                <View>
                    <Card containerStyle={
                        styles.productInfo
                    }>
                        <Card.Title>Total</Card.Title>
                        <Card.Divider />
                        <Text style={{
                            textAlign: 'center'
                        }}>Total: R$ {total}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => clearCart()}>
                            <Text>Limpar Carrinho</Text>
                        </TouchableOpacity>
                    </Card>
                    <View style={ styles.buttonContainer }>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { log ? navigation.navigate('Home') : navigation.navigate('Login') }}>
                            <Text>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>



    )
}