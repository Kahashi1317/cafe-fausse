// src/components/MenuItem.jsx
export default function MenuItem({ name, price, description }) {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <h3>{name}</h3>
        <span className="price">${price.toFixed(2)}</span>
      </div>
      <p className="description">{description}</p>
    </div>
  );
}
