import { useState } from "react";

function Product(props) {
  let badgeText;
  if (props.discount == true) {
    badgeText = "20% Discount";
  } else {
    badgeText = "No available discount";
  }
  return (
    <div className="product-item">
      <input type="checkbox" className=".delete-checkbox" name="" id="" />

      <p>
        <strong>ID:</strong> {props.id}
      </p>
      <p>
        <strong>SKU:</strong> {props.sku}
      </p>
      <p>
        <strong>Name:</strong> {props.itemName}
      </p>
      <p>
        <strong>Price:</strong> {props.price} €
      </p>
      <p>
        <strong>Weight:</strong> {props.weight} KG
      </p>
      <p>{badgeText}</p>
    </div>
  );
}

export default Product;
