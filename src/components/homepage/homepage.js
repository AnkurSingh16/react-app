import React, { Component } from "react";
import { CardList } from "../card-list/card-list";
import api from "../../apis/api";

import { Cart } from "../cart/cart";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      originalProductList: [],
    };
    // clearing localstorage
    window.localStorage.clear();
  }
  getProductDetails = () => {
    //error boundary can be implemented here
    api
      .getData("/products")
      .then((response) => {
        console.log("response", response);
        this.setState({ productList: response.data.results });
        this.setState({ originalProductList: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getProductDetails();
  }
  render() {
    const { productList } = this.state;
    return (
      <>
        <Cart />
        <CardList productList={productList}></CardList>
      </>
    );
  }
}

export default Homepage;
