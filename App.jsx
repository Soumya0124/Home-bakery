import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)
  const[cart,setCart]=useState([]);
  const total=cart.reduce((sum,item)=>sum+item.price,0);
  const [showCart, setShowCart]=useState(false);


  return (
    
   <div className="app">
    <div className='products'>
      <div className="navbar">
        <span>Home Bakery</span>
        <span>Products</span>
        <span className='nav-cart' onClick={()=>setShowCart(!showCart)}>Cart ({cart.length})</span>
      </div>
      
      <h1>Home Bakery</h1>
      <p style={{fontFamily:'cursive'}}> Freshly baked with love!!!!!</p>
      <ProductList addToCart={setCart} cart={cart} />
      {showCart &&(
      <div className="cart">
      <h3>Cart Items:{cart.length}</h3>
      <ul>
        {cart.map((item,index)=>(
          <li key={index}>{item.name}-${item.price}</li>
        ))
          
        }
      </ul>
      <h3>Total : {total} </h3>
    
    </div>
      )}</div>
    </div>
  );
}

export default App;
