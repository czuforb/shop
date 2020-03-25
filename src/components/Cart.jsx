import React, { useContext } from "react";
import { StoreContext } from "../context";
import ProductListItem from "./ProductListItem";

const Cart = () => {
  const {
    cart: [cart]
  } = useContext(StoreContext);

  return (
    <>
      <ul>
        {cart.map((product, index) => (
          <ProductListItem key={index} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Cart;
