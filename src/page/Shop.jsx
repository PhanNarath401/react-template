import React from "react";
import { PRODUCTS } from "../products";
// import { Home } from "../components/Home";
import { Product } from "./product";

import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          // console.log(product);
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
