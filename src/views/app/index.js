import React, { Component, Suspense } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../../layout/AppLayout";

const DashboardWrapper = React.lazy(() => import(/* webpackChunkName: "viwes-gogo" */ "./dashboard"));
const ServicesMenu = React.lazy(() => import(/* webpackChunkName: "viwes-second-menu" */ "./services"));
const OrderMenu = React.lazy(() => import(/* webpackChunkName: "viwes-second-menu" */ "./orders"));
const BlankPage = React.lazy(() => import(/* webpackChunkName: "viwes-blank-page" */ "./blank-page"));

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
              <Route path={`${match.url}/dashboard`} render={props => <DashboardWrapper {...props} />} />
              <Route path={`${match.url}/services`} render={props => <ServicesMenu {...props} />} />
              <Route path={`${match.url}/orders`} render={props => <OrderMenu {...props} />} />
              <Route path={`${match.url}/blank-page`} render={props => <BlankPage {...props} />} />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
