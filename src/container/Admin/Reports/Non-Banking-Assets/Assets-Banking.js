import React, { useState } from "react";
import "./Assets-Banking.css";
import { Col, Container, Row } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import { TextField, Button } from "../../../../components/elements";
import DatePicker from "react-multi-date-picker";
const NonBankingAssets = () => {
  const [value, setValue] = useState(new Date());
  return (
    <Container className="Reports-container">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <span className="Non_banking_Assets">
            Reports - Non-Banking Assets
          </span>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg={12} md={12} sm={12}>
          <Paper className="Non_banking_assets_paper">
            <Row>
              <Col lg={12} md={12} sm={12} className="Reports-textfield-column">
                <TextField
                  labelClass="d-none"
                  className="text-fields-edituser"
                  placeholder="Total Acquistion Value From"
                />
                <TextField
                  labelClass="d-none"
                  className="text-fields-edituser"
                  placeholder="Total Acquistion Value From"
                />
                <TextField
                  labelClass="d-none"
                  className="text-fields-edituser"
                  placeholder="Misyis Customer Code"
                />
                <TextField
                  labelClass="d-none"
                  className="text-fields-edituser"
                  placeholder="ECIB Code"
                />
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Col lg={6} md={6} sm={6} className="Reports-textfield-column">
                <TextField
                  labelClass="d-none"
                  className="text-fields-edituser"
                  placeholder="Name of Brower"
                />
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="JS-Security-Datepicker"
                  >
                    <DatePicker
                      value={value}
                      onChange={setValue}
                      showOtherDays={true}
                      inputClass="date-picker-left"
                    />
                    <label className="date-to">to</label>

                    <DatePicker
                      value={value}
                      onChange={setValue}
                      showOtherDays={true}
                      inputClass="date-picker-right"
                    />
                  </Col>
                </Row>
                {/* <TextField
                  labelClass="d-none"
                  className="text-fields-edituser"
                  value="Total Acquistion Value From"
                /> */}
              </Col>

              <Col lg={6} md={6} sm={6} className="buttons-col">
                <Button
                  icon={<i class="icon-download icons-gap"></i>}
                  text="Download"
                  className="button-download"
                />
                <Button
                  icon={<i class="icon-refresh icons-gap"></i>}
                  text="Reset"
                  className="btn-reset"
                />
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
};

export default NonBankingAssets;
