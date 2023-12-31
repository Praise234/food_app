import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import { useState } from "react";
import CartProvider from "./store/CartProvider.js";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartHandler = () => {
    setCartIsShown(!cartIsShown);
  } 

  return (
    <CartProvider>
    { cartIsShown && <Cart onClose = {toggleCartHandler} /> }
      <Header onToggleCart = {toggleCartHandler}  />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
