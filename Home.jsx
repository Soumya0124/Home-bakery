import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate()
    return(
        <div className="home">
            <div className="hero">
            <h1>Artisan Bakery & Patisserie</h1>
            <p>Handcrafted with premium ingredients, baked fresh daily</p>
            <button onClick={()=>navigate('/products')}>Explore Our Collection</button>
            </div>
             <div className="features">
        <div className="feature-card">
          <span>🥖</span>
          <h3>Artisan Quality</h3>
          <p>Traditional recipes perfected over generations, using only the finest organic ingredients</p>
        </div>
        <div className="feature-card">
          <span>⏰</span>
          <h3>Fresh Daily</h3>
          <p>Baked fresh every morning at 5 AM to ensure maximum freshness and flavor</p>
        </div>
        <div className="feature-card">
          <span>🚚</span>
          <h3>Express Delivery</h3>
          <p>Same-day delivery available for orders placed before 2 PM in your area</p>
        </div>
      </div>

      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"The best croissants I've ever had! Flaky, buttery, and absolutely delicious. I order every week!"</p>
            <h4>- Priya Sharma</h4>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Their chocolate cake is heavenly! Perfect for celebrations. The quality is consistently amazing."</p>
            <h4>- Rahul Verma</h4>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Fresh, delicious, and delivered on time. The sourdough bread is my family's favorite!"</p>
            <h4>- Anita Desai</h4>
          </div>
        </div>
      </div>

      <div className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <span className="icon">📍</span>
            <h3>Visit Us</h3>
            <p>123 Bakery Street</p>
            <p>Mumbai, Maharashtra 400001</p>
          </div>
          <div className="contact-info">
            <span className="icon">📞</span>
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
            <p>Mon-Sat: 7AM - 8PM</p>
          </div>
          <div className="contact-info">
            <span className="icon">✉️</span>
            <h3>Email Us</h3>
            <p>info@artisanbakery.com</p>
            <p>orders@artisanbakery.com</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>© 2024 Artisan Bakery. All rights reserved.</p>
      </div>
        </div>
    )
}
export default Home;