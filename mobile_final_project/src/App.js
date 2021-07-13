import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './context/CartProvider';
import { DrawerNavigation } from './navigation'

function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <DrawerNavigation />
      </CartProvider>
    </NavigationContainer>
  );
}

export default App;