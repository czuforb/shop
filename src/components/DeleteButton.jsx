import React, { useContext } from "react";
import { StoreContext } from "../context";

const DeleteButton = ({ product }) => {
  const { handleRemove } = useContext(StoreContext);
  return (
    <button
      onClick={() => handleRemove(product.sku)}
      className="p-2 bg-red-400 mx-8 rounded-md"
    >
      DELETE ME!
    </button>
  );
};

export default DeleteButton;
