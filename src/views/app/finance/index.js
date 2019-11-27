import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const FinanceComp = React.lazy(() => import(/* webpackChunkName: "finance" */ "./finance"));
const InvoiceDetailsComp = React.lazy(() => import(/* webpackChunkName: "finance" */ "./invoiceDetails"));
const Finance = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/all`} />
      <Route path={`${match.url}/all`} render={props => <FinanceComp {...props} />} />
      <Route path={`${match.url}/details/:id`} render={props => <InvoiceDetailsComp {...props} />} />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Finance;
