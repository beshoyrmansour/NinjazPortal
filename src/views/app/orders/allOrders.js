import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";
import { getAllOrdersList, setSelectedOrder } from "../../../redux/orders/actions";

import { NavLink } from "react-router-dom";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Row, Card, CardBody, CardTitle, Button, Badge } from "reactstrap";

import { useHistory } from "react-router-dom";
import { orderStatusColor } from "../../../helpers/Utils";

const AllOeders = props => {
  useEffect(() => {
    props.getAllOrdersList();
    return () => {
      // cleanup
    };
  }, []);

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
          <Card className="mb-4 rounded shadow">
            <CardBody></CardBody>
          </Card>

          {props.allOrdersList.length > 0 ? (
            props.allOrdersList.map(order => <OrderCard key={order.id} order={{ ...order }} orderStates={{ ...props.orderStates }} />)
          ) : (
            <Fragment>
              <div className="display-1 text-center m-5 pt-5 text-info">No Orders yet</div>
              <div className="text-center">
                <NavLink to={`/app/services`} className="display-3 py-5 text-dark">
                  Let's Place your first order
                </NavLink>
              </div>
            </Fragment>
          )}
        </Colxx>
      </Row>
    </Fragment>
  );
};

const mapStateToProps = ({ orders }) => ({
  allOrdersList: orders.allOrdersList,
  orderStates: orders.orderStates,
});

export default connect(mapStateToProps, { getAllOrdersList, setSelectedOrder })(AllOeders);

function OrderCard(props) {
  let statusObj = orderStatusColor(props.order, props.orderStates);
  return (
    <Card className="d-flex flex-row mb-3 order-card">
      <NavLink to={`/app/orders/details/${props.order.id}`} className="d-flex flex-grow-1 min-width-zero">
        <CardBody className="d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
          <h3 location={{}} className="list-item-heading mb-1 truncate w-20 w-xs-100">
            <strong>
              <IntlMessages id="orders.OrderId" />
            </strong>
            {props.order.OrderCode}
          </h3>
          <p className="mb-1 text-muted text-small w-15 w-xs-100">{props.order.serviceType}</p>
          <p className="mb-1 text-muted text-small w-15 w-xs-100">
            <strong>{props.order.total}</strong> - {props.order.paymentMethod}
          </p>
          <p className="mb-1 text-muted text-small w-15 w-xs-100">{props.order.updated_at}</p>

          <div className="w-15 w-xs-100 text-right">
            {/* <p className="mb-1 text-muted text-small w-15 w-xs-100">{}</p> */}
            <Badge color={statusObj.color} pill>
              {statusObj.text}
            </Badge>
          </div>
        </CardBody>
      </NavLink>
    </Card>
  );
}
