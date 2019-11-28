import { ORDERS } from "../actions";
const mockOrdersList = [
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
];
export const getAllOrdersList = () => {
  return {
    type: ORDERS.LOAD_ALL_ORDERS,
    payload: [...mockOrdersList],
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
