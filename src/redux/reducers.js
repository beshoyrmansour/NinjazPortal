import { combineReducers } from "redux";
import settings from "./settings/reducer";
import menu from "./menu/reducer";
import services from "./services/reducer";

const reducers = combineReducers({
  services,
  menu,
  settings
});

export default reducers;
