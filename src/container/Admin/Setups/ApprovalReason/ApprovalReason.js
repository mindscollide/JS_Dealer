import React, { useState } from "react";
import "./ApprovalReason.css";
import { Paper } from "@material-ui/core";
import { Col, Container, Row } from "react-bootstrap";
import { TextField, Button, Table } from "../../../../components/elements";
import ApprovalModal from "../../AdminModal/AddApprovalModal/ApprovalModal";
import DeleteModal from "../../AdminModal/DeleteModal/DeleteModal";
// import RejectionModal from "../../AdminModal/AddRejectionModal/RejectionModal";

const ApprovalReason = () => {
  //modal for add approval reason
  const [modalAddApproval, setModalAddApproval] = useState(false);

  //modal for rejection reason
  const [addDeleteModal, setAddDeleteModal] = useState(false);

  //open modal add approval on click
  const openAddApprovalModal = async () => {
    setModalAddApproval(true);
  };

  //open modal Add Approval reason on click
  const openAddDeleteModal = async () => {
    setAddDeleteModal(true);
  };

  const columnsTwo = [
    {
      title: <label className="Table_header">Approval Reason</label>,
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
      render: (text) => <label onClick={openAddDeleteModal}>{text}</label>,
    },
  ];
  const dataTwo = [
    {
      ApprovalReason: (
        <span className="Table_content_Approval_reason">Approval Reason1</span>
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
        <span className="Table_content_Approval_reason">Approval Reason2</span>
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
    <>
      <Container className="Approval-container">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <span className="Aprroval_reason_heading">Approval Reason</span>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={12} md={12} sm={12}>
            <Paper className="Approval_reason_paper">
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <Row>
                    <Col lg={9} md={9} sm={9} className="CreateMeetingInput">
                      <TextField
                        applyClass="form-control2"
                        type="text"
                        labelClass="d-none"
                        placeholder="Approval Reason"
                        required={true}
                        name="tasktitle"
                      />
                    </Col>
                    <Col lg={3} md={3} sm={3}>
                      <Button
                        className="AddApprovalReason-btn"
                        onClick={openAddApprovalModal}
                        icon={
                          <i className="icon-add-circle-fill icon-margin"></i>
                        }
                        text="Add Approval Reason"
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

      {modalAddApproval ? (
        <ApprovalModal
          modalApproval={modalAddApproval}
          setModalApproval={setModalAddApproval}
        />
      ) : null}

      {addDeleteModal ? (
        <DeleteModal
          deleteModal={addDeleteModal}
          setDeleteModal={setAddDeleteModal}
        />
      ) : null}
    </>
  );
};

export default ApprovalReason;
