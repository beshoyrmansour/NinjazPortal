import { SERVICES } from "../actions";

export const setSelectedService = selectedService => {
  console.log("setSelectedService", selectedService);
  return {
    type: SERVICES.SET_SELECTED_SERVICE,
    payload: selectedService
  };
};