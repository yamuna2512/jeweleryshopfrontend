import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import {
  getMyOrders,
  cancelOrder
} from "../reducks/order/operations";

import "../assets/styles/my-orders.css";

const MyOrders = () => {

  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);



  const fetchOrders = async () => {

    const data = await dispatch(getMyOrders());

    setOrders(data || []);
  };



  const handleCancel = async (id) => {

    await dispatch(cancelOrder(id));

    fetchOrders();
  };



  return (

    <div className="my-orders-page">

      <div className="orders-container">

        <h1 className="orders-title">
          My Orders
        </h1>

        {orders.length === 0 ? (

          <div className="empty-orders">
            No Orders Found
          </div>

        ) : (

          orders.map((order) => (

            <div
              className="order-card"
              key={order.id}
            >

              <div className="order-top">

                <div>

                  <h3>
                    Order #{order.id}
                  </h3>

                  <p>
                    {new Date(order.created_at)
                      .toLocaleDateString()}
                  </p>

                </div>

                <div className={`status ${order.status}`}>

                  {order.status}

                </div>

              </div>



              <div className="order-middle">

                <div>
                  <span>Total Amount</span>
                  <h4>$ {order.total_price}</h4>
                </div>

                <div>
                  <span>Total Items</span>
                  <h4>{order.total_qty}</h4>
                </div>

              </div>



              <div className="order-buttons">

                <Link
                  to={`/order-details/${order.id}`}
                >

                  <button className="details-btn">
                    View Details
                  </button>

                </Link>



                {order.status !== "Cancelled" && (

                  <button
                    className="cancel-btn"
                    onClick={() =>
                      handleCancel(order.id)
                    }
                  >

                    Cancel Order

                  </button>
                )}

              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;