import React from "react";
import five from "./assets/five.jpg"
const Hero = () => (
  <section style={{ position: "relative", textAlign: "center", color: "#fff" }}>
    <img src={five} alt="iPhone Hero" style={{ width: "100%" }} />
    <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", padding: "0 20px" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>iPhone 16 Pro</h1>
      <p style={{ fontSize: "18px", marginBottom: "20px", color: "#aaa" }}>Hello, Apple Intelligence.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <a href="#" style={{ color: "#2997ff", fontWeight: 500 }}>Learn more</a>
        <a href="#" style={{ color: "#2997ff", fontWeight: 500 }}>Buy</a>
      </div>
    </div>
  </section>
);
export default Hero;
