import React from "react";

import "./products.css";

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-container">
        <div className="product-title">Our Products</div>
        <div className="product-list">
          Marketplace, T-port, Track Booth, Track Yard and Galley- all in one
          place
        </div>
        <div className="product-cards">
          <div className="product-card">Card 1</div>
          <div className="product-card">Card 2</div>
          <div className="product-card">Card 3</div>
          <div className="product-card">Card 4</div>
          <div className="product-card">Card 5</div>
        </div>
      </div>
    </section>
  );
};

export default Products;
