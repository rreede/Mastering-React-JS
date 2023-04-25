import { topproducts } from "./products";
import { getImageUrl } from "./utils.js";

export default function BestOffers() {
  const arrayProducts = topproducts.map((product) => (
    <>
      <div className="products">
        <img src={getImageUrl(product)} className="top-products-image" alt="" />
        <ul>
          <li key="">
            <strong>{product.name}</strong>
          </li>
          <li key="">{product.price}</li>
        </ul>
      </div>
    </>
  ));

  return (
    <>
      <h3>Best Offers:</h3>

      {arrayProducts}
    </>
  );
}
