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
          text-align: center;
          margin-bottom: 25px;
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
        <div className="logo">Deja <span>Brew</span></div>
      </header>
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
  );
}