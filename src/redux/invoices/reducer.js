import { INVOICES } from "../actions";

const INIT_STATE = {
  allInvoicesList: [],
  invoiceStates: [],
  selectedInvoice: {},
  invoiceStates: [
    { id: "os_pending_admin_approval", value: "Pending Admin Approval" },
    { id: "os_approved_pending_on_bids", value: "Approved - Pending on Bids" },
    { id: "os_pending_bids_approval", value: "Pending Bids Approval" },
    { id: "os_order_in_progress", value: "Order In-Progress" },
    { id: "os_order_completed", value: "Order Completed" },
    { id: "os_order_cancelled", value: "Order cancelled" },
  ],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case INVOICES.LOAD_ALL_INVOICES:
      return Object.assign({}, state, {
        allInvoicesList: action.payload,
      });
    case INVOICES.SET_SELECTED_INVOICE:
      return Object.assign({}, state, {
        selectedInvoice: action.payload,
      });

    default:
      return { ...state };
  }
};
