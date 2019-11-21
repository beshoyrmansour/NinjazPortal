import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSelectedService } from "../../../redux/services/actions";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Row, Card, CardBody, CardTitle, Button } from "reactstrap";
// import { Redirect  } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ServicesLsit = props => {
  const servicesCategoryList = [
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
  ];

  let history = useHistory();
  const RedirectToServvices = (service, type) => {
    props.setSelectedService(service);
    return history.push(type == "easy" ? "/app/services/easy" : "/app/services/advanced");
    // type=="easy"?

    // <Redirect to={`${props.match.url}/easy`}>:
    // <Redirect to={`${props.match.url}/advanced`}/>)
  };
  return (
    <div>
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.services.all_services" match={props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-4">
            {servicesCategoryList.map(cateogry => (
              <Card key={cateogry.id} className="mb-4 rounded">
                <CardBody>
                  <CardTitle>
                    <h2>{cateogry.title}</h2>
                  </CardTitle>
                  <Row>
                    {cateogry.services.map(service => (
                      <Colxx xxs="12" md="3">
                        {/* progress-banner */}
                        <Card key={service.id} className="mb-3  rounded shadow">
                          <CardBody className="justify-content-between d-flex flex-column align-items- ">
                            <CardTitle>
                              <h3 className="text-dark">{service.title}</h3>
                            </CardTitle>
                            <div className="justify-content-stretch d-flex flex-row align-items-center">
                              <Button color="primary" className=" " onClick={() => RedirectToServvices(service, "easy")}>
                                Easy Mode
                              </Button>
                              {service.hasAdvancedOption && 
                              <Button color="outline-dark" className=" ml-2" onClick={() => RedirectToServvices(service, "advanced")}>
                                advanced Mode
                              </Button>}
                            </div>
                          </CardBody>
                        </Card>
                      </Colxx>
                    ))}
                  </Row>
                </CardBody>
              </Card>
            ))}
          </Colxx>
        </Row>
      </Fragment>
    </div>
  );
};

const mapStateToProps = state => ({
  // isFetchingDeviceData: state.devicesReducer.isFetchingDeviceData,
  // language: state.i18nReducer.language,
  // isNoDeviceSelected: state.devicesReducer.isNoDeviceSelected
});

const mapDispatchToProps = dispatch => {
  // return bindActionCreators({ ...servicesActions }, dispatch);
};
export default connect(mapStateToProps, { setSelectedService })(ServicesLsit);
