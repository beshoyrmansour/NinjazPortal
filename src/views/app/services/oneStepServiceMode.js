import React, { useState, useEffect, useRef, Fragment } from "react";

import { connect } from "react-redux";
import { getAllServicesTypes, setSelectedService } from "../../../redux/services/actions";
import { injectIntl } from "react-intl";

import { Row, Card, CardBody, CardTitle, Button } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Dropzone from "../../../components/common/Dropzone";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import { flattenDeep } from "lodash";

import Select, { components } from "react-select";
const CustomSelectInput = props => {
  var customProps = Object.assign({}, props);
  delete customProps.autoCorrect;
  delete customProps.autoCapitalize;
  return <components.Input {...customProps} />;
};

const OneStepServiceMode = props => {
  const refZone = useRef(null);
  const { servicesTypes } = props;
  const [localServicesList, setLocalServicesList] = useState([]);
  const fillServicesList = () => {
    let newServicesList = [];
    servicesTypes.forEach(serviceType => {
      // newServicesList.push([...serviceType.services.filter(service => service.hasAdvancedOption)]);
      newServicesList.push([...serviceType[serviceType.is_translation ? "TranslationTypes" : "Services"]]);
    });
    setLocalServicesList(flattenDeep(newServicesList));
  };
  const handleSelectedServiceChange = service => {
    props.setSelectedService(service);
  };
  useEffect(() => {
    if (servicesTypes.length > 0) {
      fillServicesList();
    } else {
      props.getAllServicesTypes();
    }
    return () => {
      props.setSelectedService({});
    };
  }, []);

  useEffect(() => {
    fillServicesList();
    return () => {};
  }, [servicesTypes]);

  return (
    <Fragment>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.services.one_step_service_mode" match={props.match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card className="rounded shadow">
            <CardBody>
              <Select
                components={{ Input: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name"
                autoFocus
                value={props.selectedService}
                getOptionLabel={option => option.name}
                onChange={handleSelectedServiceChange}
                options={localServicesList}
                //   getOptionValue={option => option}
              />
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" className="mb-4">
          <Row className="mb-4">
            <Colxx xxs="12">
              <Card>
                {props.selectedService.hasOwnProperty("id") ? (
                  <CardBody className="wizard wizard-default">
                    <CardTitle>
                      <IntlMessages id="form-components.dropzone" />
                    </CardTitle>
                    <Dropzone ref={refZone} />
                  </CardBody>
                ) : (
                  <div className="display-1 text-center m-5 py-5 text-info">Please Select Service</div>
                )}
              </Card>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </Fragment>
  );
};

const mapStateToProps = ({ services }) => ({
  popularLanguages: services.popularLanguages,
  servicesCategoryList: services.servicesCategoryList,
  servicesTypes: services.servicesTypes,
  selectedService: services.selectedService,
});
export default injectIntl(connect(mapStateToProps, { getAllServicesTypes, setSelectedService })(OneStepServiceMode));
