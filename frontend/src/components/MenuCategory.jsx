// src/components/MenuCategory.jsx
import MenuItem from "./MenuItem";

export default function MenuCategory({ title, items }) {
  return (
    <section className="menu-category">
      <h2>{title}</h2>

      <div className="menu-items-grid">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
