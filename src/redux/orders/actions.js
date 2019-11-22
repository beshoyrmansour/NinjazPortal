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
