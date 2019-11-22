import React, { Fragment } from "react";

import { connect } from "react-redux";
import { setSelectedService } from "../../../redux/services/actions";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Row, Card, CardBody, CardTitle, Button } from "reactstrap";

import { useHistory } from "react-router-dom";

const AllOeders = props => {
  return (
    <Fragment>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.orders.all_orders" match={props.match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Card>
            <CardBody></CardBody>
          </Card>
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default AllOeders;
