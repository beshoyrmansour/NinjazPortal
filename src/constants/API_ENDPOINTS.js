const hostname = window && window.location && window.location.hostname;
console.log(hostname);

const prod = "http://hostname/api";
const dev = "http://ninjaz.me/api";

let base = dev;

export const API_ENDPOINTS = {
  BASE: `${base}`,
  SERVICE_DETAILS: `${base}/services/{id}`,
  SERVICE_TYPES_ONLY: `${base}/servicetypes`,
  ALL_SERVICE_TYPES: `${base}/servicetypes/all`,

  CUSTOMERS_TOP_ORDERS: `${base}/Customers/orders/top/{id}`,
  CUSTOMERS_ORDERS: `${base}/Customers/orders/{id}`,
  ORDER_DETAILS: `${base}/Customers/orderdetails/{id}`,
};
