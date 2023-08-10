import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import { useState } from "react";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartHandler = () => {
    setCartIsShown(!cartIsShown);
  } 

  return (
    <>
    { cartIsShown && <Cart onClose = {toggleCartHandler} /> }
      <Header onToggleCart = {toggleCartHandler}  />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
