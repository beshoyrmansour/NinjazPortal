import { INVOICES } from "../actions";
// LOAD_ALL_INVOICES, SET_SELECTED_INVOICE
export const getAllInvoicesList = allInvoicesList => {
  return {
    type: INVOICES.LOAD_ALL_INVOICES,
    payload: allInvoicesList,
  };
};

export const setSelectedInvoice = selectedInvoice => {
  return {
    type: INVOICES.SET_SELECTED_INVOICE,
    payload: selectedInvoice,
  };
};
