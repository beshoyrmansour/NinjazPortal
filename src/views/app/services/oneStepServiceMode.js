import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, CardTitle, Button } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
// import DropzoneExample from "../../../../containers/forms/DropzoneExample";

export default class MultiStepServiceMode extends Component {
  render() {
    console.log("MultiStepServiceMode Comp");
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
            <p>
              <IntlMessages id="menu.services.one_step_service_mode" />
            </p>
            {/* <Row className="mb-4">
              <Colxx xxs="12">
                <Card>
                  <CardBody>
                    <CardTitle>
                      <IntlMessages id="form-components.dropzone" />
                    </CardTitle>
                    <DropzoneExample ref={node => (this.dropzone = node)} />
                  </CardBody>
                </Card>
              </Colxx>
               </Row>*/}
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
