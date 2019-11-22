import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const ServicesLsit = React.lazy(() => import(/* webpackChunkName: "second" */ "./servicesLsit"));
const OneStepService = React.lazy(() => import(/* webpackChunkName: "second" */ "./oneStepServiceMode"));
const MultiStepService = React.lazy(() => import(/* webpackChunkName: "second" */ "./multiStepServiceMode"));

const Services = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/all`} />
      <Route path={`${match.url}/all`} render={props => <ServicesLsit {...props} />} />
      <Route path={`${match.url}/easy`} render={props => <OneStepService {...props} />} />
      <Route path={`${match.url}/advanced`} render={props => <MultiStepService {...props} />} />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Services;
