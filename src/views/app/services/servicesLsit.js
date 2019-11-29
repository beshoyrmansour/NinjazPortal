import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllServicesTypes, setSelectedService } from "../../../redux/services/actions";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Row, Card, CardBody, CardTitle, Button } from "reactstrap";
// import { Redirect  } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ServicesLsit = props => {
  let history = useHistory();
  const RedirectToServvices = (service, type) => {
    props.setSelectedService(service);
    return history.push(type == "easy" ? "/app/services/easy" : "/app/services/advanced");
  };

  useEffect(() => {
    props.getAllServicesTypes();
    return () => {};
  }, []);

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
            {props.servicesTypes.length > 0 &&
              props.servicesTypes.map(serviceType => (
                <Card key={serviceType.id} className="mb-4 rounded-sm">
                  <CardBody>
                    <CardTitle>
                      <h2>{serviceType.name}</h2>
                    </CardTitle>
                    <Row>
                      {serviceType[serviceType.is_translation ? "TranslationTypes" : "Services"].map(service => (
                        <Colxx xxs="12" md="3">
                          {/* progress-banner */}
                          <Card key={service.id} className="mb-3  rounded card-with-shadow">
                            <CardBody className="justify-content-between d-flex flex-column align-items- ">
                              <CardTitle>
                                <h3 className="text-dark">{service.name}</h3>
                              </CardTitle>
                              {/* <div className={`justify-content-stretch d-flex flex-colmun align-items-center`}> */}
                              <Button color="primary" block onClick={() => RedirectToServvices(service, "easy")}>
                                <i className="simple-icon-emotsmile"></i> Easy Mode
                              </Button>
                              {service.has_advanced && (
                                <Button color="outline-dark" block onClick={() => RedirectToServvices(service, "advanced")}>
                                  <i className="simple-icon-clock"></i> advanced Mode
                                </Button>
                              )}
                              {/* </div> */}
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

const mapStateToProps = ({ services }) => ({
  servicesCategoryList: services.servicesCategoryList,
  servicesTypes: services.servicesTypes,
});

export default connect(mapStateToProps, { getAllServicesTypes, setSelectedService })(ServicesLsit);
