import "./App.css";
// import Cart from "../src/Components/Cart";
// import Product from "./Components/Product";
import { useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: "₹100" },
  { id: 2, name: "Product 2", price: "₹200" },
  { id: 3, name: "Product 3", price: "₹300" },
];
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) => {
    setCartItems((curentCart) => [...curentCart, product]);
  };
  const removeFromCart = (productstoremove) => {
    setCartItems((curentCart) =>
      curentCart.filter((product) => product !== productstoremove)
    );
  };

  return (
    <div className="App">
      <h1>Products</h1>
     <div className="product-container">
     {products.map((product, index) => (
        <div key={index} className="productBox">
          <h2>{product.name}</h2>
          <h4>{product.price}</h4>
          <button className="addBtn" onClick={() => addProductToCart(product)}>Add to Cart</button>
        </div>
      ))}
     </div>
      <h1>Cart</h1>
     <div className="cart-container">
     {cartItems.map((product, index) => (
        <div key={index} className="cartBox">
          <h2>{product.name}</h2>
          <h4>{product.price}</h4>
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      ))}
     </div>
    </div>
  );
}

export default App;
