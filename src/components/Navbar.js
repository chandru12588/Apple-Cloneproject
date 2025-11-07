import React from "react";
import one from "./assets/one.png"
import two from "./assets/two.png"
import three from "./assets/three.png"
const menu = [
  "Store", "Mac", "iPad", "iPhone", "Watch",
  "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"
];
const Navbar = () => (
  <nav style={{ backgroundColor: "#000", padding: "10px 20px", position: "sticky", top: 0, zIndex: 1000 }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <img src={one} alt="Apple Logo" style={{ height: 20, cursor: "pointer", filter: "invert(1)" }} />
      <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
        {menu.map((item, i) => (
          <li key={i} style={{ fontSize: "12px", cursor: "pointer", color: "#888" }}>{item}</li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: "15px" }}>
        <img src={two} alt="Search" style={{ height: 20, filter: "invert(1)", cursor: "pointer" }} />
        <img src={three} alt="Bag" style={{ height: 20, filter: "invert(1)", cursor: "pointer" }} />
      </div>
    </div>
  </nav>
);
export default Navbar;
