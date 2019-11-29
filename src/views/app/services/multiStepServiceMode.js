import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { getAllServicesTypes, setSelectedService } from "../../../redux/services/actions";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import { Row, Card, CardBody, Form, FormGroup, Input, Label, ButtonGroup, Button, ButtonToolbar } from "reactstrap";
import { Wizard, Steps, Step } from "react-albus";
import { injectIntl } from "react-intl";
import { BottomNavigation } from "./BottomNavigation";
import { TopNavigation } from "./TopNavigation";
import { NavLink } from "react-router-dom";
import Dropzone from "../../../components/common/Dropzone";

import Switch from "rc-switch";
import "rc-switch/assets/index.css";

import { flattenDeep } from "lodash";

import Select, { components } from "react-select";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const quillModules = {
  toolbar: [
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
};

const quillFormats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"];

const CustomSelectInput = props => {
  var customProps = Object.assign({}, props);
  delete customProps.autoCorrect;
  delete customProps.autoCapitalize;
  return <components.Input {...customProps} />;
};

class MultiStepServiceMode extends Component {
  constructor(props) {
    super(props);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrev = this.onClickPrev.bind(this);
    this.topNavClick = this.topNavClick.bind(this);
    this.handleSelectedServiceChange = this.handleSelectedServiceChange.bind(this);
    this.state = {
      bottomNavHidden: false,
      topNavDisabled: false,

      isBudgetCurrencyOpen: false,

      _localServicesCategoryList: [],
      _localServicesList: [],

      files: [""],
      targetLanguage: "",
      stamp: false,
      deliveryTime: "",
      budget: "",
      additionalService: [""],
      confidentialityAgreement: "",
      specialInstructions: "",
      requiredSample: false,

      otherLanguage: "",
      isOtherLanguage: true,

      isDeliveryTime: true,
      otherDeliveryTime: "",
      budgetCurrency: {},
    };
  }

  topNavClick(stepItem, push) {
    if (this.state.topNavDisabled) {
      return;
    }
    push(stepItem.id);
  }

  onClickNext(goToNext, steps, step) {
    step.isDone = true;
    if (steps.length - 2 <= steps.indexOf(step)) {
      this.setState({ bottomNavHidden: true, topNavDisabled: true });
    }
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    goToNext();
  }

  onClickPrev(goToPrev, steps, step) {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  }

  handleSelectedServiceChange(service) {
    this.props.setSelectedService(service);
  }
  fill_localServicesList() {
    let newServicesList = [];
    if (this.props.servicesCategoryList.length > 0) {
      this.props.servicesCategoryList.forEach(cat => {
        newServicesList.push([...cat.services.filter(service => service.hasAdvancedOption)]);
      });
      this.setState({ _localServicesList: flattenDeep(newServicesList) });
    }
  }
  componentDidMount() {
    if (this.props.servicesTypes.length > 0) {
      this.fill_localServicesList();
    } else {
      this.props.getAllServicesTypes();
    }

    this.setState({ budgetCurrency: this.props.currenciesList[0] });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.servicesTypes.length > 0 && this.state._localServicesList.length === 0) {
      this.fill_localServicesList();
    }
    return true;
  }

  render() {
    const { messages } = this.props.intl;
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.services.multi_step_service_mode" match={this.props.match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Card className="rounded shadow">
              <CardBody>
                <Select
                  components={{ Input: CustomSelectInput }}
                  className="react-select"
                  classNamePrefix="react-select"
                  name="form-field-name"
                  autoFocus
                  value={this.props.selectedService}
                  getOptionLabel={option => option.title}
                  onChange={this.handleSelectedServiceChange}
                  options={this.state._localServicesList}
                  //   getOptionValue={option => option}
                />
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="12" className="mb-4">
            <Card>
              <CardBody className="wizard wizard-default">
                {this.props.selectedService.hasOwnProperty("id") ? (
                  <Wizard>
                    <TopNavigation className="justify-content-center" disableNav={false} topNavClick={this.topNavClick} />
                    <Steps>
                      <Step id="filesStep" name={messages["form.files"]}>
                        <div className="wizard-basic-step">
                          <Form>
                            <FormGroup className="d-block justify-content-center align-items-center">
                              <Label className="mr-2 mb-0">
                                <IntlMessages id="form.files" />
                              </Label>
                              <Dropzone ref={node => (this.dropzone = node)} />
                            </FormGroup>
                          </Form>
                        </div>
                      </Step>
                      <Step id="targetLanguageStep" name={messages["form.targetLanguage"]}>
                        <div className="wizard-basic-step">
                          <Form>
                            <FormGroup className="d-flex flex-column  justify-content-center align-items-center">
                              <div className="d-flex flex-row justify-content-center align-items-center mb-4">
                                <Label className="mr-2 mb-0">
                                  <IntlMessages id="form.targetLanguage" />
                                </Label>
                                {/* <Input type="targetLanguage" name="targetLanguage" placeholder={messages["form.targetLanguage"]} value={this.state.targetLanguage} onChange={(e) => { this.setState({ targetLanguage: e.target.value }) }} /> */}
                                <ButtonGroup className="flex-wrap">
                                  {this.props.popularLanguages.map(language => (
                                    <ButtonToolbar>
                                      <Button
                                        className="m-2 "
                                        color="primary"
                                        onClick={() =>
                                          this.setState({ targetLanguage: language.languageName, otherLanguage: "", isOtherLanguage: false })
                                        }
                                        active={this.state.targetLanguage === language.languageName}
                                      >
                                        {language.languageName}
                                      </Button>
                                    </ButtonToolbar>
                                  ))}
                                  <ButtonToolbar>
                                    <Button
                                      className="m-2 "
                                      color="primary"
                                      onClick={() => this.setState({ targetLanguage: this.state.otherLanguage, isOtherLanguage: true })}
                                      active={this.state.targetLanguage === this.state.otherLanguage}
                                    >
                                      <IntlMessages id="other" />
                                    </Button>
                                  </ButtonToolbar>
                                </ButtonGroup>
                              </div>
                              {this.state.isOtherLanguage && (
                                <Input
                                  type="targetLanguage"
                                  name="targetLanguage"
                                  placeholder={messages["form.targetLanguage"]}
                                  className="d-block w-50"
                                  value={this.state.targetLanguage}
                                  onChange={e => {
                                    this.setState({ targetLanguage: e.target.value, otherLanguage: e.target.value });
                                  }}
                                />
                              )}
                            </FormGroup>
                          </Form>
                        </div>
                      </Step>
                      <Step id="stampStep" name={messages["form.stamp"]}>
                        {/* `${messages["form.stampDesc"]} (${this.state.stamp ? "Yes":"No"})` */}
                        <div className="wizard-basic-step">
                          <Form>
                            <FormGroup className="d-flex justify-content-center align-items-center">
                              <Label className="mr-2 mb-0">
                                <IntlMessages id="form.stampDesc" />
                              </Label>
                              <Switch
                                className="custom-switch custom-switch-primary"
                                checked={this.state.stamp}
                                onChange={e => {
                                  this.setState({ stamp: e });
                                }}
                              />
                            </FormGroup>
                          </Form>
                        </div>
                      </Step>
                      <Step id="deliveryTimeStep" name={messages["form.deliveryTime"]}>
                        <div className="wizard-basic-step">
                          <Form>
                            <FormGroup className="d-flex flex-column  justify-content-center align-items-center">
                              <div className="d-flex flex-row justify-content-center align-items-center mb-4">
                                <Label className="mr-2 mb-0">
                                  <IntlMessages id="form.deliveryTime" />
                                </Label>
                                {/* <Input type="text" name="deliveryTime" placeholder={messages["form.deliveryTime"]} value={this.state.deliveryTime} onChange={(e) => { this.setState({ deliveryTime: e.target.value }) }} /> */}

                                <ButtonGroup>
                                  {this.props.popularDeliveryTimes.map(time => (
                                    <ButtonToolbar>
                                      <Button
                                        className="mr-2"
                                        color="primary"
                                        onClick={() => this.setState({ deliveryTime: time.id, isDeliveryTime: false })}
                                        active={this.state.deliveryTime === time.id}
                                      >
                                        {time.text}
                                      </Button>
                                    </ButtonToolbar>
                                  ))}
                                  <ButtonToolbar>
                                    <Button
                                      className="mr-2"
                                      color="primary"
                                      onClick={() => this.setState({ deliveryTime: "", isDeliveryTime: true })}
                                      active={this.state.isDeliveryTime}
                                    >
                                      <IntlMessages id="other" />
                                    </Button>
                                  </ButtonToolbar>
                                </ButtonGroup>
                              </div>
                              {this.state.isDeliveryTime && (
                                <Input
                                  type="deliveryTime"
                                  name="deliveryTime"
                                  placeholder={messages["form.deliveryTime"]}
                                  className="d-block w-50"
                                  value={this.state.deliveryTime}
                                  onChange={e => {
                                    this.setState({ deliveryTime: e.target.value, otherDeliveryTime: e.target.value });
                                  }}
                                />
                              )}
                            </FormGroup>
                          </Form>
                        </div>
                      </Step>
                      <Step id="budgetStep" name={messages["form.budget"]}>
                        <div className="wizard-basic-step">
                          <Form>
                            <FormGroup className="d-flex justify-content-center align-items-center">
                              <Label className="mr-2 mb-0">
                                <IntlMessages id="form.budget" />
                              </Label>
                              <Input
                                type="text"
                                name="budget"
                                className="w-50"
                                placeholder={messages["form.budget"]}
                                value={this.state.budget}
                                onChange={e => {
                                  this.setState({ budget: e.target.value });
                                }}
                              />
                              <Select
                                components={{ Input: CustomSelectInput }}
                                className="react-select "
                                classNamePrefix="react-select"
                                name="form-field-name"
                                autoFocus
                                value={this.state.budgetCurrency}
                                //   getOptionLabel={option => option.title}
                                onChange={e => this.setState({ budgetCurrency: e })}
                                options={this.props.currenciesList}
                                //   getOptionValue={option => option}
                              />
                            </FormGroup>
                          </Form>
                        </div>
                      </Step>
                      <Step id="additionalServiceStep" name={messages["form.additionalService"]}>
                        <div className="wizard-basic-step">
                          <Form>
                            <FormGroup className="d-flex justify-content-center align-items-center">
                              <Label className="mr-2 mb-0">
                                <IntlMessages id="form.additionalService" />
                              </Label>
                              <Input
                                type="text"
                                name="additionalService"
                                placeholder={messages["form.additionalService"]}
                                value={this.state.additionalService}
                                onChange={e => {
                                  this.setState({ additionalService: e.target.value });
                                }}
                              />
                            </FormGroup>
                          </Form>
                        </div>
                      </Step>
                      <Step id="confidentialityAgreementStep" name={messages["form.confidentialityAgreement"]}>
                        <div className="wizard-basic-step">
                          <Form>
                            <FormGroup className="d-flex justify-content-center align-items-center">
                              <Label className="mr-2 mb-0">
                                <IntlMessages id="form.confidentialityAgreement" />
                              </Label>
                              {/* <Input type="text" name="confidentialityAgreement" placeholder={messages["form.confidentialityAgreement"]} value={this.state.confidentialityAgreement} onChange={(e) => { this.setState({ confidentialityAgreement: e.target.value }) }} /> */}
                              <Switch
                                className="custom-switch custom-switch-primary"
                                checked={this.state.confidentialityAgreement}
                                onChange={e => {
                                  this.setState({ confidentialityAgreement: e });
                                }}
                              />
                            </FormGroup>
                          </Form>
                        </div>
                      </Step>
                      <Step id="specialInstructionsStep" name={messages["form.specialInstructions"]}>
                        <div className="wizard-basic-step">
                          <Form>
                            <FormGroup className="d-flex flex-column justify-content-center align-items-start">
                              <Label className="mr-2 mb-2">
                                <IntlMessages id="form.specialInstructions" />
                              </Label>
                              {/* <Input
                                type="text"
                                name="specialInstructions"
                                placeholder={messages["form.specialInstructions"]}
                                value={this.state.specialInstructions}
                                onChange={e => {
                                  this.setState({ specialInstructions: e.target.value });
                                }}
                              /> */}
                              <ReactQuill
                                theme="snow"
                                className="w-100"
                                value={this.state.specialInstructions}
                                onChange={textQuillStandart => {
                                  this.setState({ textQuillStandart });
                                }}
                                modules={quillModules}
                                formats={quillFormats}
                              />
                            </FormGroup>
                          </Form>
                        </div>
                      </Step>
                      <Step id="requiredSampleStep" name={messages["form.requiredSample"]}>
                        <div className="wizard-basic-step">
                          <Form>
                            <FormGroup className="d-flex justify-content-center align-items-center">
                              <Label className="mr-2 mb-0">
                                <IntlMessages id="form.requiredSample" />
                              </Label>
                              <Switch
                                className="custom-switch custom-switch-primary"
                                checked={this.state.requiredSample}
                                onChange={e => {
                                  this.setState({ requiredSample: e });
                                }}
                              />
                            </FormGroup>
                          </Form>
                        </div>
                      </Step>

                      <Step id="Step" hideTopNav={true}>
                        <div className="wizard-basic-step text-center">
                          {/* <img src={thankYouImg} /> */}
                          <div className="thank-you-logo m-auto"></div>
                          <h1 className="mb-2 display-3">Thank you!</h1>
                          <h2>
                            Order{" "}
                            <NavLink to="/app/orders" className="text-primary bg-dark px-2">
                              #348297432
                            </NavLink>{" "}
                            placed successfully
                          </h2>
                          <h3>
                            Kindly check your email for future Updates and also You can track your order status by checking "
                            <NavLink to="/app/orders" className="text-primary">
                              {" "}
                              My Orders{" "}
                            </NavLink>{" "}
                            "
                          </h3>
                        </div>
                      </Step>
                    </Steps>
                    <BottomNavigation
                      onClickNext={this.onClickNext}
                      onClickPrev={this.onClickPrev}
                      className={"justify-content-center " + (this.state.bottomNavHidden && "invisible")}
                      prevLabel={"Prev"}
                      nextLabel={"Next"}
                    />
                  </Wizard>
                ) : (
                  <div className="display-1 text-center m-5 py-5 text-info">Please Select Service</div>
                )}
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ services }) => ({
  currenciesList: services.currenciesList,
  selectedService: services.selectedService,
  servicesTypes: services.servicesTypes,
  popularLanguages: services.popularLanguages,
  popularDeliveryTimes: services.popularDeliveryTimes,
  servicesCategoryList: services.servicesCategoryList,
});
export default injectIntl(connect(mapStateToProps, { getAllServicesTypes, setSelectedService })(MultiStepServiceMode));
