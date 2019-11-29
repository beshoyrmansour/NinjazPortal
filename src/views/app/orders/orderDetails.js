import React, { Fragment, useEffect, useState } from "react";

import { connect } from "react-redux";
import { getAllOrdersList, getOrderDetails } from "../../../redux/orders/actions";

import { NavLink } from "react-router-dom";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import { Row, Card, CardBody, CardTitle, Button, Badge } from "reactstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import { findIndex } from "lodash";
import { useHistory } from "react-router-dom";

const OrderDetails = props => {
  const { selectedOrder, orderStates } = props;
  let history = useHistory();
  // const [_selectedOrder, set_selectedOrder] = useState({});
  const [currentOrderStates, setCurrentOrderStates] = useState([]);
  const [selectedOrderStatusIndex, setSelectedOrderStatusIndex] = useState(null);
  // console.log("match", props.match.params.id);
  const selectedOrderId = props.match.params.id;
  useEffect(() => {
    if (selectedOrderId) {
      props.getOrderDetails(selectedOrderId);
    } else {
      history.goBack();
    }
    return () => {};
  }, []);
  useEffect(() => {
    console.log("selectedOrder", selectedOrder);

    if (orderStates.length > 0 && selectedOrder.hasOwnProperty("id")) {
      setSelectedOrderStatusIndex(findIndex(orderStates, st => st.id === selectedOrder.fk_order_status));
    }
    return () => {};
  }, [selectedOrder]);

  const selectedOrderStatusClass = index => {
    return selectedOrderStatusIndex > index
      ? "success"
      : selectedOrderStatusIndex === index
      ? "info"
      : "light" > index
      ? "success"
      : selectedOrderStatusIndex === index
      ? "info"
      : "light";
  };

  const createLastStep = fk_order_status => {
    switch (fk_order_status) {
      case 7:
        return (
          <Button color={"success"} className="m-1 status-step" size="xs">
            Completed
          </Button>
        );

      case 8:
        return (
          <Button color={"danger"} className="m-1 status-step" size="xs">
            Cancelled
          </Button>
        );

      case 9:
        return (
          <Button color={"danger"} className="m-1 status-step" size="xs">
            Rejected
          </Button>
        );

      default:
        return (
          <Button color={"light"} className="m-1 status-step" size="xs">
            Completed
          </Button>
        );
    }
  };
  return (
    <Fragment>
      <Row>
        <Colxx xxs="12">
          {/* <Breadcrumb heading="menu.orders.order_details" match={props.match} /> */}
          <Breadcrumb heading={`# ${selectedOrder.OrderCode}`} match={props.match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Card className="mb-4 rounded shadow">
            <CardBody>
              {selectedOrder.hasOwnProperty("id") ? (
                <Fragment>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center progress-line">
                    {orderStates.map((status, index) => (
                      <Button color={selectedOrderStatusClass(index)} className="m-1 status-step" size="xs">
                        {status.value}
                      </Button>
                    ))}
                    {createLastStep(selectedOrder.fk_order_status)}
                  </div>
                </Fragment>
              ) : (
                <div class="loading" />
              )}
            </CardBody>
          </Card>
          <Card>
            {selectedOrder.hasOwnProperty("orderItems") &&
              selectedOrder.orderItems.map(item => (
                <CardBody>
                  <p>id : {item.id}</p>
                  <p>fk_order : {item.fk_order}</p>
                  <p>fk_item_status : {item.fk_item_status}</p>
                  <p>ItemStatusName : {item.ItemStatusName}</p>
                  <p>OrderItemCode : {item.OrderItemCode}</p>
                  <p>fk_service : {item.fk_service}</p>
                  <p>ServiceName : {item.ServiceName}</p>
                  <p>fk_service_type : {item.fk_service_type}</p>
                  <p>ServiceTypeName : {item.ServiceTypeName}</p>
                  <p>fk_source_lang : {item.fk_source_lang}</p>
                  <p>SourceLang : {item.SourceLang}</p>
                  <p>fk_target_lang : {item.fk_target_lang}</p>
                  <p>TargetLang : {item.TargetLang}</p>
                  <p>fk_translation_type : {item.fk_translation_type}</p>
                  <p>TranslationTypeName : {item.TranslationTypeName}</p>
                  <p>number_of_pages : {item.number_of_pages}</p>
                  <p>total_budget : {item.total_budget}</p>
                  <p>fk_currency : {item.fk_currency}</p>
                  <p>CurrencyCode : {item.CurrencyCode}</p>
                  <p>is_urgent_delivery : {item.is_urgent_delivery}</p>
                  <p>delivery_date : {item.delivery_date}</p>
                  <p>share_order : {item.share_order}</p>
                  <p>documents_path : {item.documents_path}</p>
                  <p>created_at : {item.created_at}</p>
                  <p>updated_at : {item.updated_at}</p>
                </CardBody>
              ))}
          </Card>
        </Colxx>
      </Row>
    </Fragment>
  );
};

const mapStateToProps = ({ orders }) => ({
  orderStates: orders.orderStates,
  selectedOrder: orders.selectedOrder,
  // allOrdersList: orders.allOrdersList,
});

export default connect(mapStateToProps, { getAllOrdersList, getOrderDetails })(OrderDetails);
