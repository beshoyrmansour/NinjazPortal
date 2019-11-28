import React, { Fragment, useEffect, useState } from "react";

import { connect } from "react-redux";
import { getAllOrdersList, getOrderDetails } from "../../../redux/orders/actions";

import { NavLink } from "react-router-dom";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Row, Card, CardBody, CardTitle, Button, Badge } from "reactstrap";
import { findIndex } from "lodash";
import { useHistory } from "react-router-dom";

const OrderDetails = props => {
  const { selectedOrder, orderStates } = props;
  let history = useHistory();
  // const [_selectedOrder, set_selectedOrder] = useState({});
  const [currentOrderStates, setCurrentOrderStates] = useState([]);
  const [selectedOrderStatusIndex, setSelectedOrderStatusIndex] = useState(null);
  // console.log("match", props.match.params.id);
  const selectedOrderId = props.match.params.id;
  useEffect(() => {
    if (selectedOrderId) {
      props.getOrderDetails(selectedOrderId);
    } else {
      history.goBack();
    }
    return () => {};
  }, []);
  useEffect(() => {
    if (orderStates.length > 0 && selectedOrder.hasOwnProperty("id")) {
      setSelectedOrderStatusIndex(findIndex(orderStates, st => st.id === selectedOrder.status.id));
    }
    return () => {};
  }, [selectedOrder]);

  const selectedOrderStatusClass = index => {
    return selectedOrderStatusIndex > index
      ? "success"
      : selectedOrderStatusIndex === index
      ? "info"
      : "light" > index
      ? "success"
      : selectedOrderStatusIndex === index
      ? "info"
      : "light";
  };
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
            <CardBody>
              {selectedOrder ? (
                <Fragment>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center progress-line">
                    {orderStates.map((status, index) => (
                      <Button color={selectedOrderStatusClass(index)} className="m-1 status-step" size="xs">
                        {status.value}
                      </Button>
                    ))}
                  </div>
                </Fragment>
              ) : (
                <div class="loading" />
              )}
            </CardBody>
            <CardBody></CardBody>
          </Card>
        </Colxx>
      </Row>
    </Fragment>
  );
};

const mapStateToProps = ({ orders }) => ({
  orderStates: orders.orderStates,
  selectedOrder: orders.selectedOrder,
  // allOrdersList: orders.allOrdersList,
});

export default connect(mapStateToProps, { getAllOrdersList, getOrderDetails })(OrderDetails);
