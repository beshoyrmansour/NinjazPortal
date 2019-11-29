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

const mockCustomerOrdersList = [
  {
    id: 4,
    fk_company: 1,
    fk_order_status: 3,
    OrderStatusName: "Approved",
    fk_payment_type: 1,
    PaymentTypeName: null,
    OrderCode: "201905194",
    OrderDate: "2019-05-19T14:35:21.457",
    documents_path: null,
    is_easy: false,
    created_at: "2019-05-19T14:35:21.457",
    updated_at: "2019-07-28T09:15:15.36",
    orderItems: [
      {
        id: 4,
        fk_order: 4,
        fk_item_status: 3,
        ItemStatusName: "Approved",
        OrderItemCode: "201905194-4",
        fk_service: 1,
        ServiceName: "Translation",
        fk_service_type: null,
        ServiceTypeName: null,
        fk_source_lang: 2,
        SourceLang: "Arabic",
        fk_target_lang: 1,
        TargetLang: "English",
        fk_translation_type: 2,
        TranslationTypeName: "Legal Translation",
        number_of_pages: 5,
        total_budget: 1500.0,
        fk_currency: 4,
        CurrencyCode: "EGP",
        is_urgent_delivery: false,
        delivery_date: null,
        share_order: false,
        documents_path: null,
        created_at: "2019-05-19T14:35:21.723",
        updated_at: "2019-07-28T09:15:15.36",
      },
    ],
  },
  {
    id: 3,
    fk_company: 1,
    fk_order_status: 1,
    OrderStatusName: "Created",
    fk_payment_type: 1,
    PaymentTypeName: null,
    OrderCode: "201905193",
    OrderDate: "2019-05-19T14:31:13.017",
    documents_path: null,
    is_easy: false,
    created_at: "2019-05-19T14:31:13.017",
    updated_at: "2019-05-19T14:31:13.017",
    orderItems: [],
  },
  {
    id: 2,
    fk_company: 1,
    fk_order_status: 1,
    OrderStatusName: "Created",
    fk_payment_type: 1,
    PaymentTypeName: null,
    OrderCode: "201905192",
    OrderDate: "2019-05-19T14:22:17.62",
    documents_path: null,
    is_easy: false,
    created_at: "2019-05-19T14:22:17.62",
    updated_at: "2019-05-19T14:22:17.62",
    orderItems: [],
  },
  {
    id: 1,
    fk_company: 1,
    fk_order_status: 1,
    OrderStatusName: "Created",
    fk_payment_type: 1,
    PaymentTypeName: null,
    OrderCode: "201905191",
    OrderDate: "2019-05-19T14:10:25.67",
    documents_path: null,
    is_easy: false,
    created_at: "2019-05-19T14:10:25.67",
    updated_at: "2019-05-19T14:10:25.67",
    orderItems: [],
  },
];
export const getCustomerTopOrder = () => {
  return {
    type: ORDERS.LOAD_CUSTOMER_TOP_ORDERS,
    payload: [...mockCustomerOrdersList],
  };
};

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
