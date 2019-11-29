import { ORDERS } from "../actions";
import { cancelled } from "@redux-saga/core/effects";

const INIT_STATE = {
  allOrdersList: [],
  orderStates: [
    { id: "os_pending_admin_approval", value: "Pending Admin Approval" },
    { id: "os_approved_pending_on_bids", value: "Approved - Pending on Bids" },
    { id: "os_pending_bids_approval", value: "Pending Bids Approval" },
    { id: "os_order_in_progress", value: "Order In-Progress" },
    { id: "os_order_completed", value: "Order Completed" },
    { id: "os_order_cancelled", value: "Order cancelled" },
  ],
  selectedOrder: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ORDERS.LOAD_CUSTOMER_TOP_ORDERS:
      return { ...state, allOrdersList: action.payload };
    case ORDERS.LOAD_ALL_ORDERS:
      return { ...state, allOrdersList: action.payload };
      return;
    case ORDERS.SET_SELECTED_ORDER:
      return { ...state, selectedOrder: action.payload };
    // return { ...state, locale:action.payload};

    default:
      return { ...state };
  }
};
