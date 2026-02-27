import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); // Allows your frontend (localhost:5173) to talk to backend
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Artisan Sourdough",
    price: 280,
    description: "Traditional sourdough with crispy crust",
    image: "sourdougyh.webp" // or leave empty if using local images
  },
  {
    id: 2,
    name: "Belgian Chocolate Cake",
    price: 450,
    description: "Rich dark chocolate layered cake",
    image: "your-cake-image-url"
  },
  {
    id: 3,
    name: "French Croissant",
    price: 120,
    description: "Buttery, flaky, authentic croissant",
    image: "your-croissant-image"
  },
  {
    id: 4,
    name: "Fudge Brownies",
    price: 140,
    description: "Gooey chocolate fudge brownies",
    image: ""
  },
  {
    id: 5,
    name: "Gourmet Cupckaes",
    price: 95,
    description: "Assorted premium flavored cupcakes",
    image: "your-croissant-image"
  },
  
  {
    id: 6,
    name: "Tiramisu Jar Cake",
    price: 180,
    description: "Classic Italian dessert in a jar",
    image: "your-muffin-image"
  },
  
  {
    id: 7,
    name: "Artisan Cookies",
    price: 110,
    description: "Handcrafted gourmet cookies",
    image: "your-muffin-image"
  },
  {
    id: 8,
    name: "Glazed Donuts",
    price: 130,
    description: "Fresh glazed ring donuts",
    image: "your-muffin-image"
  },
  



];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/checkout', (req, res) => {
  const cart= req.body.cart; 
  console.log('New order received:', cart);
  res.json({ success:true,message:
    'Order placed successfully! 💕' }); 
});

const PORT= process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);

});
