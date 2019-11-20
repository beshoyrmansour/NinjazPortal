import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const DashboardComp = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './dashboard')
);
const Dashboard = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      {/* <Redirect exact from={`${match.url}/`} to={`${match.url}`} /> */}
      <Route
        path={`${match.url}`}
        render={props => <DashboardComp {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Dashboard;
