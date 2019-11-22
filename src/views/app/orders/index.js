import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const AllOrders = React.lazy(() => import(/* webpackChunkName: "Orders" */ "./allOrders"));
const Orders = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/all`} />
      <Route path={`${match.url}/all`} render={props => <AllOrders {...props} />} />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Orders;
