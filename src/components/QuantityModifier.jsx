import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context";

const QuantityModifier = ({ id }) => {
  const { cart, handleIncrease, handleDecrease } = useContext(StoreContext);

  const showQuantity = cart => {
    if (cart.length < 1) {
      return 0;
    } else {
      if (cart.find(item => item.sku === id)) {
        const tempProduct = cart.find(item => item.sku === id);
        return tempProduct.quantity;
      } else {
        return 0;
      }
    }
  };

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(showQuantity(cart));
  }, [cart]);

  return (
    <div className="bg-gray-200 rounded rounded-md overflow-hidden flex mx-2 items-stretch ml-auto">
      <button
        className="bg-red-300 hover:bg-red-400 p-2 font-bold text-xl text-red-700"
        onClick={() => handleDecrease(id)}
      >
        -
      </button>
      <p className="px-3 py-3 bg-yellow-100 font-bold align-center">
        {quantity}
      </p>
      <button
        className="bg-green-300 hover:bg-green-400 p-2 font-bold text-xl text-green-700"
        onClick={() => handleIncrease(id)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityModifier;
