import React from "react";
import "./ProductSection.css"; // make sure this exists

const ProductSection = ({ title, subtitle, image, bg }) => {
  return (
    <section
      className="product-section"
      style={{ backgroundColor: bg }}
    >
      <div className="product-container">
        <img src={image} alt={title} className="product-image" />
        <h2 className="product-title">{title}</h2>
        <p className="product-subtitle">{subtitle}</p>
        <a href="#" className="learn-more">Learn more &gt;</a>
      </div>
    </section>
  );
};

export default ProductSection;
