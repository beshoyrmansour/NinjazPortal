import { ACCOUNT } from "../actions";

export const getaccountData = () => {
  console.log("getaccountData");
  return {
    type: ACCOUNT.SET_ACCOUNT_DATA,
    payload: {
      email: "myemail@ninjaz.ea",
      company: "NINJAZ",
      location: "Nairobi, Kenya",
      name: "Samir Mourtada",
    },
  };
};
export const setaccountData = newAccountData => {
  console.log("setaccountData");
  return {
    type: ACCOUNT.SET_ACCOUNT_DATA,
    payload: newAccountData,
  };
};
