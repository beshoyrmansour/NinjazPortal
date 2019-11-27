import { ACCOUNT } from "../actions";

const INIT_STATE = {
  accountData: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACCOUNT.SET_ACCOUNT_DATA:
      return Object.assign({}, state, {
        accountData: action.payload,
      });

    default:
      return { ...state };
  }
};
