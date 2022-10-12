import React from "react";

import marketplace from "../../assets/marketplace.jpg";
import port from "../../assets/port.jpg";
import booth from "../../assets/booth.jpg";
import galley from "../../assets/galley.jpg";
import yard from "../../assets/yard.jpg";

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
          <div className="product-card">
            <div className="product-title">Marketplace</div>
            <div className="product-detail">
              A customizable Music NFT marketplace that promises the best user
              experience.
            </div>
            <div className="product-image-container">
              <img
                className="product-img"
                src={marketplace}
                alt="marketplace"
              />
            </div>
          </div>
          <div className="product-card">
            <div className="product-title">T-Port</div>
            <div className="product-detail">
              Mint and release your Music NFTs on our Launchpad and be entitled
              to free advertising on our homepage.
            </div>
            <div className="product-image-container">
              <img className="product-img" src={port} alt="marketplace" />
            </div>
          </div>
          <div className="product-card">
            <div className="product-title">Track Booth</div>
            <div className="product-detail">
              Host a virtual group listening party by streaming your favorite
              tracks to your friends
            </div>
            <div className="product-image-container">
              <img className="product-img" src={booth} alt="marketplace" />
            </div>
          </div>
          <div className="product-card">
            <div className="product-title">Galley</div>
            <div className="product-detail">
              Work spaces for producers in Web3 to create different beats and
              sounds while engaging on the platform.
            </div>
            <div className="product-image-container">
              <img className="product-img" src={galley} alt="marketplace" />
            </div>
          </div>
          <div className="product-card">
            <div className="product-title">Track Yard</div>
            <div className="product-detail">
              An exclusive community section that aims to bridge the gap between
              artists and fans and foster support
            </div>
            <div className="product-image-container">
              <img className="product-img" src={yard} alt="marketplace" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
