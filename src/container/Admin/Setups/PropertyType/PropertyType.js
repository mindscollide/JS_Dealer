import React from "react";
import "./PropertyType.css";
import { Col, Container, Row } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import { TextField, Button } from "../../../../components/elements";
const PropertyType = () => {
  return (
    <Container className="Property-container">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <span className="Signup_request_heading">Pending Signup Request</span>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <span className="Subheading_signup_pending">
            Below are the pending Sign Up requests for your approval
          </span>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Paper className="paper_sizing mt-3">
            <Row>
              <Col lg={3} md={3} sm={3}>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <span className="Form_heading">First name</span>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <span className="Credentials">Testing</span>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col lg={12} md={12} sm={12}>
                    <span className="Form_heading">Last name</span>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <span className="Credentials">email3</span>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col lg={12} md={12} sm={12}>
                    <span className="Form_heading">Email</span>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <span className="Credentials">test.emai.@test.com</span>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col lg={12} md={12} sm={12}>
                    <span className="Form_heading">Role</span>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <span className="Credentials">
                      Data Entry-Busniess Team
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col lg={9} md={9} sm={9}>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <TextField
                      applyClass="text-area-create-group"
                      type="text"
                      as={"textarea"}
                      label={
                        <label className="Comment_section">
                          Type your Comment here
                          <span className="streik">*</span>
                        </label>
                      }
                      rows="5"
                      required={true}
                      name="groupdescription"
                    />
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-center gap-3"
                  >
                    {/* <Button
                      text="Approved"
                      className="Button_approved"
                    /> */}
                    <button
                      type="button"
                      className="btn btn-primary btn-lg fs-5 px-4 Button_approved"
                    >
                      <i className="icon-check fs-5"></i> Approve
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg fs-5 px-4 Button_reject"
                    >
                      <i className="icon-close fs-4"></i> Reject
                    </button>
                    {/* <Button
                      text="Reject"
                      className="Button_reject"
                    /> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyType;
