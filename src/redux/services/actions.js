import { SET_SELECTED_SERVICE } from "../actions";

export const setSelectedService = selectedService => {
  console.log("setSelectedService", selectedService);
  return {
    type: SET_SELECTED_SERVICE,
    payload: selectedService
  };
};
