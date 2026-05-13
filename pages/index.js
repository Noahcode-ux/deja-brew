import { useState } from 'react';

const items = [
  { name: "Espresso", price: 28, cat: "coffee" },
  { name: "Flat White", price: 38, cat: "coffee" },
  { name: "Cappuccino", price: 40, cat: "coffee" },
  { name: "Iced Americano", price: 32, cat: "cold" },
  { name: "Nitro Brew", price: 50, cat: "cold" },
  { name: "Vanilla Latte", price: 45, cat: "signature" },
  { name: "Caramel Macchiato", price: 48, cat: "signature" },
  { name: "Chocolate Croissant", price: 25, cat: "snacks" },
  { name: "Blueberry Muffin", price: 22, cat: "snacks" },
  { name: "Cinnamon Roll", price: 28, cat: "snacks" },
  { name: "Butter Cookie Box", price: 30, cat: "snacks" },
  { name: "Brownie Bite", price: 18, cat: "snacks" }
];

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredItems = filter === 'all' ? items : items.filter(item => item.cat === filter);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const confirmOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    alert("Order confirmed! ☕");
    setCart([]);
  };

  return (
    <div className="container">
      <style jsx>{`
        :global(body) {
          font-family: 'DM Sans', sans-serif;
          background: radial-gradient(circle at top, #1a0a00, #0d0500);
          color: #f6f1e8;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 900px;
          margin: auto;
          padding: 24px;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          color: #e8b84b;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .logo span {
          color: #f6f1e8;
        }
        .menu-btn {
          background: #e8b84b;
          border: none;
          color: black;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: opacity 0.3s ease;
        }
        .menu-btn:hover {
          opacity: 0.8;
        }
        .about-section {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 30px;
          text-align: center;
        }
        .about-section h1 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #e8b84b;
          margin-bottom: 16px;
        }
        .slogan {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: #e8b84b;
          margin: 20px 0;
          font-style: italic;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          color: #e8b84b;
          margin-top: 28px;
          margin-bottom: 12px;
          border-bottom: 2px solid rgba(232, 184, 75, 0.3);
          padding-bottom: 8px;
        }
        .owners-list {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin: 15px 0;
        }
        .owner {
          background: rgba(232, 184, 75, 0.1);
          padding: 12px 20px;
          border-radius: 8px;
          border-left: 3px solid #e8b84b;
        }
        .owner-name {
          color: #e8b84b;
          font-weight: bold;
        }
        .owner-title {
          font-size: 0.85rem;
          color: #9a8a7a;
        }
        .location-info {
          background: rgba(232, 184, 75, 0.1);
          padding: 16px;
          border-radius: 8px;
          margin: 15px 0;
          border-left: 3px solid #e8b84b;
        }
        .info-text {
          margin: 8px 0;
          color: #f6f1e8;
          line-height: 1.5;
        }
        .goals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          margin: 15px 0;
        }
        .goal-item {
          background: rgba(0, 0, 0, 0.3);
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(232, 184, 75, 0.2);
          color: #f6f1e8;
          text-align: center;
          font-size: 0.9rem;
        }
        .target-market {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin: 15px 0;
        }
        .market-tag {
          background: #e8b84b;
          color: black;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }
        .about-section p {
          font-size: 1rem;
          line-height: 1.6;
          color: #f6f1e8;
          margin-bottom: 12px;
        }
        .tagline {
          font-style: italic;
          color: #e8b84b;
          margin-bottom: 24px;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }
        .feature {
          background: rgba(0, 0, 0, 0.3);
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(232, 184, 75, 0.2);
        }
        .feature h3 {
          color: #e8b84b;
          margin-bottom: 8px;
        }
        .feature p {
          font-size: 0.9rem;
          color: #9a8a7a;
        }
        .menu-toggle-btn {
          background: #e8b84b;
          border: none;
          color: black;
          padding: 12px 20px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: bold;
          font-size: 1rem;
          margin-bottom: 20px;
          transition: opacity 0.3s ease;
        }
        .menu-toggle-btn:hover {
          opacity: 0.8;
        }
        .menu-section {
          display: ${menuOpen ? 'block' : 'none'};
        }
        .tabs {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          margin-bottom: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .tabs button {
          background: transparent;
          border: 1px solid #9a8a7a;
          color: #9a8a7a;
          padding: 10px 16px;
          border-radius: 25px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        .tabs button:hover {
          border-color: #e8b84b;
          color: #e8b84b;
          transform: translateY(-2px);
        }
        .tabs button.active {
          background: linear-gradient(45deg, #e8b84b, #d4a43c);
          color: black;
          box-shadow: 0 4px 8px rgba(232, 184, 75, 0.3);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 20px;
        }
        .card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          text-align: center;
        }
        .card:hover {
          transform: translateY(-8px) scale(1.05);
          border-color: #e8b84b;
          box-shadow: 0 8px 20px rgba(232, 184, 75, 0.4);
        }
        .price {
          color: #e8b84b;
          margin-top: 8px;
          font-weight: 700;
          font-size: 1.1rem;
        }
        .cart {
          margin-top: 40px;
          background: rgba(0, 0, 0, 0.4);
          padding: 24px;
          border-radius: 20px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.3);
        }
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .cart-item:last-child {
          border-bottom: none;
        }
        .total {
          text-align: right;
          margin-top: 15px;
          color: #e8b84b;
          font-size: 1.3rem;
          font-weight: bold;
        }
        .order {
          width: 100%;
          margin-top: 15px;
          padding: 16px;
          border: none;
          background: linear-gradient(45deg, #e8b84b, #d4a43c);
          color: black;
          font-weight: bold;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }
        .order:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(232, 184, 75, 0.4);
        }
      `}</style>
      <header>
        <div className="header-left">
          <div className="logo">Deja <span>Brew</span></div>
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </header>

      {/* ABOUT US SECTION */}
      <div className="about-section">
        <h1>Deja Brew</h1>
        <p className="slogan">good coffee feels familiar</p>

        <p>Welcome to Deja Brew, your sanctuary for exceptional coffee and artisanal snacks in the heart of South Beach.</p>

        {/* OWNERS */}
        <div className="section-title">Meet the Owners</div>
        <div className="owners-list">
          <div className="owner">
            <div className="owner-name">Malachi</div>
          </div>
          <div className="owner">
            <div className="owner-name">Grayson</div>
          </div>
          <div className="owner">
            <div className="owner-name">Noah</div>
            <div className="owner-title">(website creator)</div>
          </div>
        </div>

        {/* FEATURES & USP */}
        <div className="section-title">What Makes Us Unique</div>
        <div className="features">
          <div className="feature">
            <h3>🎨 Customizable Cups</h3>
            <p>Say goodbye to ordinary disposable cups. Every customer gets a customizable cup experience that's uniquely theirs.</p>
          </div>
          <div className="feature">
            <h3>☕ Specialty Coffee</h3>
            <p>Hand-roasted beans sourced from sustainable farms, crafted to perfection in every cup.</p>
          </div>
          <div className="feature">
            <h3>🥐 Artisanal Snacks</h3>
            <p>Fresh baked goods made daily with premium ingredients and exceptional care.</p>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="section-title">Our Vision & Mission</div>
        <div className="info-text" style={{marginBottom: '12px'}}>
          <strong style={{color: '#e8b84b'}}>Vision:</strong> To be the most innovative and creative coffee shop in the country.
        </div>
        <div className="info-text">
          <strong style={{color: '#e8b84b'}}>Mission:</strong> Provide exceptional, fully organic crafted beverages with outstanding cleanliness, perfect service, and attention to every detail.
        </div>

        {/* GOALS */}
        <div className="section-title">Our Goals</div>
        <div className="goals-grid">
          <div className="goal-item">😊 Make customers happy</div>
          <div className="goal-item">🏙️ Be locally well known</div>
          <div className="goal-item">📈 Achieve sustainable growth</div>
        </div>

        {/* LOCATION */}
        <div className="section-title">Visit Us</div>
        <div className="location-info">
          <div className="info-text">📍 130 Lower Marine Parade St</div>
          <div className="info-text">South Beach, Durban</div>
        </div>

        {/* TARGET MARKET */}
        <div className="section-title">Who We Serve</div>
        <div className="target-market">
          <span className="market-tag">✈️ Tourists</span>
          <span className="market-tag">🏖️ Beachgoers</span>
          <span className="market-tag">👥 Locals</span>
        </div>
      </div>

      {/* MENU TOGGLE */}
      <button className="menu-toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕ Close Menu' : '📋 View Our Menu'}
      </button>

      {/* MENU SECTION */}
      <div className="menu-section">
        <div className="tabs">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>🍽️ All</button>
          <button className={filter === 'coffee' ? 'active' : ''} onClick={() => setFilter('coffee')}>☕ Coffee</button>
          <button className={filter === 'cold' ? 'active' : ''} onClick={() => setFilter('cold')}>🧊 Cold Brew</button>
          <button className={filter === 'signature' ? 'active' : ''} onClick={() => setFilter('signature')}>⭐ Signature</button>
          <button className={filter === 'snacks' ? 'active' : ''} onClick={() => setFilter('snacks')}>🍪 Snacks</button>
        </div>
        <div className="grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="card" onClick={() => addToCart(item)}>
              <div style={{ fontSize: '1.4rem' }}>☕🍪</div>
              <div style={{ marginTop: '10px', fontWeight: 500 }}>{item.name}</div>
              <div className="price">R{item.price}</div>
            </div>
          ))}
        </div>
        <div className="cart">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.name}</span>
                <span>R{item.price}</span>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', color: '#9a8a7a' }}>Your cart is empty</div>
          )}
          <div className="total">Total: R{total}</div>
          <button className="order" onClick={confirmOrder}>Confirm Order</button>
        </div>
      </div>
    </div>
  );
}