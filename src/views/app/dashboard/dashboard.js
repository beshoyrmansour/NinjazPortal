import React, { Fragment, Component } from "react";

import { connect } from "react-redux";
import { getCustomerTopOrder, getAllOrdersList, setSelectedOrder } from "../../../redux/orders/actions";

import { NavLink } from "react-router-dom";
import { Row, Card, CardBody, CardTitle, Button } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import VideoPlayer from "../../../components/common/VideoPlayer";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import OrderList from "./orderList";

export class dashboard extends Component {
  componentWillMount() {
    this.props.getCustomerTopOrder();
  }
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12" md="12">
            <Breadcrumb heading="menu.dashboard" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" md="12" className="mb-4">
            <Card className="rounded shadow">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.place_order_now" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" md="4" className="mb-4">
                    <NavLink to="services/all">
                      <Button color="primary" block size="lg">
                        <span className="h3">
                          <i className="simple-icon-briefcase"></i> All Services
                        </span>
                      </Button>
                    </NavLink>
                  </Colxx>
                  <Colxx xxs="12" md="4" className="mb-4">
                    <NavLink to="services/easy">
                      <Button color="outline-primary" block size="lg">
                        <span className="h3">
                          <i className="simple-icon-emotsmile"></i> Easy mode
                        </span>
                      </Button>
                    </NavLink>
                  </Colxx>
                  <Colxx xxs="12" md="4" className="mb-4">
                    <NavLink to="services/advanced">
                      <Button color="outline-dark" block size="lg">
                        <span className="h3">
                          <i className="simple-icon-clock"></i> Advanced mode
                        </span>
                      </Button>
                    </NavLink>
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" md="4" className="mb-4">
            <OrderList odersData={this.props.allOrdersList} />
          </Colxx>
          <Colxx xxs="12" md="8" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.need_help" />
                </CardTitle>
                <VideoPlayer
                  autoplay={false}
                  controls={true}
                  controlBar={{
                    pictureInPictureToggle: false,
                  }}
                  className="video-js side-bar-video card-img-top mb-4"
                  poster="/assets/img/subpage-video-poster.jpg"
                  sources={[
                    {
                      src: "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4",
                      type: "video/mp4",
                    },
                  ]}
                />
                <p className="lead">
                  {/* <IntlMessages id="jumbotron.lead" /> */}
                  What is utility classes for typography
                </p>
                <hr className="my-4" />
                <p>
                  {/* <IntlMessages id="jumbotron.lead-detail" /> */}
                  This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. It
                  uses utility classes for typography and spacing to space content out within the larger container.
                </p>
                <p className="lead mb-0">
                  <Button color="primary" size="lg">
                    {/* <IntlMessages id="jumbotron.learn-more" /> */}
                    Learn More
                  </Button>
                </p>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ orders }) => ({
  allOrdersList: orders.allOrdersList,
  orderStates: orders.orderStates,
});

export default connect(mapStateToProps, { getCustomerTopOrder, getAllOrdersList, setSelectedOrder })(dashboard);
