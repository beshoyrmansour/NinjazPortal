import { INVOICES } from "../actions";

const mockInvoicesList = [
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
];

// LOAD_ALL_INVOICES, SET_SELECTED_INVOICE
export const getAllInvoicesList = () => {
  return {
    type: INVOICES.LOAD_ALL_INVOICES,
    payload: mockInvoicesList,
  };
};

export const setSelectedInvoice = selectedInvoice => {
  return {
    type: INVOICES.SET_SELECTED_INVOICE,
    payload: selectedInvoice,
  };
};

export const getInvoiceDetails = selectedInvoiceId => {
  const selectedInvoice = mockInvoicesList.find(inv => inv.id === selectedInvoiceId);
  console.log("selectedInvoice", selectedInvoice);

  return {
    type: INVOICES.SET_SELECTED_INVOICE,
    payload: selectedInvoice,
  };
};
