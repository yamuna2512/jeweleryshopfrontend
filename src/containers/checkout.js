import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getCartItems, getCartTotal } from "../reducks/cart/selectors";
import { createOrder } from "../reducks/order/operations";

import "../assets/styles/checkout.css";

const Checkout = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const carts = useSelector(getCartItems);
  const total = useSelector(getCartTotal);

   const [formData, setFormData] = useState({
    customer_name: "",
    customer_phone: "",
    address: "",
    pin_code: "",
    building_type: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

     };

const handleOrder = async () => {

  // VALIDATION

  if (
    !formData.customer_name ||
    !formData.customer_phone ||
    !formData.address ||
    !formData.pin_code ||
    !formData.city ||
    !formData.state
  ) {

    alert("Please fill all shipping details");

    return;
  }

  // PLACE ORDER

  const result = await dispatch(createOrder(formData));

  if (result) {
    history.push("/ordersuccess");
  }
};



  // const handleOrder = async () => {

  //   const result = await dispatch(createOrder(formData));

  //   if (result) {
  //     history.push("/ordersuccess");
  //   }
  // };

  return (
    <div className="checkout-page">

      <div className="checkout-container">

        {/* LEFT */}

         <div className="checkout-left">

          <h2>Shipping Details</h2>

          <div className="checkout-form">

            <input
              type="text"
              name="customer_name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="customer_phone"
              placeholder="Phone Number"
               onChange={handleChange}
               required
            />

            <textarea
              name="address"
              placeholder="Address"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="pin_code"
              placeholder="Pin Code"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="building_type"
              placeholder="Apartment / Villa"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              required
            />

          </div>
        </div>

        {/* RIGHT */}
        <div className="checkout-right">

          <h2>Order Summary</h2>

          {carts.map((item) => (
            <div className="summary-card" key={item.id}>

             <img
  src={item.product?.product_image}
  alt="product"
/>

<div>
  <h4>{item.product?.product_name}</h4>
  <p>Qty: {item.quantity}</p>
  <p>$ {item.product?.price}</p>
</div>
              </div>
          ))}

          <div className="summary-total">
            Total: $ {total}
          </div>

          <button
            className="place-order-btn"
            onClick={handleOrder}
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
};

export default Checkout;
