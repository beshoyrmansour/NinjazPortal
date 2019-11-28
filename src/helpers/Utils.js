import { defaultDirection } from "../constants/defaultValues";

export const mapOrder = (array, order, key) => {
  array.sort(function(a, b) {
    var A = a[key],
      B = b[key];
    if (order.indexOf(A + "") > order.indexOf(B + "")) {
      return 1;
    } else {
      return -1;
    }
  });
  return array;
};

export const getDateWithFormat = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return dd + "." + mm + "." + yyyy;
};

export const getCurrentTime = () => {
  const now = new Date();
  return now.getHours() + ":" + now.getMinutes();
};

export const getDirection = () => {
  let direction = defaultDirection;
  if (localStorage.getItem("direction")) {
    const localValue = localStorage.getItem("direction");
    if (localValue === "rtl" || localValue === "ltr") {
      direction = localValue;
    }
  }
  return {
    direction,
    isRtl: direction === "rtl",
  };
};

export const setDirection = localValue => {
  let direction = "ltr";
  if (localValue === "rtl" || localValue === "ltr") {
    direction = localValue;
  }
  localStorage.setItem("direction", direction);
};

export const getOrderIcon = orderType => {
  switch (orderType) {
    case "translation":
      return "simple-icon-star";
      break;

    default:
      return "simple-icon-tag";
  }
};
const orderStates = [
  { id: "os_pending_admin_approval", value: "Pending Admin Approval" },
  { id: "os_approved_pending_on_bids", value: "Approved - Pending on Bids" },
  { id: "os_pending_bids_approval", value: "Pending Bids Approval" },
  { id: "os_order_in_progress", value: "Order In-Progress" },
  { id: "os_order_completed", value: "Order Completed" },
  { id: "os_order_cancelled", value: "Order cancelled" },
];

export const invoiceStatusColor = invoice => {
  if (invoice) {
    switch (invoice.status.id) {
      case orderStates[0].id:
        return { text: orderStates[0].value, color: "warning" };

      case orderStates[1].id:
        return { text: orderStates[1].value, color: "primary" };

      case orderStates[2].id:
        return { text: orderStates[2].value, color: "danger" };

      case orderStates[3].id:
        return { text: orderStates[3].value, color: "info" };

      case orderStates[4].id:
        return { text: orderStates[4].value, color: "success" };

      case orderStates[5].id:
        return { text: orderStates[5].value, color: "dark" };

      default:
        return { text: "No DATA", color: "light" };
    }
  } else {
    return { text: "No DATA", color: "light" };
  }
};
export const orderStatusColor = order => {
  if (order) {
    switch (order.status.id) {
      case orderStates[0].id:
        return { text: orderStates[0].value, color: "warning" };

      case orderStates[1].id:
        return { text: orderStates[1].value, color: "primary" };

      case orderStates[2].id:
        return { text: orderStates[2].value, color: "danger" };

      case orderStates[3].id:
        return { text: orderStates[3].value, color: "info" };

      case orderStates[4].id:
        return { text: orderStates[4].value, color: "success" };

      case orderStates[5].id:
        return { text: orderStates[5].value, color: "dark" };

      default:
        return { text: "No DATA", color: "light" };
    }
  } else {
    return { text: "No DATA", color: "light" };
  }
};
