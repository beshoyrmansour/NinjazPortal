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
            {props.servicesCategoryList.map(cateogry => (
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
                            <div className={`justify-content-stretch d-flex flex-row align-items-center`}>
                              <Button color="primary" className={`${service.hasAdvancedOption?"":"btn-block"}`} onClick={() => RedirectToServvices(service, "easy")}>
                                <i className="simple-icon-emotsmile"></i> Easy Mode
                              </Button>
                              {service.hasAdvancedOption && (
                                <Button color="outline-dark" className=" ml-2" onClick={() => RedirectToServvices(service, "advanced")}>
                                  <i className="simple-icon-clock"></i> advanced Mode
                                </Button>
                              )}
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

const mapStateToProps = ({ services }) => ({
  servicesCategoryList: services.servicesCategoryList,
});

const mapDispatchToProps = dispatch => {
  // return bindActionCreators({ ...servicesActions }, dispatch);
};
export default connect(mapStateToProps, { setSelectedService })(ServicesLsit);
