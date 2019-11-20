import { SET_SELECTED_SERVICE } from "../actions";

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_SERVICE:
      return { ...state, selectedService:action.payload };
    // return { ...state, locale:action.payload};

    default:
      return { ...state };
  }
};
