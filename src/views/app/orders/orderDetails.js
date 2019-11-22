import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";
import { getAllOrdersList, setSelectedOrder } from "../../../redux/orders/actions";

import { NavLink } from "react-router-dom";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Row, Card, CardBody, CardTitle, Button, Badge } from "reactstrap";

import { useHistory } from "react-router-dom";

const OrderDetails = props => {
  let history = useHistory();
  console.log("match", props.match.params.id);

  return (
    <Fragment>
      <Row>
        <Colxx xxs="12">
          {/* <Breadcrumb heading="menu.orders.order_details" match={props.match} /> */}
          <Breadcrumb heading={`# ${props.match.params.id}`} match={props.match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Card className="mb-4 rounded shadow">
            <CardBody></CardBody>
          </Card>
        </Colxx>
      </Row>
    </Fragment>
  );
};

const mapStateToProps = ({ orders }) => ({
  allOrdersList: orders.allOrdersList,
});

export default connect(mapStateToProps, { getAllOrdersList, setSelectedOrder })(OrderDetails);
