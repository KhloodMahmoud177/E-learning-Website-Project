import React from "react";
import { useCart } from "../../statestore/CartContext"; // Import useCart
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>{item.title}</div>
                  <div>{item.price} LE</div>
                  <div>Quantity: {item.quantity}</div>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <Button variant="danger" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;