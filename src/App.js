import React from "react";
import Navigation from "./components/Nav";
import ProductList from "./components/ProductList";
import { Router } from "@reach/router";
import Cart from "./components/Cart";
import Container from "./components/Container";
import SmallCart from "./components/SmallCart";

function App() {
  return (
    <div className="App">
      <SmallCart />
      <Navigation />
      <Container>
        <Router>
          <ProductList path="/" />
          <Cart path="/cart" />
        </Router>
      </Container>
    </div>
  );
}

export default App;
