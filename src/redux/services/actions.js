import { SERVICES } from "../actions";
import { API_ENDPOINTS } from "../../constants/API_ENDPOINTS";
import Axios from "axios";

const mockServicesTypes = [
  {
    id: 1,
    name: "Translation",
    is_active: true,
    is_translation: true,

    Services: [],
    TranslationTypes: [
      {
        id: 1,
        name: "Medical Translation",
        is_translation: true,
        has_advanced: true,
      },
      {
        id: 2,
        name: "Legal Translation",
        is_translation: true,
        has_advanced: true,
      },
      {
        id: 3,
        name: "Financial Translation",
        is_translation: true,
        has_advanced: true,
      },
      {
        id: 4,
        name: "Subtitling",
        is_translation: true,
        has_advanced: true,
      },
      {
        id: 5,
        name: "Website localisation",
        is_translation: true,
        has_advanced: true,
      },
      {
        id: 6,
        name: "Interpretation",
        is_translation: true,
        has_advanced: true,
      },
      {
        id: 7,
        name: "Scientific translation",
        is_translation: true,
        has_advanced: true,
      },
      {
        id: 8,
        name: "Other translation service",
        is_translation: true,
        has_advanced: true,
      },
    ],
  },
  {
    id: 2,
    name: "Document Clearance",
    is_active: true,
    is_translation: false,

    Services: [
      {
        id: 2,
        fk_service_type: 0,
        name: "Pro",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 3,
        fk_service_type: 0,
        name: "Company Setup and Formation",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 4,
        fk_service_type: 0,
        name: "Attestation and Certification\r\n",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 5,
        fk_service_type: 0,
        name: "Registration for Patent, Copyright And Trademark",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 6,
        fk_service_type: 0,
        name: "Product Registration",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 7,
        fk_service_type: 0,
        name: "Other",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
    ],
    TranslationTypes: [],
  },
  {
    id: 3,
    name: "Legal Advice",
    is_active: true,
    is_translation: false,

    Services: [
      {
        id: 8,
        fk_service_type: 0,
        name: "Commercial and Corporate low",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 9,
        fk_service_type: 0,
        name: "Company incorporation",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 10,
        fk_service_type: 0,
        name: "Dispute resolution",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 11,
        fk_service_type: 0,
        name: "Immigration and citizenship",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 12,
        fk_service_type: 0,
        name: "Intellectual property low",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 13,
        fk_service_type: 0,
        name: "Real estate and property low",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 14,
        fk_service_type: 0,
        name: "Arbitration low",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 15,
        fk_service_type: 0,
        name: "Other",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
    ],
    TranslationTypes: [],
  },
  {
    id: 5,
    name: "SME Service",
    is_active: true,
    is_translation: false,
    Services: [
      {
        id: 16,
        fk_service_type: 0,
        name: "Outsourcing",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 17,
        fk_service_type: 0,
        name: "VAT registration",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 18,
        fk_service_type: 0,
        name: "SME Setup",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 19,
        fk_service_type: 0,
        name: "Business accounting",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 20,
        fk_service_type: 0,
        name: "Website/app creation",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 21,
        fk_service_type: 0,
        name: "PRO",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
      {
        id: 22,
        fk_service_type: 0,
        name: "Other",
        is_active: true,
        has_advanced: false,
        is_translation: false,
      },
    ],
    TranslationTypes: [],
  },
];

export const getAllServicesTypes = () => {
  console.log("getAllServicesTypes");
  Axios.get(`${API_ENDPOINTS.ALL_SERVICE_TYPES}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(response => console.log(response))
    .catch(err => console.log(err));
  // .then(data => console.log(data));
  return {
    type: SERVICES.GET_ALL_SERVICES_TYPES,
    payload: [...mockServicesTypes],
  };
};
export const setSelectedService = selectedService => {
  return {
    type: SERVICES.SET_SELECTED_SERVICE,
    payload: selectedService,
  };
};
