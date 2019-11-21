import { SERVICES } from "../actions";

const INIT_STATE = {
  servicesCategoryList :[
    {
      id: "c1",
      title: "Translation Services",
      hasAdvancedOption:true,
      services: [
        { title: "Legal", id: "c1s1" ,hasAdvancedOption:true,},
        { title: "Technical", id: "c1s2" ,hasAdvancedOption:true,},
        { title: "Website localization", id: "c1s3" ,hasAdvancedOption:true,},
        { title: "Marketing", id: "c1s4" ,hasAdvancedOption:true,},
        { title: "Medical", id: "c1s5" ,hasAdvancedOption:true,},
        { title: "Literature", id: "c1s6" ,hasAdvancedOption:true,},
        { title: "Other", id: "c2s7" ,hasAdvancedOption:true,},
      ]
    },
    {
      id: "c2",
      title: "Document Clearance",
      hasAdvancedOption:false,
      services: [
        { title: "PRO", id: "c2s1" ,hasAdvancedOption:false},
        { title: "Company setup and formation", id: "c2s2" ,hasAdvancedOption:false},
        { title: "Attestation and certification", id: "c2s3" ,hasAdvancedOption:false},
        { title: "Registration for Patent, copyright and trademark", id: "c2s4" ,hasAdvancedOption:false},
        { title: "Product Registration", id: "c2s5" ,hasAdvancedOption:false},
        { title: "Other", id: "c2s6" ,hasAdvancedOption:false},
      ]
    },
    {
      id: "c3",
      title: "Legal Advice",
      hasAdvancedOption:false,
      services: [
        { title: "Commercial and Corporate low", id: "c3s1" ,hasAdvancedOption:false},
        { title: "Company incorporation", id: "c3s2" ,hasAdvancedOption:false},
        { title: "Dispute resolution", id: "c3s3" ,hasAdvancedOption:false},
        { title: "Immigration and citizenship", id: "c3s4" ,hasAdvancedOption:false},
        { title: "Intellectual property low", id: "c3s5" ,hasAdvancedOption:false},
        { title: "Real estate and property low", id: "c3s6" ,hasAdvancedOption:false},
        { title: "Arbitration low", id: "c3s7" ,hasAdvancedOption:false},
        { title: "Other", id: "c3s8" ,hasAdvancedOption:false},
      ]
    },
    {
      id: "c4",
      title: "SME Services",
      hasAdvancedOption:false,
      services: [
        { title: "Outsourcing", id: "c4s1" , hasAdvancedOption:false},
        { title: "VAT registration", id: "c4s2" , hasAdvancedOption:false},
        { title: "SME Setup", id: "c4s3" , hasAdvancedOption:false},
        { title: "Business accounting", id: "c4s4" , hasAdvancedOption:false},
        { title: "Website/app creation", id: "c4s5" , hasAdvancedOption:false},
        { title: "PRO", id: "c4s6" , hasAdvancedOption:false},
        { title: "Other", id: "c4s7" , hasAdvancedOption:false},
      ]
    }
  ],
  popularLanguages:[
    {
    id:"1",
    languageName:"Arabic"
  },
    {
    id:"2",
    languageName:"English"
  },
    {
    id:"3",
    languageName:"French"
  },
    {
    id:"4",
    languageName:"German"
  },
    {
    id:"5",
    languageName:"Spanish"
  },
  ],
  selectedService:{}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SERVICES.LOAD_SERVICES_CATEGORY_LIST:
      return { ...state, servicesCategoryList:action.payload };
     return 
    case SERVICES.SET_SELECTED_SERVICE:
      return { ...state, selectedService:action.payload };
    // return { ...state, locale:action.payload};

    default:
      return { ...state };
  }
};
