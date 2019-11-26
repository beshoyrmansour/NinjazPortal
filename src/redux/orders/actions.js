import { ORDERS } from "../actions";

export const getAllOrdersList = () => {
  return {
    type: ORDERS.LOAD_ALL_ORDERS,
    // payload: allOrdersList,
  };
};
export const setSelectedOrder = selectedOrder => {
  return {
    type: ORDERS.SET_SELECTED_ORDER,
    payload: selectedOrder,
  };
};

export const getOrderDetails = selectedOrderId => {
  const selectedOrder = {
    id: "634784689245",
    detail: "Hello detail",
    type: "translation",
    status: {
      id: "os_pending_bids_approval",
      time: "09.08.2018 - 12:45",
    },
    total: "1,196.12 EGP",
    serviceType: "Translation - Arabic - English",
    paymentMethod: "Cash On Delivery (COD)",
  };
  return {
    type: ORDERS.SET_SELECTED_ORDER,
    payload: selectedOrder,
  };
};
