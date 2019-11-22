import { ORDERS } from "../actions";

const INIT_STATE = {
  allOrdersList: [
    {
      id: "634784689245",
      detail: "Hello detail",
      type: "translation",
      status: {
        value: "Assigned",
        time: "09.08.2018 - 12:45",
      },
      total: "1,196.12 EGP",
      serviceType: "Translation - Arabic - English",
      paymentMethod: "Cash On Delivery (COD)",
    },
  ],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ORDERS.LOAD_ORDERS_CATEGORY_LIST:
      return { ...state, allOrdersList: action.payload };
      return;
    case ORDERS.SET_SELECTED_SERVICE:
      return { ...state, selectedOrder: action.payload };
    // return { ...state, locale:action.payload};

    default:
      return { ...state };
  }
};
