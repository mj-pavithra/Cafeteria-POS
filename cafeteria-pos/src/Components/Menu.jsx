import React, { useState, useEffect } from "react";
import "../css/Menu.css";
import { ref, get, child } from 'firebase/database';
import { db } from "../firebase";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesRef = ref(db, 'category');
        const categoriesSnapshot = await get(categoriesRef);

        const items = [];
        categoriesSnapshot.forEach((categorySnapshot) => {
          const category = categorySnapshot.val();
          if (category.items) {
            Object.values(category.items).forEach((item) => {
              items.push({
                category: category.name,
                ...item
              });
            });
          }
        });

        setMenuItems(items);
} catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="menu-header">
        <h3 className="menu-header-txt">Menu</h3>
      </div>
      <div className="menu-body"></div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
