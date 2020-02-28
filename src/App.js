import React from "react";
import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import ProductDetailPage from "./Components/Pages/ProductDetailPage";
import Store from "./Redux/Store";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServicesPage from "./Components/Pages/ServicesPage";
import ShoppingCartPage from "./Components/Pages/ShoppingCartPage"

export default function App() {
  return (
    <Router>
      <div className="App" style={{ maxWidth: 1280 }}>
        <Provider store={Store}>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route path={"/product-detail"} component={ProductDetailPage} />
            <Route exact path={"/page-not-found"} component={NotFoundPage} />
            <Route path={"/services"} component={ServicesPage} />
            <Route path={"/shopping-cart"} component={ShoppingCartPage} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}
