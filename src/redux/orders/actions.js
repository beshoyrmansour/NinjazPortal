import { ORDERS } from "../actions";
import { API_ENDPOINTS } from "../../constants/API_ENDPOINTS";
import Axios from "axios";

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
];
export const getCustomerTopOrder = () => dispatch => {
  Axios.get(`${API_ENDPOINTS.CUSTOMERS_TOP_ORDERS.replace("{id}", localStorage.getItem("userId"))}`)
    .then(response => {
      dispatch({
        type: ORDERS.LOAD_CUSTOMER_TOP_ORDERS,
        payload: [...response.data],
      });
    })
    .catch(err => console.log(err));
};

export const getAllOrdersList = () => dispatch => {
  Axios.get(`${API_ENDPOINTS.CUSTOMERS_ORDERS.replace("{id}", localStorage.getItem("userId"))}`)
    .then(response => {
      dispatch({
        type: ORDERS.LOAD_ALL_ORDERS,
        payload: [...response.data],
      });
    })
    .catch(err => console.log(err));
};

export const setSelectedOrder = selectedOrder => dispatch => {
  dispatch({
    type: ORDERS.SET_SELECTED_ORDER,
    payload: selectedOrder,
  });
};

export const getOrderDetails = selectedOrderId => dispatch => {
  Axios.get(`${API_ENDPOINTS.ORDER_DETAILS.replace("{id}", selectedOrderId)}`)
    .then(response => {
      dispatch({
        type: ORDERS.SET_SELECTED_ORDER,
        payload: { ...response.data.results },
      });
    })
    .catch(err => console.log(err));

  // const selectedOrder = {
  //   id: "634784689245",
  //   detail: "Hello detail",
  //   type: "translation",
  //   status: {
  //     id: "os_pending_bids_approval",
  //     time: "09.08.2018 - 12:45",
  //   },
  //   total: "1,196.12 EGP",
  //   serviceType: "Translation - Arabic - English",
  //   paymentMethod: "Cash On Delivery (COD)",
  // };
  // dispatch({
  //   type: ORDERS.SET_SELECTED_ORDER,
  //   payload: selectedOrder,
  // });
};
