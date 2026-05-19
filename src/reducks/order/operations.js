import API from "../../API";

const api = new API();



/* =========================
    CREATE ORDER
========================= */

export const createOrder = (data) => {

  return async () => {

    try {

      const response = await api.createOrder(data);

      return true;

    } catch (error) {

      console.log(error);

      return false;
    }
  };
};



/* =========================
      GET MY ORDERS
========================= */

export const getMyOrders = () => {

  return async () => {

    try {

      const response = await api.getMyOrders();

      return response;

    } catch (error) {

      console.log(error);

      return [];
    }
  };
};



/* =========================
      CANCEL ORDER
========================= */

export const cancelOrder = (id) => {

  return async () => {

    try {

      const response = await api.cancelOrder(id);

      return response;

    } catch (error) {

      console.log(error);
    }
  };
};