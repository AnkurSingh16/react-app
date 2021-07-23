import React from "react";
import "./card-list-styles.css";
import { Card } from "../card/card";

export const CardList = (props) => {
  return (
    <div>
      <div className="card-list">
        {props.productList &&
          props.productList.map((product) => (
            <Card key={product.id} product={product}></Card>
          ))}
      </div>
    </div>
  );
};
