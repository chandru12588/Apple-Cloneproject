import React from "react";
const features = [
  { title: "Display", description: "6.3″ or 6.9″ Super Retina XDR display with ProMotion." },
  { title: "Camera", description: "48MP triple-camera system with ProRAW and 8× optical zoom." },
  { title: "Chip", description: "A19 Pro chip with next-gen 5-nm+ architecture and vapour-cooled design." },
];
const FeatureSection = () => (
  <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
    {features.map((f, i) => (
      <div key={i} style={{ marginBottom: "40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>{f.title}</h2>
        <p style={{ fontSize: "16px", color: "#ccc" }}>{f.description}</p>
      </div>
    ))}
  </section>
);
export default FeatureSection;
