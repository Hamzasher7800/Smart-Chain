import React from "react";
import { productData } from "./data";

export default function Carousal(props) {
  
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      
      <h2 className="car-h2">{props.name}</h2>
      <p className="car-desp">{props.description}</p>
      <p>
        <button>Read more</button>
      </p> 
      
    </div>

  );
}