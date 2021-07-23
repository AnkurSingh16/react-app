import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import CartProvider from "./contexts/cart";
import { Checkout } from "./components/checkout/checkout";
import Homepage from "./components/homepage/homepage";

// const unsplash = new Unsplash({ accessKey: "M2D69tHCgCGYDPS9IsjqwnJ8sQ5TJIBppJDd9eCoPDY" });

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <header>
            <Link to="/">
              <h1>Welcome to my fantastic e-commerce website!!©</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/checkout" exact>
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </div>
    </CartProvider>
  );
};

export default App;
