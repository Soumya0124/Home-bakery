import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const navigate = useNavigate();
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="cart-empty">
          <h2>🛒 Your cart is empty</h2>
          <p>Add some delicious items to get started!</p>
          <button onClick={() => navigate('/products')}>
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  
const handleCheckout = async () => {
  
  if (!cart || cart.length === 0) {
    alert("Your cart is empty! Add some yummy treats first 🧁");
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/api/checkout", {
      cart: cart  // sends your current cart array
    });

    alert("🧁 Order Placed Successfully! 🧁\n\n" +
  "Items in order: " + cart.length + "\n" +
  "Total treats: " + cart.reduce((sum, item) => sum + (item.quantity || 1), 0) + "\n\n" +
  "Thank you for choosing Artisan Bakery!\n" +
  "Your order is being freshly baked 💕\n" +
  "Order ID: " + (response.data.orderId || Date.now()));
    
    // Optional: clear the cart after success (uncomment if you want)
    // setCart([]);   // only if you have setCart in this component/context
  } catch (error) {
    console.error("Checkout failed:", error);
    alert("Oops! Something went wrong. Please try again or check if backend is running.");
  }
};

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <div className="cart-item-price">₹{item.price}</div>
            </div>
            <div className="quantity-controls">
              <button 
                className="quantity-btn"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button 
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (8%):</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <button onClick={handleCheckout} className="checkout-btn"
  style={{ 
    backgroundColor: "#4caf50", 
    color: "white", 
    padding: "12px 24px", 
    fontSize: "1.1rem", 
    border: "none", 
    borderRadius: "8px", 
    cursor: "pointer" 
  }} >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
