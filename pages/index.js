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
        }
        .logo span {
          color: #f6f1e8;
        }
        .tabs {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          margin-bottom: 20px;
        }
        .tabs button {
          background: transparent;
          border: 1px solid #9a8a7a;
          color: #9a8a7a;
          padding: 8px 14px;
          border-radius: 20px;
          cursor: pointer;
          white-space: nowrap;
        }
        .tabs button.active {
          background: #e8b84b;
          color: black;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 14px;
        }
        .card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 16px;
          cursor: pointer;
          transition: 0.25s;
        }
        .card:hover {
          transform: translateY(-5px);
          border-color: #e8b84b;
        }
        .price {
          color: #e8b84b;
          margin-top: 6px;
          font-weight: 700;
        }
        .cart {
          margin-top: 30px;
          background: rgba(0, 0, 0, 0.35);
          padding: 18px;
          border-radius: 16px;
        }
        .total {
          text-align: right;
          margin-top: 10px;
          color: #e8b84b;
          font-size: 1.2rem;
        }
        .order {
          width: 100%;
          margin-top: 12px;
          padding: 14px;
          border: none;
          background: #e8b84b;
          color: black;
          font-weight: bold;
          border-radius: 10px;
          cursor: pointer;
        }
      `}</style>
      <header>
        <div className="logo">Deja <span>Brew</span></div>
      </header>
      <div className="tabs">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'coffee' ? 'active' : ''} onClick={() => setFilter('coffee')}>Coffee</button>
        <button className={filter === 'cold' ? 'active' : ''} onClick={() => setFilter('cold')}>Cold Brew</button>
        <button className={filter === 'signature' ? 'active' : ''} onClick={() => setFilter('signature')}>Signature</button>
        <button className={filter === 'snacks' ? 'active' : ''} onClick={() => setFilter('snacks')}>Snacks 🍪</button>
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
        <div>
          {cart.map((item, index) => (
            <div key={index}>{item.name} - R{item.price}</div>
          ))}
        </div>
        <div className="total">Total: R{total}</div>
        <button className="order" onClick={confirmOrder}>Confirm Order</button>
      </div>
    </div>
  );
}