import { ORDERS } from "../actions";
import { cancelled } from "@redux-saga/core/effects";

const INIT_STATE = {
  allOrdersList: [
    {
      id: "634784689245",
      detail: "Hello detail",
      type: "translation",
      status: {
        id: "os_pending_admin_approval",
        time: "09.08.2018 - 12:45",
      },
      total: "1,196.12 EGP",
      serviceType: "Translation - Arabic - English",
      paymentMethod: "Cash On Delivery (COD)",
    },
    {
      id: "634784689246",
      detail: "Hello detail",
      type: "translation",
      status: {
        id: "os_approved_pending_on_bids",
        time: "09.08.2018 - 12:45",
      },
      total: "1,196.12 EGP",
      serviceType: "Translation - Arabic - English",
      paymentMethod: "Cash On Delivery (COD)",
    },
    {
      id: "634784689247",
      detail: "Hello detail",
      type: "translation",
      status: {
        id: "os_pending_bids_approval",
        time: "09.08.2018 - 12:45",
      },
      total: "1,196.12 EGP",
      serviceType: "Translation - Arabic - English",
      paymentMethod: "Cash On Delivery (COD)",
    },
    {
      id: "634784689248",
      detail: "Hello detail",
      type: "translation",
      status: {
        id: "os_order_in_progress",
        time: "09.08.2018 - 12:45",
      },
      total: "1,196.12 EGP",
      serviceType: "Translation - Arabic - English",
      paymentMethod: "Cash On Delivery (COD)",
    },
    {
      id: "634784689249",
      detail: "Hello detail",
      type: "translation",
      status: {
        id: "os_order_completed",
        time: "09.08.2018 - 12:45",
      },
      total: "1,196.12 EGP",
      serviceType: "Translation - Arabic - English",
      paymentMethod: "Cash On Delivery (COD)",
    },
    {
      id: "634784689244",
      detail: "Hello detail",
      type: "translation",
      status: {
        id: "os_order_cancelled",
        time: "09.08.2018 - 12:45",
      },
      total: "1,196.12 EGP",
      serviceType: "Translation - Arabic - English",
      paymentMethod: "Cash On Delivery (COD)",
    },
  ],
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
    case ORDERS.LOAD_ORDERS_CATEGORY_LIST:
      return { ...state, allOrdersList: action.payload };
      return;
    case ORDERS.SET_SELECTED_ORDER:
      return { ...state, selectedOrder: action.payload };
    // return { ...state, locale:action.payload};

    default:
      return { ...state };
  }
};
