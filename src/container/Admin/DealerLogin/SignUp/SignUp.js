import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Button, TextField } from "../../../../components/elements";
import jsLogo from "../../../../assets/images/js-logo.png";
import Select from "react-select";
import "./SignUp.css";
const SignUp = () => {
  const transactionOption = [
    { label: "Transaction type1", value: 1 },
    {
      label: "Transaction type2",
      value: 2,
    },
  ];

  const regionOption = [
    { label: "Region1", value: 1 },
    {
      label: "Region2",
      value: 2,
    },
  ];

  const roleOption = [
    { label: "Role1", value: 1 },
    {
      label: "Role2",
      value: 2,
    },
  ];

  const CustomStyle = {
    option: (base, state) => ({
      ...base,
      background: state.isFocused ? "#002650" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      border: "none",
    }),
  };
  return (
    <Fragment>
      <Col sm={12} lg={12} md={12} className="signup">
        <Col lg={12} md={12} sm={12}>
          <img src={jsLogo} width="150px" />
        </Col>
        <Container>
          <Row className="">
            <Col sm={12} md={12} lg={12} className="signup-container">
              <Row>
                <Col sm={5} md={5} lg={5} className="sign-up-div flex-column">
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <span className="Heading-js">JS Login Portal</span>
                      <span className="signup-heading">Signup Request</span>
                    </Col>
                    <Col sm={12} md={12} lg={12} className="mt-2">
                      <Row>
                        <Col sm={12} md={6} lg={6} className="pe-0">
                          <Form.Label
                            htmlFor="basic-url"
                            className="fields-label"
                          >
                            Email
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              className="sign-up-field"
                              placeholder="Email ID"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </Col>
                        <Col sm={12} md={6} lg={6} className="pe-2">
                          <Form.Label
                            htmlFor="basic-url"
                            className="fields-label"
                          >
                            User Name
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              className="sign-up-field"
                              placeholder="User Name"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm={12} md={12} lg={12}>
                      <Row>
                        <Col sm={12} md={6} lg={6} className="pe-0">
                          <Form.Label
                            htmlFor="basic-url"
                            className="fields-label"
                          >
                            First Name<span className="required-span">*</span>
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              className="sign-up-field"
                              placeholder="First Name"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </Col>
                        <Col sm={12} md={6} lg={6} className="pe-2">
                          <Form.Label
                            htmlFor="basic-url"
                            className="fields-label"
                          >
                            Last Name<span className="required-span">*</span>
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              className="sign-up-field"
                              placeholder="Last Name"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm={12} md={12} lg={12} className="mt-1">
                      <Row>
                        <span className="fields-label">
                          Transaction Type
                          <span className="required-span">*</span>
                        </span>
                        <Col sm={12} md={12} lg={12}>
                          <Select
                            placeholder="Transaction ID"
                            options={transactionOption}
                            className="TransactionFilter"
                            styles={CustomStyle}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col sm={12} md={12} lg={12} className="mt-3">
                      <Row>
                        <span className="fields-label">
                          Region
                          <span className="required-span">*</span>
                        </span>
                        <Col sm={12} md={12} lg={12}>
                          <Select
                            placeholder="Region"
                            options={regionOption}
                            className="TransactionFilter"
                            styles={CustomStyle}
                          />
                        </Col>
                      </Row>
                    </Col>

                    <Col sm={12} md={12} lg={12} className="mt-3">
                      <Row>
                        <span className="fields-label">
                          Role
                          <span className="required-span">*</span>
                        </span>
                        <Col sm={12} md={12} lg={12}>
                          <Select
                            placeholder="Role"
                            options={roleOption}
                            className="TransactionFilter"
                            styles={CustomStyle}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      sm={12}
                      md={12}
                      lg={12}
                      className="goback-signup-btn-col mt-3"
                    >
                      <Button text="Go Back" className="Goback-Signup-btn" />
                      <Button text="Signup" className="Proceed-btn" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </Fragment>
  );
};

export default SignUp;
