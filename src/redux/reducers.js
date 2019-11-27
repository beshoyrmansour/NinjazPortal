import { combineReducers } from "redux";
import settings from "./settings/reducer";
import menu from "./menu/reducer";
import services from "./services/reducer";
import orders from "./orders/reducer";
import invoices from "./invoices/reducer";
import account from "./account/reducer";

const reducers = combineReducers({
  orders,
  services,
  menu,
  settings,
  invoices,
  account,
});

export default reducers;
