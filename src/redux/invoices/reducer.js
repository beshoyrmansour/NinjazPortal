import { INVOICES } from "../actions";

const INIT_STATE = {
  allInvoicesList: [],
  invoiceStates: [],
  selectedInvoice: {},
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
