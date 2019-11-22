import { combineReducers } from "redux";
import settings from "./settings/reducer";
import menu from "./menu/reducer";
import services from "./services/reducer";
import orders from "./orders/reducer";

const reducers = combineReducers({
  orders,
  services,
  menu,
  settings,
});

export default reducers;
