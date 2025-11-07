import React from "react";

const TradeInSection = () => (
  <section
    data-aos="fade-up"
    style={{
      background: "#111",
      borderRadius: "20px",
      padding: "60px 20px",
      margin: "80px auto",
      maxWidth: "1000px",
      textAlign: "center",
    }}
  >
    <img
      src="https://www.apple.com/v/home/aw/images/promos/iphone-tradein/promo_iphone_tradein__d8xv36p4x9e6_large_2x.jpg"
      alt="Trade In"
      style={{ borderRadius: "20px", marginBottom: "30px" }}
    />
    <h2 style={{ fontSize: "36px" }}>Apple Trade In</h2>
    <p style={{ color: "#aaa", fontSize: "18px", marginBottom: "20px" }}>
      Get credit toward your next purchase when you trade in your old device.
    </p>
    <a href="#">See what your device is worth &gt;</a>
  </section>
);

export default TradeInSection;
