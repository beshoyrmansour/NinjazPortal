import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { setSelectedService } from "../../../redux/services/actions";
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

class OneStepServiceMode extends Component {
  constructor(props) {
    super(props);
    this.handleSelectedServiceChange = this.handleSelectedServiceChange.bind(this);
    this.state = {
      _localServicesList: [],
    };
  }
  handleSelectedServiceChange(service) {
    this.props.setSelectedService(service);
  }
  fill_localServicesList() {
    let newServicesList = [];
    if (this.props.servicesCategoryList.length > 0) {
      this.props.servicesCategoryList.forEach(cat => {
        // newServicesList.push([...cat.services.filter(service => service.hasAdvancedOption)]);
        newServicesList.push([...cat.services]);
      });
      this.setState({ _localServicesList: flattenDeep(newServicesList) });
    }
  }
  componentDidMount() {
    this.fill_localServicesList();
  }
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.services.one_step_service_mode" match={this.props.match} />
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
                  value={this.props.selectedService}
                  getOptionLabel={option => option.title}
                  onChange={this.handleSelectedServiceChange}
                  options={this.state._localServicesList}
                  //   getOptionValue={option => option}
                />
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="12" className="mb-4">
            <Row className="mb-4">
              <Colxx xxs="12">
                <Card>
                  {this.props.selectedService.hasOwnProperty("id") ? (
                    <CardBody  className="wizard wizard-default">
                      <CardTitle>
                        <IntlMessages id="form-components.dropzone" />
                      </CardTitle>
                      <Dropzone ref={node => (this.dropzone = node)} />
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
  }
}
const mapStateToProps = ({ services }) => ({
  popularLanguages: services.popularLanguages,
  servicesCategoryList: services.servicesCategoryList,
  selectedService: services.selectedService,
});
export default injectIntl(connect(mapStateToProps, { setSelectedService })(OneStepServiceMode));
