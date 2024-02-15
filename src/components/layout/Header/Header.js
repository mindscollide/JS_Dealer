import { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Modal,
  TextField,
  Loader,
  Notification,
} from "../../../components/elements";
import { signOut } from "../../../store/actions/Auth-Actions";
import {
  GetVolMetersByBankID,
  UpdateVolmeterByDealer,
} from "../../../store/actions/Volmeter_Actions";
import Navbar from "react-bootstrap/Navbar";
import { Checkbox, Switch } from "antd";
import "./Header.css";
import JohnCater from "../../../assets/images/profile3.png";
import JsLogo from "../../../assets/images/js-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { volmeter } = useSelector((state) => state);

  let currentBankId = localStorage.getItem("bankID");

  const [volmeter01, setVolmeter01] = useState(true);
  const [volmeter02, setVolmeter02] = useState(false);
  const [volmeter03, setVolmeter03] = useState(false);
  const [volmeterOff, setVolmeterOff] = useState(false);

  //Notification States
  const [open, setOpen] = useState({
    flag: false,
    message: "",
    severity: "",
  });

  // for show modal state
  const [show, setShow] = useState(false);

  //for user setting
  const [userSetting, setUserSetting] = useState(true);

  //for user passcode
  const [userPasscode, setUserPasscode] = useState(false);

  // for change password field state
  const [changePassField, setChangePassField] = useState(false);

  // vol meter data
  const [volmeterData, setVolmeterData] = useState({
    isVolMeterOnOff: false,
    volMeters: [],
  });

  //Upload File States
  const [tasksAttachments, setTasksAttachments] = useState({
    TasksAttachments: [],
  });

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

  const volmeter01Handler = () => {
    setVolmeter01(true);
    setVolmeter02(false);
    setVolmeter03(false);
    setVolmeterOff(false);
    if (volmeter01 === false) {
      let Data = {
        BankID: parseInt(currentBankId),
        action: 1,
      };
      dispatch(UpdateVolmeterByDealer(Data, navigate));
    }
  };

  const volmeter02Handler = () => {
    setVolmeter01(false);
    setVolmeter02(true);
    setVolmeter03(false);
    setVolmeterOff(false);
    if (volmeter02 === false) {
      let Data = {
        BankID: parseInt(currentBankId),
        action: 2,
      };
      dispatch(UpdateVolmeterByDealer(Data, navigate));
    }
  };

  const volmeter03Handler = () => {
    setVolmeter01(false);
    setVolmeter02(false);
    setVolmeter03(true);
    setVolmeterOff(false);
    if (volmeter03 === false) {
      let Data = {
        BankID: parseInt(currentBankId),
        action: 3,
      };
      dispatch(UpdateVolmeterByDealer(Data, navigate));
    }
  };

  const volmeterOffHandler = () => {
    setVolmeter01(false);
    setVolmeter02(false);
    setVolmeter03(false);
    setVolmeterOff(true);
    if (volmeterOff === false) {
      let Data = {
        BankID: parseInt(currentBankId),
        action: 0,
      };
      dispatch(UpdateVolmeterByDealer(Data, navigate));
    }
  };

  useEffect(() => {
    let Data = {
      BankId: parseInt(currentBankId),
    };
    dispatch(GetVolMetersByBankID(Data, navigate));
  }, []);

  useEffect(() => {
    if (
      volmeter.GetVolMetersByBankIDData !== undefined &&
      volmeter.GetVolMetersByBankIDData !== null &&
      volmeter.GetVolMetersByBankIDData.length !== 0
    ) {
      setVolmeterData({
        ...volmeterData,
        isVolMeterOnOff: volmeter.GetVolMetersByBankIDData.isVolMeterOnOff,
        volMeters: volmeter.GetVolMetersByBankIDData.volMeters,
      });
    }
  }, [volmeter?.GetVolMetersByBankIDData]);

  console.log("volmeter data", volmeterData);
  console.log("volmeter reducer", volmeter);

  useEffect(() => {
    if (
      (volmeter.ResponseMessage !== undefined &&
        volmeter.ResponseMessage !== null &&
        volmeter.ResponseMessage !== "") ||
      volmeter.ResponseMessage !== "Record Found"
    ) {
      setOpen({
        ...open,
        flag: true,
        message: volmeter.ResponseMessage,
        severity: volmeter.Severity,
      });
    }
  }, [volmeter.ResponseMessage]);

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
                  <Button
                    text="Upload Rates"
                    className="file btn btn-primary me-2 fw-bold ps-4 pe-4"
                  />
                </Nav.Link>
                <Nav.Link>
                  <Button
                    text="Calculators"
                    className="btn btn-primary fw-bold ps-4 pe-4 me-2"
                    onClick={gotoCalculator}
                  />
                </Nav.Link>
                <div className="vol-meter-container me-2">
                  <div className="d-flex align-items-center vol-meter-inner-wrapper">
                    <div className="heading-vol-meter fs-5 fw-semibold">
                      Vol Meter
                    </div>
                    <Button
                      text="01"
                      className={
                        volmeterData.volMeters.length > 0
                          ? (volmeterData.volMeters[0].isVolMeterActive ===
                              true &&
                              volmeterData.volMeters[1].isVolMeterActive ===
                                false &&
                              volmeterData.volMeters[2].isVolMeterActive ===
                                false &&
                              volmeterData.isVolMeterOnOff) === true
                            ? "btn vol-meter ms-1 active-vol"
                            : "btn vol-meter btn-default ms-1"
                          : null
                      }
                      onClick={volmeter01Handler}
                    />
                    <Button
                      text="02"
                      className={
                        volmeterData.volMeters.length > 0
                          ? (volmeterData.volMeters[0].isVolMeterActive ===
                              false &&
                              volmeterData.volMeters[1].isVolMeterActive ===
                                true &&
                              volmeterData.volMeters[2].isVolMeterActive ===
                                false &&
                              volmeterData.isVolMeterOnOff) === true
                            ? "btn vol-meter ms-1 active-vol"
                            : "btn vol-meter btn-default ms-1"
                          : null
                      }
                      onClick={volmeter02Handler}
                    />
                    <Button
                      text="03"
                      className={
                        volmeterData.volMeters.length > 0
                          ? volmeterData.volMeters[0].isVolMeterActive ===
                              false &&
                            volmeterData.volMeters[1].isVolMeterActive ===
                              false &&
                            volmeterData.volMeters[2].isVolMeterActive ===
                              true &&
                            volmeterData.isVolMeterOnOff === true
                            ? "btn vol-meter ms-1 active-vol"
                            : "btn vol-meter btn-default ms-1"
                          : null
                      }
                      onClick={volmeter03Handler}
                    />
                    <Button
                      text="off"
                      className={
                        volmeterData.isVolMeterOnOff === false
                          ? "btn vol-meter ms-1 active-vol"
                          : "btn vol-meter btn-default ms-1"
                      }
                      onClick={volmeterOffHandler}
                    />
                  </div>
                </div>
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
            {/* <Row>
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
            </Row> */}

            {userSetting ? (
              <>
                <Row className="border-line-passcode ">
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className="d-flex justify-content-start mt-5"
                  >
                    <p className="modal-setting-para">
                      Two Factor Authentication
                    </p>
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className="d-flex justify-content-end mt-5"
                  >
                    <Switch />
                  </Col>
                </Row>

                <Row className="border-line-passcode ">
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className="d-flex justify-content-start mt-4"
                  >
                    <p className="modal-setting-para">Sound on every message</p>
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className="d-flex justify-content-end mt-4"
                  >
                    <Switch />
                  </Col>
                </Row>

                <Row className="border-line-passcode ">
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className="d-flex justify-content-start mt-4"
                  >
                    <p className="modal-setting-para">
                      Email on new message while offline
                    </p>
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    className="d-flex justify-content-end mt-4"
                  >
                    <Switch />
                  </Col>
                </Row>
              </>
            ) : userPasscode ? (
              <>
                {/* <Row className="border-line-passcode">
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
                </Row> */}
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
      <Notification
        setOpen={setOpen}
        open={open.flag}
        message={open.message}
        severity={open.severity}
      />
      {volmeter.Loader ? <Loader /> : null}
    </>
  );
};

export default Header;
