import { useState } from "react";
import { Container, Row, Col, Nav, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Modal, TextField } from "../../../components/elements";
import { signOut } from "../../../store/actions/Auth-Actions";
import Navbar from "react-bootstrap/Navbar";
import CustomUpload from "../../elements/upload/Upload";
import deleteButtonCreateMeeting from "../../../assets/images/cancel_meeting_icon.svg";
import FileIcon from "react-file-icon";
import { Checkbox, Switch } from "antd";
import {
  ListUl,
  Gear,
  QuestionCircle,
  BoxArrowRight,
} from "react-bootstrap-icons";
import "./Header.css";
import JohnCater from "../../../assets/images/profile3.png";
import JsLogo from "../../../assets/images/js-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // for show modal state
  const [show, setShow] = useState(false);

  //for user setting
  const [userSetting, setUserSetting] = useState(true);

  //for user passcode
  const [userPasscode, setUserPasscode] = useState(false);

  // for change password field state
  const [changePassField, setChangePassField] = useState(false);

  //Upload File States
  const [tasksAttachments, setTasksAttachments] = useState({
    TasksAttachments: [],
  });

  const openChangePassField = () => {
    setChangePassField(true);
  };

  //for open setting show modal
  const openSettingModalHandler = async () => {
    setShow(true);
  };

  // for open usersetting
  const openUserSetting = async () => {
    setUserSetting(true);
    setUserPasscode(false);
  };

  //for open passcode
  const openPasscodeSetting = async () => {
    setUserPasscode(true);
    setUserSetting(false);
  };

  // for open calculator
  const gotoCalculator = () => {
    navigate("/Js/calculator/");
  };

  //Upload File Handler
  const uploadFilesToDo = (data) => {
    const uploadFilePath = data.target.value;
    const uploadedFile = data.target.files[0];
    var ext = uploadedFile.name.split(".").pop();
    console.log("uploadedFile", uploadedFile.name, ext);
    let file = tasksAttachments.TasksAttachments;
    console.log("uploadedFile", file);
    if (
      ext === "doc" ||
      ext === "docx" ||
      ext === "xls" ||
      ext === "xlsx" ||
      ext === "pdf" ||
      ext === "png" ||
      ext === "txt" ||
      ext === "jpg" ||
      ext === "jpeg" ||
      ext === "gif"
    ) {
      let data;
      let sizezero;
      let size;
      if (file.length > 0) {
        file.map((filename, index) => {
          console.log("uploadedFile", filename);
          if (filename.DisplayAttachmentName === uploadedFile.name) {
            console.log(
              "uploadedFile",
              filename.DisplayAttachmentName === uploadedFile.name
            );
            data = false;
          }
        });
        if (uploadedFile.size > 10000000) {
          size = false;
        } else if (uploadedFile.size === 0) {
          sizezero = false;
        }
        if (data === false) {
        } else if (size === false) {
        } else if (sizezero === false) {
        } else {
          // dispatch(FileUploadToDo(uploadedFile));
        }
      } else {
        let size;
        let sizezero;
        if (uploadedFile.size > 10000000) {
          size = false;
        } else if (uploadedFile.size === 0) {
          sizezero = false;
        }
        if (size === false) {
        } else if (sizezero === false) {
        } else {
          // dispatch(FileUploadToDo(uploadedFile));
        }
      }
    }

    file.push({
      PK_TAID: 0,
      DisplayAttachmentName: uploadedFile.name,
      OriginalAttachmentName: uploadFilePath,
      CreationDateTime: "",
      FK_TID: 0,
    });
    setTasksAttachments({ ["TasksAttachments"]: file });
  };

  return (
    <>
      <Container fluid className="container-header">
        <Navbar collapseOnSelect expand="lg">
          <Container fluid>
            <Navbar.Brand to="/JS/Home" as={Link}>
              <img src={JsLogo} width={230} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-rfq-calculator ms-auto">
                <Nav.Link>
                  {" "}
                  <Button text="Upload Rates" className="rfq-button" />
                </Nav.Link>
                <Nav.Link>
                  <Button
                    text="Calculators"
                    className="caluclator-button"
                    onClick={gotoCalculator}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Dropdown className="profilebtn-dropdown">
              <Dropdown.Toggle className="dropdown-toggle-1">
                <img src={JohnCater} className="image-john" />

                <p className="user-name">Michael Hawk</p>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown_menu">
                <Dropdown.Item>
                  <Nav.Link onClick={openSettingModalHandler}>
                    <i className="icon-settings setting-icon"></i>
                    <label className="dropdown-select-labels">Setting</label>
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <i className="icon-help-circle setting-icon"></i>
                  <label className="dropdown-select-labels">
                    Help & Support
                  </label>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Nav.Link>
                    <i className="icon-logout setting-icon"></i>
                    <label
                      className="dropdown-select-labels"
                      onClick={() => dispatch(signOut(navigate))}
                    >
                      Logout
                    </label>
                  </Nav.Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Navbar>
      </Container>

      <Modal
        show={show}
        setShow={setShow}
        size="lg"
        className="modaldialog modal-setting"
        modalHeaderClassName="header-Modal-setting"
        modalFooterClassName="modal-setting-footer"
        onHide={() => setShow(false)}
        ModalBody={
          <>
            <Row>
              <Col lg={12} md={12} sm={12} className="top-button-setting-modal">
                <Button
                  text="User Settings"
                  className={
                    userSetting
                      ? "modal-setting-btn-Active"
                      : "modal-setting-btn-notActive"
                  }
                  onClick={openUserSetting}
                />
                <Button
                  text="Passcode Settings"
                  className={
                    userPasscode
                      ? "modal-setting-passcode-active"
                      : "modal-setting-passcode-notActive"
                  }
                  onClick={openPasscodeSetting}
                />
              </Col>
            </Row>

            {userSetting ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-5"
                  >
                    <Checkbox />
                    <p className="modal-setting-para fw-5">
                      Chat Panel Overlap
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Sound on every personal message
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Sound on every personal message
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Sound on every group message
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Sound on chat room message
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Email on new personal message while offline
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="modal-setting-checkbox-col mt-2"
                  >
                    <Checkbox />
                    <p className="modal-setting-para">
                      Email on new group message while offline
                    </p>
                  </Col>
                </Row>
              </>
            ) : userPasscode ? (
              <>
                <Row className="border-line-passcode">
                  <Col
                    lg={6}
                    md={6}
                    sm={6}
                    className="d-flex justify-content-start mt-5"
                  >
                    <p className="two-fac-authentication-para">
                      Two Factor Authentication
                    </p>
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    sm={6}
                    className="d-flex justify-content-end mt-5"
                  >
                    <Switch />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col lg={12} md={12} sm={12}>
                    <Button
                      text="Change password"
                      className="change-password-btn"
                      onClick={() => setChangePassField(!changePassField)}
                    />

                    {changePassField ? (
                      <>
                        <Row>
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="col-change-password"
                          >
                            <Row className="mt-3">
                              <Col lg={12} md={12} sm={12}>
                                <Row>
                                  <Col lg={4} md={4} sm={12}>
                                    <span className="change-password-label">
                                      Enter New Password*
                                    </span>
                                  </Col>
                                  <Col lg={8} md={8} sm={12}>
                                    <TextField
                                      className="change-password-textfield"
                                      labelClass="d-none"
                                    />
                                  </Col>
                                </Row>

                                <Row className="mt-3">
                                  <Col lg={4} md={4} sm={12}>
                                    <span className="change-password-label">
                                      Confirm New Password*
                                    </span>
                                  </Col>
                                  <Col lg={8} md={8} sm={12}>
                                    <TextField
                                      className="change-password-textfield"
                                      labelClass="d-none"
                                    />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </>
                    ) : null}
                  </Col>
                </Row>
              </>
            ) : null}
          </>
        }
        ModalFooter={
          <>
            {userSetting ? (
              <>
                <Row className="mb-4">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-center"
                  >
                    <Button text="Save" className="modal-footer-save-btn" />
                  </Col>
                </Row>
              </>
            ) : userPasscode ? (
              <>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-center"
                  >
                    <Button text="Save" className="modal-footer-save-btn" />
                  </Col>
                </Row>
              </>
            ) : null}
          </>
        }
      />
    </>
  );
};

export default Header;
