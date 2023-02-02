import React from "react";
import "../css/menuoptions.css";

const menuOptions = [
  {
    name: "Adventure",
    link: "/adventure",
    icon: require("../assets/images/icons/Torch.png"),
  },
  {
    name: "Allocate",
    link: "/allocate",
    icon: require("../assets/images/icons/Heart.png"),
  },
  {
    name: "Shop",
    link: "/shop",
    icon: require("../assets/images/icons/GoldenCoin.png"),
  },
  {
    name: "Inventory",
    link: "/inventory",
    icon: require("../assets/images/icons/Bag.png"),
  },
  {
    name: "Settings",
    link: "/settings",
    icon: require("../assets/images/icons/Gear.png"),
  },
];

function MenuOptions() {
  return (
    <div className="menu-container">
      {menuOptions.map((option, index) => (
        <div key={index} className="menu-option">
          <img className="menu-option-icon" src={option.icon} alt={option.name} />
          <span>{option.name}</span>
        </div>
      ))}
    </div>
  );
}

export default MenuOptions;
