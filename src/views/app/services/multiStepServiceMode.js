import React, { Component, Fragment } from "react";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import { Row, Card, CardBody, Form, FormGroup, Input, Label, ButtonGroup, Button } from "reactstrap";
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import { BottomNavigation } from "./BottomNavigation";
import { TopNavigation } from "./TopNavigation";
import { NavLink } from "react-router-dom";

import Switch from "rc-switch";
import "rc-switch/assets/index.css";

class OneStepServiceMode extends Component {
      constructor(props) {
        super(props);
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
        this.topNavClick = this.topNavClick.bind(this);
        this.state = {
            bottomNavHidden: false,
            topNavDisabled: false,
            
            files: [""],
            targetLanguage: "", 
            stamp: false,
            deliveryTime:"",
            budget:"",
            additionalService:[""],
            confidentialityAgreement:"",
            specialInstructions:"",
            requiredSample:false
        }
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
            <Card>
                <CardBody className="wizard wizard-default">
                    <Wizard>
                        <TopNavigation className="justify-content-center" disableNav={false} topNavClick={this.topNavClick} />
                        <Steps>
                            <Step id="filesStep" name={messages["form.files"]} desc={messages["form.step-desc-1"]}>
                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                <IntlMessages id="form.files" />
                                            </Label>
                                            <Input type="text" name="files" placeholder={messages["form.files"]} value={this.state.name} onChange={(e) => { this.setState({ files: e.target.value }) }} />
                                        </FormGroup>
                                    </Form>
                                </div>
                            </Step>
                            <Step id="targetLanguageStep" name={messages["form.targetLanguage"]} desc={messages["form.step-desc-2"]}>
                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                <IntlMessages id="form.targetLanguage" />
                                            </Label>
                                            {/* <Input type="targetLanguage" name="targetLanguage" placeholder={messages["form.targetLanguage"]} value={this.state.targetLanguage} onChange={(e) => { this.setState({ targetLanguage: e.target.value }) }} /> */}
                                            <ButtonGroup>
                                            
                                              <Button
                                                color="primary"
                                                onClick={() => this.setState({ targetLanguage: 1})}
                                                active={this.state.targetLanguage === 1}
                                              >
                                                <IntlMessages id="button.radio" />
                                              </Button>
                                              
                                              <Button
                                                color="primary"
                                                onClick={() => this.setState({ targetLanguage: 3})}
                                                active={this.state.targetLanguage === 3}
                                              >
                                                <IntlMessages id="button.radio" />
                                              </Button>
                                            </ButtonGroup>
                                        </FormGroup>
                                    </Form>
                                </div>

                            </Step>
                            <Step id="stampStep" name={messages["form.stamp"]} desc={messages["form.stampDesc"]}>
                            {/* `${messages["form.stampDesc"]} (${this.state.stamp ? "Yes":"No"})` */}
                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup className="d-block text-center">
                                            <Label className="mr-2">
                                                <IntlMessages id="form.stampDesc" />
                                            </Label>
                                            <Switch
                                              className="custom-switch custom-switch-primary"
                                              checked={this.state.stamp}
                                              onChange={(e) => { this.setState({ stamp: e}) }}
                                            />
                                            </FormGroup>
                                    </Form>
                                </div>

                            </Step>
                            <Step id="deliveryTimeStep" name={messages["form.deliveryTime"]} desc={`${(messages["form.deliveryTime"])} (${this.state.deliveryTime})`}>

                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                <IntlMessages id="form.deliveryTime" />
                                            </Label>
                                            <Input type="text" name="deliveryTime" placeholder={messages["form.deliveryTime"]} value={this.state.deliveryTime} onChange={(e) => { this.setState({ deliveryTime: e.target.value }) }} />
                                        </FormGroup>
                                    </Form>
                                </div>

                            </Step>
                            <Step id="budgetStep" name={messages["form.budget"]} desc={messages["form.step-desc-3"]}>

                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                <IntlMessages id="form.budget" />
                                            </Label>
                                            <Input type="text" name="budget" placeholder={messages["form.budget"]} value={this.state.budget} onChange={(e) => { this.setState({ budget: e.target.value }) }} />
                                        </FormGroup>
                                    </Form>
                                </div>

                            </Step>
                            <Step id="additionalServiceStep" name={messages["form.additionalService"]} desc={messages["form.step-desc-3"]}>

                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                <IntlMessages id="form.additionalService" />
                                            </Label>
                                            <Input type="text" name="additionalService" placeholder={messages["form.additionalService"]} value={this.state.additionalService} onChange={(e) => { this.setState({ additionalService: e.target.value }) }} />
                                        </FormGroup>
                                    </Form>
                                </div>

                            </Step>
                            <Step id="confidentialityAgreementStep" name={messages["form.confidentialityAgreement"]} desc={messages["form.step-desc-3"]}>

                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                <IntlMessages id="form.confidentialityAgreement" />
                                            </Label>
                                            <Input type="text" name="confidentialityAgreement" placeholder={messages["form.confidentialityAgreement"]} value={this.state.confidentialityAgreement} onChange={(e) => { this.setState({ confidentialityAgreement: e.target.value }) }} />
                                        </FormGroup>
                                    </Form>
                                </div>

                            </Step>
                            <Step id="specialInstructionsStep" name={messages["form.specialInstructions"]} desc={messages["form.step-desc-3"]}>

                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                <IntlMessages id="form.specialInstructions" />
                                            </Label>
                                            <Input type="text" name="specialInstructions" placeholder={messages["form.specialInstructions"]} value={this.state.specialInstructions} onChange={(e) => { this.setState({ specialInstructions: e.target.value }) }} />
                                        </FormGroup>
                                    </Form>
                                </div>

                            </Step>
                            <Step id="requiredSampleStep" name={messages["form.requiredSample"]} desc={messages["form.step-desc-3"]}>

                                <div className="wizard-basic-step">
                                    <Form>
                                        <FormGroup>
                                            <Label>
                                                <IntlMessages id="form.requiredSample" />
                                            </Label>
                                            <Input type="text" name="requiredSample" placeholder={messages["form.requiredSample"]} value={this.state.requiredSample} onChange={(e) => { this.setState({ requiredSample: e.target.value }) }} />
                                        </FormGroup>
                                    </Form>
                                </div>

                            </Step>

                            <Step id="Step" hideTopNav={true}>
                                <div className="wizard-basic-step text-center">
                                {/* <img src={thankYouImg} /> */}
                                <div className="thank-you-logo m-auto"></div>
                                    <h1 className="mb-2 display-3">Thank you!</h1>
                                    <h2>Order <NavLink to="/app/orders" className="text-primary bg-dark px-2">#348297432</NavLink> placed successfully</h2>
                                    <h3>Kindly check your email for future Updates and also You can track your order status by checking "<NavLink to="/app/orders" className="text-primary"> My Orders </NavLink> "</h3>
                                </div>
                            </Step>
                        </Steps>
                        <BottomNavigation onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className={"justify-content-center " + (this.state.bottomNavHidden && "invisible")} prevLabel={"Prev"} nextLabel={"Next"} />
                    </Wizard>
                </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

export default injectIntl(OneStepServiceMode)
