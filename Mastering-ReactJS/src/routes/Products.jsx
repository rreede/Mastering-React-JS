import Product from "./Product";
import ProductsList from "./ProductsList";

function Products(props) {
  const productsElements = ProductsList.map(function (productItem) {
    return <Product id={productItem.id} {...productItem} />;
  });

  return <div className="products-container">{productsElements}</div>;
}

export default Products;
