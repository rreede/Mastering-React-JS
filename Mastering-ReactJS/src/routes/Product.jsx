import { useState } from "react";

function Product(props) {
  /*
  const [SKU, setSKU] = useState("SKU");
  const [itemName, setitemName] = useState("Item Name");
  const [price, setprice] = useState(0);
  const [weight, setweight] = useState(0);
*/
  return (
    <div className="product-item">
      <input type="checkbox" className=".delete-checkbox" name="" id="" />
      <p>{props.sku}</p>
      <p>{props.itemName}</p>
      <p>{props.price}</p>
      <p>{props.weight}</p>
    </div>
  );
}

export default Product;
