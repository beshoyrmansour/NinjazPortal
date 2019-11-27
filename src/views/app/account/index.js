import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const AccountComp = React.lazy(() => import(/* webpackChunkName: "finance" */ "./account"));
const Account = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/all`} /> */}
      <Route path={`${match.url}/`} render={props => <AccountComp {...props} />} />
      {/* <Route path={`${match.url}/details/:id`} render={props => <InvoiceDetailsComp {...props} />} /> */}
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Account;
