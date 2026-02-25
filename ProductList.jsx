import axios from "axios";
import { useState , useEffect} from "react";

function ProductList({addToCart, cart})
{
    const products=[{name: "Cake",price:250},
        {name:"Brownie",price:120},
        {name:"Cup Cakes",price:80},
        {name:"Crossiant",price:100},
        {name:"Jar Cake/Mug Cake",price:150}
    ];
    return(
        <div className="product-box">
            <h2 style={{backgroundColor:"gray" }}>
                Our products
            </h2>
            <div className="product-card">

              {products.map((item,index)=>(
                <div className="product" key={index}>
                    <p>{item.name} : ${item.price} <button onClick={()=>addToCart([...cart,item])}>Add to Cart</button> </p> 
               
               </div>
               
              ))}</div>
              
        </div>
    );
}
export default ProductList;
