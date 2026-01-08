
import React from "react";
import "../../assets/styles/cart.css";

const CartCard = ({ cart, onUpdate, onRemove }) => {
  const product = cart.product || {};
  const productImage = product.product_image || "/placeholder.jpg";
  const productName = product.product_name || "Unknown Product";
  const productPrice = product.price || 0;

  return (
    <div className="cart-card">
      <img 
        src={productImage} 
        alt={productName}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder.jpg";
        }}
      />

      <div className="cart-info">
        <h4>{productName}</h4>
        <p className="cart-price">₹ {productPrice}</p>
        <p>Qty: {cart.quantity}</p>
        <p className="cart-subtotal">Subtotal: ₹ {(productPrice * cart.quantity).toFixed(2)}</p>

        <div className="cart-actions">
          <button
            className="btn-add"
            onClick={() => onUpdate(cart.id, cart.quantity + 1)}
          >
            +
          </button>

          <button
            className="btn-remove"
            onClick={() => onRemove(cart.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
