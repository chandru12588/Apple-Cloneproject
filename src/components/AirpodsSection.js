import React from "react";
import seven from "./assets/seven.jpg"

const AirpodsSection = () => (
  <section
    data-aos="fade-up"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // ✅ Centers horizontally
      justifyContent: "center",
      marginBottom: "100px",
      padding: "60px 20px",
      backgroundColor: "#000",
      color: "#fff",
      textAlign: "center",
    }}
  >
    {/* Product Image */}
    <img
      src={seven}
      alt="AirPods Pro"
      style={{
        borderRadius: "20px",
        maxWidth: "900px",
        width: "100%",
        height: "auto",
        marginBottom: "40px",
        display: "block",
      }}
    />

    {/* Title */}
    <h2 style={{ fontSize: "42px", fontWeight: "600", marginBottom: "15px" }}>
      AirPods Pro
    </h2>

    {/* Description */}
    <p style={{ color: "#aaa", fontSize: "20px", marginBottom: "25px" }}>
      Active Noise Cancellation for immersive sound.
    </p>

    {/* Links */}
    <div style={{ display: "flex", gap: "20px" }}>
      <a
        href="#"
        style={{
          color: "#2997ff",
          fontSize: "18px",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        Learn more &gt;
      </a>
      <a
        href="#"
        style={{
          color: "#2997ff",
          fontSize: "18px",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        Buy &gt;
      </a>
    </div>
  </section>
);

export default AirpodsSection;
