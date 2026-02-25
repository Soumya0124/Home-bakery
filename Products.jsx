 import { useState,useEffect } from "react";
 import axios from "axios";
// ALL PRODUCTS - Edit names, prices here
const productsData = [
  { 
    id: 1, 
    name: "Artisan Sourdough", 
    price: 280, 
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&q=80", 
    description: "Traditional sourdough with crispy crust" 
  },
  { 
    id: 2, 
    name: "Belgian Chocolate Cake", 
    price: 450, 
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80", 
    description: "Rich dark chocolate layered cake" 
  },
  { 
    id: 3, 
    name: "French Croissant", 
    price: 120, 
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80", 
    description: "Buttery, flaky, authentic croissant" 
  },
  { 
    id: 4, 
    name: "Gourmet Cupcakes", 
    price: 95, 
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&q=80", 
    description: "Assorted premium flavored cupcakes" 
  },
  { 
    id: 5, 
    name: "Tiramisu Jar Cake", 
    price: 180, 
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80", 
    description: "Classic Italian dessert in a jar" 
  },
  { 
    id: 6, 
    name: "Artisan Cookies", 
    price: 110, 
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80", 
    description: "Handcrafted gourmet cookies" 
  },
  { 
    id: 7, 
    name: "Glazed Donuts", 
    price: 130, 
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80", 
    description: "Fresh glazed ring donuts" 
  },
  { 
    id: 8, 
    name: "Fudge Brownies", 
    price: 140, 
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&q=80", 
    description: "Dense, rich chocolate brownies" 
  }
];

function Products({ addToCart, cart, updateQuantity }) {
  const [notification, setNotification] = useState("");

  // Check quantity in cart
  const getCartQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  // Add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(""), 2000);
  };

  // Increase quantity
  const handleIncrement = (product) => {
    const quantity = getCartQuantity(product.id);
    updateQuantity(product.id, quantity + 1);
  };

  // Decrease quantity
  const handleDecrement = (product) => {
    const quantity = getCartQuantity(product.id);
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1);
    }
  };
  useEffect(() => {
  axios
    .get("http://localhost:3000/api/products")
    .then((response) => {
      setProducts(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      setLoading(false);
      // Optional: alert("Couldn't load products – check backend!");
    });
}, []);

  return (
    <div className="products-page">
      <h1>Our Premium Collection</h1>
      
      {notification && (
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '20px',
          background: '#27ae60',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '8px',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          animation: 'fadeIn 0.3s'
        }}>
          {notification}
        </div>
      )}

      <div className="product-grid">
         {productsData.map((product) => {
          const cartQty = getCartQuantity(product.id);
          
          return (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">₹{product.price}</div>
                
                {cartQty === 0 ? (
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleDecrement(product)}
                    >
                      -
                    </button>
                    <span className="quantity">{cartQty}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => handleIncrement(product)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products; 
