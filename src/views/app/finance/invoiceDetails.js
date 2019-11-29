import React, { Fragment, useEffect, useState } from "react";

import { connect } from "react-redux";

import { getAllInvoicesList, getInvoiceDetails } from "../../../redux/invoices/actions";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import { Row, Card, CardBody, CardTitle, Button, Badge } from "reactstrap";
import { useHistory } from "react-router-dom";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { findIndex } from "lodash";

function InvoiceDetails(props) {
  const { selectedInvoice, invoiceStates } = props;
  const [selectedInvoiceStatusIndex, setSelectedInvoiceStatusIndex] = useState(null);

  const selectedInvoiceStatusClass = index => {
    return selectedInvoiceStatusIndex > index
      ? "success"
      : selectedInvoiceStatusIndex === index
      ? "info"
      : "light" > index
      ? "success"
      : selectedInvoiceStatusIndex === index
      ? "info"
      : "light";
  };

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

  useEffect(() => {
    if (invoiceStates.length > 0 && selectedInvoice.hasOwnProperty("id")) {
      setSelectedInvoiceStatusIndex(findIndex(invoiceStates, st => st.id === selectedInvoice.status.id));
    }
    return () => {};
  }, [selectedInvoice]);
  return (
    <Fragment>
      <Row>
        <Colxx xxs="12">
          {/* <Breadcrumb heading="menu.invoices.invoice_details" match={props.match} /> */}
          <Breadcrumb heading={`# ${props.match.params.id}`} match={props.match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Card className="mb-4 rounded shadow">
            <CardBody>
              {selectedInvoice ? (
                <Fragment>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center progress-line">
                    {invoiceStates.map((status, index) => (
                      <Button color={selectedInvoiceStatusClass(index)} className="m-1 status-step" size="xs">
                        {status.value}
                      </Button>
                    ))}
                  </div>
                </Fragment>
              ) : (
                <div class="loading" />
              )}
            </CardBody>
            <CardBody></CardBody>
          </Card>
        </Colxx>
      </Row>
    </Fragment>
  );
}

const mapStateToProps = ({ invoices }) => ({
  allInvoicesList: invoices.allInvoicesList,
  selectedInvoice: invoices.selectedInvoice,
  invoiceStates: invoices.invoiceStates,
});

export default connect(mapStateToProps, { getAllInvoicesList, getInvoiceDetails })(InvoiceDetails);
