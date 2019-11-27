import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";
import { getAllInvoicesList, setSelectedInvoice } from "../../../redux/invoices/actions";

import { NavLink } from "react-router-dom";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Row, Card, CardBody, CardTitle, Button, Badge } from "reactstrap";

import { useHistory } from "react-router-dom";
import { statusColor } from "../../../helpers/Utils";

function Finance() {
  return (
    <Fragment>
      <div>Finance111</div>
    </Fragment>
  );
}

const mapStateToProps = ({ invoices }) => ({
  allInvoicesList: invoices.allInvoicesList,
  invoiceStates: invoices.invoiceStates,
});

export default connect(mapStateToProps, { getAllInvoicesList, setSelectedInvoice })(Finance);
