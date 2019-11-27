import React, { Fragment, useEffect, useState } from "react";

import { connect } from "react-redux";
import { getaccountData, setaccountData } from "../../../redux/account/actions";

import { NavLink } from "react-router-dom";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Row, Card, CardBody, CardTitle, Button, Badge, Form, FormGroup, Input, Label } from "reactstrap";

import SingleLightbox from "../../../components/pages/SingleLightbox";
// import GalleryDetail from "../../../containers/pages/GalleryDetail";
import UserFollow from "../../../components/common/UserFollow";
import UserCardBasic from "../../../components/cards/UserCardBasic";
// import recentPostsData from "../../../data/recentposts";
import RecentPost from "../../../components/common/RecentPost";
import Post from "../../../components/cards/Post";
import { injectIntl } from "react-intl";
function Account(props) {
  const { messages } = props.intl;
  const { accountData } = props;

  const [isEditingMode, setIsEditingMode] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    company: "",
    location: "",
    name: "",
  });
  const saveProfileChanges = () => {
    setIsEditingMode(false);
    props.setaccountData(userData);
  };

  const loadUserDataformProps = propsAccountData => {
    setUserData({
      email: propsAccountData.email,
      company: propsAccountData.company,
      location: propsAccountData.location,
      name: propsAccountData.name,
    });
  };
  const cancelProfileEdit = () => {
    setIsEditingMode(false);
    loadUserDataformProps(accountData);
  };
  useEffect(() => {
    props.getaccountData();
    return () => {};
  }, []);
  useEffect(() => {
    loadUserDataformProps(accountData);
    return () => {};
  }, [accountData]);

  return (
    <Fragment>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.orders.all_orders" match={props.match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-5">
          <Card>
            <SingleLightbox thumb="/assets/img/ybg.png" large="/assets/img/ybg.png" className="social-header card-img" />
          </Card>
        </Colxx>
        <Colxx xxs="12" className="col-left">
          <SingleLightbox
            thumb="/assets/img/user-profile.png"
            large="/assets/img/user-profile.png"
            className="img-thumbnail card-img social-profile-img"
          />
          <Card className="mb-4 rounded shadow">
            <CardBody>
              <div className="text-center pt-4">
                {!isEditingMode ? (
                  <p className="list-item-heading pt-2">{userData.name}</p>
                ) : (
                  <div className="d-flex flex-column">
                    <p className="text-muted mb-2">
                      <IntlMessages id="pages.name" />
                    </p>
                    <Input
                      className="mb-4 text-center"
                      type="text"
                      name="name"
                      placeholder={messages["pages.name"]}
                      value={userData.name}
                      onChange={e => {
                        setUserData({ ...userData, name: e.target.value });
                      }}
                    />
                  </div>
                )}
                {!isEditingMode && (
                  <Button color="outline-primary" className="px-4" onClick={() => setIsEditingMode(true)} disabled={isEditingMode}>
                    Edit profile
                  </Button>
                )}
              </div>
              {/* <div className="text-center pt-4">
              </div> */}
              {/* <p className="mb-3">
                I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python
                and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that
                delight and inform. I do it well.
              </p> */}
              <p className="text-muted mb-2">
                <IntlMessages id="pages.email" />
              </p>
              {!isEditingMode ? (
                <p className="mb-3">{userData.email}</p>
              ) : (
                <Input
                  className="mb-4"
                  type="email"
                  name="email"
                  placeholder={messages["form.email"]}
                  value={userData.email}
                  onChange={e => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                />
              )}
              <p className="text-muted mb-2">
                <IntlMessages id="pages.location" />
              </p>
              {!isEditingMode ? (
                <p className="mb-3">{userData.location}</p>
              ) : (
                <Input
                  className="mb-4"
                  type="text"
                  name="location"
                  placeholder={messages["pages.location"]}
                  value={userData.location}
                  onChange={e => {
                    setUserData({ ...userData, location: e.target.value });
                  }}
                />
              )}
              <p className="text-muted mb-2">
                <IntlMessages id="pages.company" />
              </p>
              {!isEditingMode ? (
                <p className="mb-3">{userData.company}</p>
              ) : (
                <Input
                  className="mb-4"
                  type="text"
                  name="company"
                  placeholder={messages["pages.company"]}
                  value={userData.company}
                  onChange={e => {
                    setUserData({ ...userData, company: e.target.value });
                  }}
                />
              )}
              {isEditingMode && (
                <div className="d-flex justify-content-center my-4">
                  <Button color="primary" className="px-4 mx-2" onClick={saveProfileChanges}>
                    Save
                  </Button>
                  <Button color="outline-primary" className="px-4 mx-2" onClick={cancelProfileEdit}>
                    Cancel
                  </Button>
                </div>
              )}
              <p className="text-muted text-small mb-2">
                <IntlMessages id="pages.used_services" />
              </p>
              <p className="mb-3">
                <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                  Translation - Arabic to Danish
                </Badge>
                <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                  Document Clearance - Company setup and formation
                </Badge>
                <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                  Legal Advice - Arbitration low
                </Badge>
              </p>
              {/* <p className="text-muted text-small mb-2">
                <IntlMessages id="menu.contact" />
              </p>
              <div className="social-icons">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <NavLink to="#">
                      <i className="simple-icon-social-facebook"></i>
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink to="#">
                      <i className="simple-icon-social-twitter"></i>
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink to="#">
                      <i className="simple-icon-social-instagram"></i>
                    </NavLink>
                  </li>
                </ul>
              </div> */}
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="pages.feedback" />
              </CardTitle>
              {/* <GalleryDetail /> */}
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </Fragment>
  );
}
const mapStateToProps = ({ account }) => ({
  accountData: account.accountData,
});

export default injectIntl(connect(mapStateToProps, { getaccountData, setaccountData })(Account));
