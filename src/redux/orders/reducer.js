import { ORDERS } from "../actions";
const INIT_STATE = {
  allOrdersList: [],
  orderStates: [
    { id: 1, value: "Created" },
    { id: 2, value: "Submitted" },
    { id: 3, value: "Approved" },
    { id: 4, value: "Sent to Service Providers" },
    { id: 5, value: "Assigned" },
    { id: 6, value: "In-Progress" },
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
      return { ...state, selectedOrder: { ...action.payload } };
    // return { ...state, locale:action.payload};

    default:
      return { ...state };
  }
};
