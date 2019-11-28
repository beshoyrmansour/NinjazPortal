import React from "react";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card, CardBody, CardTitle, Badge } from "reactstrap";

import IntlMessages from "../../../helpers/IntlMessages";
import { getOrderIcon, orderStatusColor } from "../../../helpers/Utils";

const OrderList = props => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.orders" />
        </CardTitle>
        <div className="dashboard-list-with-user">
          <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: false }}>
            {props.odersData.map((order, index) => {
              return (
                <Card key={index} className=" mb-4 border-bottom  order-card">
                  <NavLink to={"/app/orders/details/" + order.id} className="d-flex flex-row align-items-baseline card-body">
                    <p src={order.thumb} alt={order.id} className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall">
                      <i className={getOrderIcon(order.type)}></i>
                    </p>

                    <div className="pl-3 pr-2 flex-grow-1 ">
                      <p className="font-weight-medium mb-0 "># {order.id}</p>
                      <p className=" mb-0 text-small">
                        Last Activity: <span className="text-muted"> {order.status.time}</span>
                      </p>
                    </div>
                    <Badge color={"outline-" + orderStatusColor(order).color} pill className="font-weight-medium mb-2 ">
                      <span className="">{orderStatusColor(order).text}</span>
                    </Badge>
                  </NavLink>
                </Card>
              );
            })}
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
};
export default OrderList;
