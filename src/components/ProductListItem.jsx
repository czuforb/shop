import React from "react";
import BuyButton from "./BuyButton";
import QuantityModifier from "./QuantityModifier";
import DeleteButton from "./DeleteButton";

const ProductListItem = ({ product }) => {
  return (
    <li className="p-4 bg-gray-200 my-4 flex items-center">
      <div className="w-20 h-20 rounded">
        <img src={product.image} alt="Bence" />
      </div>
      <div className="ml-12 text-xl font-bold">{product.productName}</div>
      <QuantityModifier id={product.sku} quantity={product} />
      <BuyButton product={product} />
      <DeleteButton product={product} />
      <p className="">{product.price}</p>
    </li>
  );
};

export default ProductListItem;
