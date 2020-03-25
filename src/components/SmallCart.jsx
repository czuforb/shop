import React, { useContext, useEffect, useState, useRef } from "react";
import { StoreContext } from "../context";

const SmallCart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(StoreContext);

  const getTotal = cart => {
    const total = 0;

    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, total);
  };

  useEffect(() => {
    setTotal(getTotal(cart));
  }, [cart]);

  const [isOpen, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <section
      ref={ref}
      className="z-10 w-1/6 h-screen bg-grey-400 shadow-md fixed right-0 flex flex-grow flex-col justify-start"
    >
      <div className="w-full border-b-2 border-gray-600 p-4 bg-gray-400">
        <h2 className="text-2xl font-bold text-center uppercase">Cart</h2>
      </div>
      <div className="">
        <ul className="bg-gray-300 p-2">
          {cart.length > 0 ? (
            cart.map(item => (
              <li
                className="p-2 font-bold text-xl border-b-2 block border-gray-400 flex items-center justify-start"
                key={item.sku}
              >
                {item.productName}
                <span className="ml-auto font-normal">{item.quantity}</span>
              </li>
            ))
          ) : (
            <li className="font-bold text-2xl text-red-500">
              Nothing in your cart yet!
            </li>
          )}
        </ul>
      </div>
      <div className="mt-auto mb-40 h-60 bg-red-500 p-6">
        <h3>TOTAL</h3>
        <p>{total}</p>
      </div>
    </section>
  );
};

export default SmallCart;

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
