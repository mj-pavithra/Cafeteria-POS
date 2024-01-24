import React from "react";
import "../css/Menu.css";

const menuData = {
  Breakfast: [
    "String Hoppers",
    "Fish Curry",
    "Pittu",
    "Idli",
    "Sambar",
    "Dosa",
    "Pancakes",
    "Bacon",
    "Eggs Benedict",
  ],
  Lunch: [
    "Rice and Curry",
    "Kottu",
    "Lamprais",
    "Biryani",
    "Butter Chicken",
    "Palak Paneer",
    "Burger",
    "Pizza",
    "Pasta",
  ],
  "Tea Time": [
    "Fish Buns",
    "Wade",
    "Samosa",
    "Pakora",
    "Sandwiches",
    "Cookies",
    "Cake",
    "Patties",
    "Doughnuts",
  ],
  "Birthday Packages": [
    "Rice and Curry",
    "Fruit Salad",
    "Biryani",
    "Gulab Jamun",
    "Spaghetti",
    "Ice Cream",
    "Cake",

  ],
  "Party Packages": [
    "Devilled Chicken",
    "Fried Rice",
    "Tandoori Chicken",
    "Naan",
    "BBQ Ribs",
    "Garlic Bread",
    "Fruit Salad",
    "Ice Cream",
  ],
};

function Menu() {
  const maxItems = Math.max(
    ...Object.values(menuData).map((items) => items.length)
  );

  return (
    <div>
      <div className="menu-header">
        <h3 className="menu-header-txt">Menu</h3>
      </div>
      <div className="menu-body"></div>
      <table>
        <thead>
          <tr>
            {Object.keys(menuData).map((meal) => (
              <th key={meal}>{meal}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxItems }).map((_, i) => (
            <tr key={i}>
              {Object.values(menuData).map((items, j) => (
                <td key={j}>{items[i]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Menu;