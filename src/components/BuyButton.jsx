import React, { useContext } from "react";
import { StoreContext } from "../context";

const BuyButton = ({ product }) => {
  const { handleAddCart } = useContext(StoreContext);
  const action = {
    type: "ADD",
    playload: {
      product: product
    }
  };
  return (
    <button
      onClick={() => handleAddCart(action)}
      className="p-2 bg-teal-200 mx-8 rounded-md"
    >
      BUY ME!
    </button>
  );
};

export default BuyButton;
