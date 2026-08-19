// src/pages/MenuPage.jsx
import menuData from "../data/menuData";
import MenuCategory from "../components/MenuCategory";

export default function MenuPage() {
  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      <MenuCategory title="Starters" items={menuData.starters} />
      <MenuCategory title="Main Courses" items={menuData.mains} />
      <MenuCategory title="Desserts" items={menuData.desserts} />
      <MenuCategory title="Beverages" items={menuData.beverages} />
    </div>
  );
}
