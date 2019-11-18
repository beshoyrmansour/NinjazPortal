import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const MainDashboard = React.lazy(() => import(/* webpackChunkName: "second" */ "./mainDashboard"));
const SecondMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/main-dashboard`} />
      <Route path={`${match.url}/main-dashboard`} render={props => <MainDashboard {...props} />} />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default SecondMenu;
