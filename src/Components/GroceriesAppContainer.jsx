import { useState } from "react";
import products from "../data/products";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";

const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existProduct = cart.find((item) => item.id === product.id);
    if (existProduct) {
      setCart((previousCart) =>
        previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div>
      <NavBar cart={cart} />
      <div>
        <ProductsContainer products={products} addToCart={addToCart} />
        <CartContainer
          cart={cart}
          removeCart={removeCart}
          emptyCart={emptyCart}
        />
      </div>
    </div>
  );
};

export default GroceriesAppContainer;
