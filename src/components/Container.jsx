import React from "react";

const Container = ({ children }) => {
  return (
    <section className="w-full bg-gray-400 p-6">
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </section>
  );
};

export default Container;
