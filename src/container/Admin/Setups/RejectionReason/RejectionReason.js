import React from "react";
import "./RejectionReason.css";
import { Paper } from "@material-ui/core";
import { Col, Container, Row } from "react-bootstrap";
import { TextField, Button, Table } from "../../../../components/elements";
const RejectionReason = () => {
  const columnsTwo = [
    {
      title: <label className="Table_header">Rejection Reason</label>,
      dataIndex: "ApprovalReason",
      key: "ApprovalReason",
      width: "100px",
      ellipsis: true,
    },
    {
      title: <label className="Table_header_two">Edit</label>,
      dataIndex: "Edit",
      key: "Edit",
      width: "20px",
      ellipsis: true,
    },
    {
      title: <label className="Table_header_Delete">Delete</label>,
      dataIndex: "Delete",
      key: "Delete",
      width: "40px",
      ellipsis: true,
    },
  ];
  const dataTwo = [
    {
      ApprovalReason: (
        <span className="Table_content_Approval_reason">Rejection Reason1</span>
      ),
      Edit: <i className="icon-edit color-blue Edit_Icon"></i>,
      Delete: (
        <i
          className="icon-trash color-red Delete_Icon"
          data-bs-toggle="modal"
          data-bs-target="#ConfirmationDeleteModal"
        ></i>
      ),
    },
    {
      ApprovalReason: (
        <span className="Table_content_Approval_reason">Rejection Reason2</span>
      ),
      Edit: <i className="icon-edit color-blue Edit_Icon"></i>,
      Delete: (
        <i
          className="icon-trash color-red Delete_Icon"
          data-bs-toggle="modal"
          data-bs-target="#ConfirmationDeleteModal"
        ></i>
      ),
    },
  ];
  return (
    <Container className="Rejection-container">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <span className="Aprroval_reason_heading">Rejection Reason</span>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg={12} md={12} sm={12}>
          <Paper className="Rejection_reason_paper">
            <Row>
              <Col lg={12} md={12} sm={12}>
                <Row>
                  <Col lg={9} md={9} sm={9} className="CreateMeetingInput">
                    <TextField
                      // className="form-control3"
                      type="text"
                      placeholder="Rejection Reason"
                      labelClass="d-none"
                      required={true}
                      name="tasktitle"
                    />
                  </Col>
                  <Col lg={3} md={3} sm={3}>
                    <Button
                      text="Add Rejection Reason"
                      className="AddApprovalReason"
                      icon={<i className="icon-add-circle-fill icon-add-Approval"></i>}
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col lg={12} md={12} sm={12}>
                    <Table
                      column={columnsTwo}
                      rows={dataTwo}
                      className="bottom-inside-table"
                      pagination={false}
                    />
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

export default RejectionReason;
