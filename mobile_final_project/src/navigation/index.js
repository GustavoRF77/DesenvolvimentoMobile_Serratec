import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Feather';
import { CartContext } from '../context/CartProvider';
import { Cart } from '../pages/Cart';
import { styles } from '../pages/Cart/styles';
import { Categoria } from '../pages/Categoria';
import { Favoritos } from '../pages/Favoritos';
import { Checkout } from '../pages/Checkout';



const HomeStack = createStackNavigator();
function HomeStackNavigation({ navigation }) {
    const { cart } = React.useContext(CartContext)
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ff531a",
                },
                headerTintColor: "black",
                headerBackTitle: "Back",
                headerTitleAlign: 'center',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon1 name='shoppingcart' size={20} color='black' />
                        <Text>{cart.length}</Text>
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ margin: 10, marginLeft: 17 }}>
                        <Icon2 name='menu' size={20} color='black' />
                    </TouchableOpacity>
                )
            }}>
            <HomeStack.Screen
                options={{ headerShown: true }}
                name="Home"
                component={Home}
            />
        </HomeStack.Navigator>
    );
}

export const CartStack = createStackNavigator();
function CartStackNavigation({ navigation }) {
    const { cart } = React.useContext(CartContext)
    return (
        <CartStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ff531a",
                },
                headerTintColor: "black",
                headerBackTitle: "Back",
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ margin: 10, marginLeft: 17 }}>
                        <Icon2 name='menu' size={20} color='black' />

                    </TouchableOpacity>
                )
            }}>
            <CartStack.Screen
                options={{ headerShown: true }}
                name="Carrinho"
                component={Cart}
            />
        </CartStack.Navigator>
    );
}

export const CategoryStack = createStackNavigator();
function CategoryStackNavigation({ navigation }) {
    const { cart } = React.useContext(CartContext)
    return (
        <CategoryStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ff531a",
                },
                headerTintColor: "black",
                headerBackTitle: "Back",
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ margin: 10, marginLeft: 17 }}>
                        <Icon2 name='menu' size={20} color='black' />

                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon1 name='shoppingcart' size={20} color='black' />
                        <Text>{cart.length}</Text>
                    </TouchableOpacity>
                )
            }}>
            <CategoryStack.Screen
                options={{ headerShown: true }}
                name="Categorias"
                component={Categoria}
            />
        </CategoryStack.Navigator>
    );
}

export const FavoriteStack = createStackNavigator();
function FavoriteStackNavigation({ navigation }) {
    const { cart } = React.useContext(CartContext)
    return (
        <FavoriteStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ff531a",
                },
                headerTintColor: "black",
                headerBackTitle: "Back",
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ margin: 10, marginLeft: 17 }}>
                        <Icon2 name='menu' size={20} color='black' />

                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon1 name='shoppingcart' size={20} color='black' />
                        <Text>{cart.length}</Text>
                    </TouchableOpacity>
                )
            }}>
            <FavoriteStack.Screen
                options={{ headerShown: true }}
                name="Favoritos"
                component={Favoritos}
            />
        </FavoriteStack.Navigator>
    );
}

const NavegacaoDrawer = createDrawerNavigator();
export const DrawerNavigation = () => {
    const { log } = React.useContext(CartContext)
    return (
        <NavegacaoDrawer.Navigator drawerStyle={{
            backgroundColor: '#ffece6',
        }} 
        drawerContentOptions= {{
            activeTintColor: '#ff531a'
        }}
        >
            <NavegacaoDrawer.Screen name="Home" component={HomeStackNavigation} />
            <NavegacaoDrawer.Screen name="Categoria" component={CategoryStackNavigation} />
            <NavegacaoDrawer.Screen name="Favoritos" component={FavoriteStackNavigation} />
            <NavegacaoDrawer.Screen name="Cart" component={CartStackNavigation} />
            <NavegacaoDrawer.Screen name="Login" component={Login} options={{drawerIcon: config => <Icon3 name={log ? 'log-out' : 'log-in'} size={20} color='black' />, title: log ? 'Logout' : 'Login'}}/> 
            <NavegacaoDrawer.Screen name="Checkout" component={Checkout} options={{drawerLabel: config => null}}/>
        </NavegacaoDrawer.Navigator>
    );
}

