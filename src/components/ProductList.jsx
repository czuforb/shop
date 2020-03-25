import React, { useContext } from "react";
import ProductListItem from "./ProductListItem";
import { StoreContext } from "../context";
const ProductList = () => {
  const {
    products: [products]
  } = useContext(StoreContext);

  return (
    <ul className="p-4">
      {products.map((product, index) => (
        <ProductListItem key={index} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
