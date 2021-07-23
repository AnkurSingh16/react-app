import React, { useContext, useState } from "react";
import { CartStateContext } from "../../contexts/cart";
import "./checkout.css";
import api from "../../apis/api";

export const Checkout = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null); // can use resposneStatus here to show success or error
  const { items } = useContext(CartStateContext);

  const submitData = () => {
    setIsFetching(true);

    const newProducts = items.map(({ id, name, price }) => ({
      id,
      name,
      price,
    }));
    const reqObj = {
      customerId: "123456",
      basket: {
        basketId: "abcdef",
        products: newProducts,
      },
    };

    api
      .postData("/products", reqObj)
      .then((response) => {
        console.log("response", response);
        setIsFetching(false);
        setResponseStatus("success");
        window.localStorage.clear(); // clearing localstorage, can work on better maintaning localstorage or possibly use session storage
      })
      .catch((error) => {
        console.log("error", error);
        setIsFetching(false);
        setResponseStatus("error");
      });
  };

  return isFetching ? (
    <div> Your Fancy loader </div>
  ) : (
    <div>
      {responseStatus === "success" ? (
        <div className="success">
          Submitted Successfully! <br /> you can use payment gateway, email
          services, etc to charge and notify customer{" "}
        </div>
      ) : responseStatus === "error" ? (
        <div className="error">
          {" "}
          Error while submitting response! <br /> you may use azure monitor etc
          to push redux state for debugging, etc{" "}
        </div>
      ) : null}
      {!items.length ? (
        <h2> There are No items in your cart!</h2>
      ) : (
        <div>
          <h2>Your cart</h2>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price per unit</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="submit-section">
            <button
              className="submit-button"
              type="submit"
              onClick={submitData}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
