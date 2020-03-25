import React, { useContext } from "react";
import { Link } from "@reach/router";
import { StoreContext } from "../context";

const Navigation = () => {
  const { cart } = useContext(StoreContext);
  return (
    <div className="z-30 w-full shadow-xl bg-gray-200">
      <div className="max-w-screen-xl mx-auto flex justify-start items-center">
        <Link className="text-2xl font-bold mx-4" to="/">
          Home
        </Link>
        <Link className="text-2xl font-bold mx-4" to="/cart">
          Cart
        </Link>
        <div className="ml-auto p-4 bg-gray-300 font-bold relative">
          {cart.length > 1 ? (
            <span> {cart.length} items in the cart</span>
          ) : (
            <span> {cart.length} item in the cart</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
