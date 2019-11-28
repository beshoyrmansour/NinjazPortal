import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";
import { getAllInvoicesList, setSelectedInvoice } from "../../../redux/invoices/actions";

import { NavLink } from "react-router-dom";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { Row, Card, CardBody, CardTitle, Button, Badge } from "reactstrap";

import { useHistory } from "react-router-dom";
import { invoiceStatusColor } from "../../../helpers/Utils";

function Finance(props) {
  
  useEffect(() => {
    props.getAllInvoicesList();
    return () => {
      // cleanup
    };
  }, []);
  return (
    <Fragment>
      <Row>
        <Colxx xxs="12" md="12">
          <Breadcrumb heading="menu.finance" match={props.match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" md="12" className="mb-4">
          <Card className="rounded shadow">
            <CardBody></CardBody>
          </Card>
        </Colxx>
        <Colxx xxs="12" md="12" className="mb-4">
          {props.allInvoicesList.length > 0 ? (
            props.allInvoicesList.map(invoice => <InvoiceCard key={invoice.id} invoice={{ ...invoice }} invoiceStates={{ ...props.invoiceStates }} />)
          ) : (
            <Fragment>
              <div className="display-1 text-center m-5 pt-5 text-info">No Invoices yet</div>
              <div className="text-center">
                <NavLink to={`/app/services`} className="display-3 py-5 text-dark">
                  Let's Place an order
                </NavLink>
              </div>
            </Fragment>
          )}
        </Colxx>
      </Row>
    </Fragment>
  );
}

const mapStateToProps = ({ invoices }) => ({
  allInvoicesList: invoices.allInvoicesList,
  invoiceStates: invoices.invoiceStates,
});

export default connect(mapStateToProps, { getAllInvoicesList, setSelectedInvoice })(Finance);

function InvoiceCard(props) {
  let statusObj = invoiceStatusColor(props.invoice, props.invoiceStates);
  return (
    <Card className="d-flex flex-row mb-3 invoice-card">
      <NavLink to={`/app/finance/details/${props.invoice.id}`} className="d-flex flex-grow-1 min-width-zero">
        <CardBody className="d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
          <h3 location={{}} className="list-item-heading mb-1 truncate w-20 w-xs-100">
            <strong>
              <IntlMessages id="invoices.invoiceId" />
            </strong>
            {props.invoice.id}
          </h3>
          <p className="mb-1 text-muted text-small w-15 w-xs-100">{props.invoice.serviceType}</p>
          <p className="mb-1 text-muted text-small w-15 w-xs-100">
            <strong>{props.invoice.total}</strong> - {props.invoice.paymentMethod}
          </p>
          <p className="mb-1 text-muted text-small w-15 w-xs-100">{props.invoice.status.time}</p>
          <div className="w-15 w-xs-100 text-right">
            {/* <p className="mb-1 text-muted text-small w-15 w-xs-100">{}</p> */}
            <Badge color={statusObj.color} pill>
              {statusObj.text}
            </Badge>
          </div>
        </CardBody>
      </NavLink>
    </Card>
  );
}
