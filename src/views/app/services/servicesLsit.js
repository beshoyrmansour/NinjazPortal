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
      services: [
        { title: "Legal", id: "c1s1" },
        { title: "Technical", id: "c1s2" },
        { title: "Website localization", id: "c1s3" },
        { title: "Marketing", id: "c1s4" },
        { title: "Medical", id: "c1s5" },
        { title: "Literature", id: "c1s6" },
        { title: "Other", id: "c2s7" }
      ]
    },
    {
      id: "c2",
      title: "Document Clearance",
      services: [
        { title: "PRO", id: "c2s1" },
        { title: "Company setup and formation", id: "c2s2" },
        { title: "Attestation and certification", id: "c2s3" },
        { title: "Registration for Patent, copyright and trademark", id: "c2s4" },
        { title: "Product Registration", id: "c2s5" },
        { title: "Other", id: "c2s6" }
      ]
    },
    {
      id: "c3",
      title: "Legal Advice",
      services: [
        { title: "Commercial and Corporate low", id: "c3s1" },
        { title: "Company incorporation", id: "c3s2" },
        { title: "Dispute resolution", id: "c3s3" },
        { title: "Immigration and citizenship", id: "c3s4" },
        { title: "Intellectual property low", id: "c3s5" },
        { title: "Real estate and property low", id: "c3s6" },
        { title: "Arbitration low", id: "c3s7" },
        { title: "Other", id: "c3s8" }
      ]
    },
    {
      id: "c4",
      title: "SME Services",
      services: [
        { title: "Outsourcing", id: "c4s1" },
        { title: "VAT registration", id: "c4s2" },
        { title: "SME Setup", id: "c4s3" },
        { title: "Business accounting", id: "c4s4" },
        { title: "Website/app creation", id: "c4s5" },
        { title: "PRO", id: "c4s6" },
        { title: "Other", id: "c4s7" }
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
                              <Button color="outline-dark" className=" ml-2" onClick={() => RedirectToServvices(service, "advanced")}>
                                advanced Mode
                              </Button>
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
