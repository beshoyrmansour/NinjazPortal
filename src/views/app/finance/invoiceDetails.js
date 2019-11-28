import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";
import { getAllInvoicesList, getInvoiceDetails } from "../../../redux/invoices/actions";

import { useHistory } from "react-router-dom";

function InvoiceDetails(props) {
  let history = useHistory();
  const selectedInvoiceId = props.match.params.id;
  useEffect(() => {
    if (selectedInvoiceId) {
      props.getInvoiceDetails(selectedInvoiceId);
    } else {
      history.goBack();
    }
    return () => {
      props.getInvoiceDetails("");
    };
  }, []);
  return <Fragment>{props.selectedInvoice.hasOwnProperty("id") && <div>{props.selectedInvoice.id}</div>}</Fragment>;
}

const mapStateToProps = ({ invoices }) => ({
  allInvoicesList: invoices.allInvoicesList,
  selectedInvoice: invoices.selectedInvoice,
});

export default connect(mapStateToProps, { getAllInvoicesList, getInvoiceDetails })(InvoiceDetails);
