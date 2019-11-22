import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const AllOrders = React.lazy(() => import(/* webpackChunkName: "Orders" */ "./allOrders"));
const OrderDetails = React.lazy(() => import(/* webpackChunkName: "Orders" */ "./orderDetails"));
const Orders = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/all`} />
      <Route path={`${match.url}/all`} render={props => <AllOrders {...props} />} />
      <Route path={`${match.url}/details/:id`} render={props => <OrderDetails {...props} />} />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Orders;
