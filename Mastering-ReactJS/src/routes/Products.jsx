import Product from "./Product";

function Products(props) {
  return (
    <div className="products-container">
      <Product
        sku={2}
        itemName={"itemName"}
        price={"price"}
        weight={"weight"}
      />
      <Product
        sku={2}
        itemName={"itemName"}
        price={"price"}
        weight={"weight"}
      />
      <Product
        sku={3}
        itemName={"itemName"}
        price={"price"}
        weight={"weight"}
      />
      <Product
        sku={4}
        itemName={"itemName"}
        price={"price"}
        weight={"weight"}
      />
      <Product
        sku={5}
        itemName={"itemName"}
        price={"price"}
        weight={"weight"}
      />
      <Product
        sku={6}
        itemName={"itemName"}
        price={"price"}
        weight={"weight"}
      />
    </div>
  );
}

export default Products;
