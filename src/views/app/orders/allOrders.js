import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";
import { getAllOrdersList, setSelectedOrder } from "../../../redux/orders/actions";

import { NavLink } from "react-router-dom";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Row, Card, CardBody, CardTitle, Button, Badge } from "reactstrap";

import { useHistory } from "react-router-dom";

const AllOeders = props => {
  useEffect(() => {
    props.getAllOrdersList();
    return () => {
      // cleanup
    };
  }, []);

  const statusColor = order => {
    return "primary";
  };
  console.log("props.allOrdersList", props.allOrdersList);

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
            props.allOrdersList.map(order => (
              <Card className="d-flex flex-row mb-3" key={order.id}>
                <NavLink to={`/app/orders/details/${order.id}`} className="d-flex flex-grow-1 min-width-zero">
                  <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                    <h3 location={{}} className="list-item-heading mb-1 truncate w-20 w-xs-100">
                      {order.id}
                    </h3>
                    <p className="mb-1 text-muted text-small w-15 w-xs-100">{order.serviceType}</p>
                    <p className="mb-1 text-muted text-small w-15 w-xs-100">
                      <strong>{order.total}</strong> - {order.paymentMethod}
                    </p>
                    <p className="mb-1 text-muted text-small w-15 w-xs-100">{order.status.time}</p>

                    <div className="w-15 w-xs-100 text-right">
                      {/* <p className="mb-1 text-muted text-small w-15 w-xs-100">{}</p> */}
                      <Badge color={statusColor(order)} pill>
                        {order.status.value}
                      </Badge>
                    </div>
                  </CardBody>
                </NavLink>
              </Card>
            ))
          ) : (
            <div className="display-1 text-center m-5 py-5 text-info">Please Select Service</div>
          )}
        </Colxx>
      </Row>
    </Fragment>
  );
};

const mapStateToProps = ({ orders }) => ({
  allOrdersList: orders.allOrdersList,
});

export default connect(mapStateToProps, { getAllOrdersList, setSelectedOrder })(AllOeders);
