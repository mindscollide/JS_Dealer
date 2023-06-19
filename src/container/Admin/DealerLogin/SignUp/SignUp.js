import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Button, TextField } from "../../../../components/elements";
import jsLogo from "../../../../assets/images/js-logo.png";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { validationEmail } from "../../../../assets/common/functions/validations";
import { validateEmailPassword } from "../../../../store/actions/Auth-Actions";
import { useNavigate } from "react-router-dom";
import { signUp, allUserRoles } from "../../../../store/actions/Auth-Actions";
import "./SignUp.css";
const SignUp = (data) => {
  const { auth } = useSelector((state) => state);
  console.log(auth, "allUserRoles");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // roles states
  // const [roles, setRoles] = useState([]);
  const [roleValue, setRoleValue] = useState([]);
  const [userRoles, setUserRoles] = useState([]);
  const [transactionType, setTransactionType] = useState([]);
  const [regionType, setRegionType] = useState([]);
  const [roleType, setRoleType] = useState([]);
  const [signupCredentials, setSignupCredentials] = useState({
    emailAddress: {
      content: "",
      isError: true,
      isSuccess: false,
      errorMessage: "",
      isFail: false,
    },
    password: {
      content: "",
      isSuccess: false,
      isError: true,
      errorMessage: "",
      isFail: false,
    },
    completed: false,
  });

  const [credentialsBio, setCredentialsBio] = useState({
    Email: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    UserName: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    FirstName: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    LastName: {
      value: "",
      errorMessage: "",
      errorStatus: false,
    },
    RoleID: 0,
  });
  console.log("credentialsBio", credentialsBio);
  useEffect(() => {
    // on page refresh
    dispatch(allUserRoles());
  }, []);
  //goback btn handler
  const goBackBtn = () => {
    navigate("/SignUpRequest");
  };

  const rolesChangeHandler = async (selectedOption) => {
    console.log(selectedOption, "selectedOptionselectedOption");
    setCredentialsBio({
      ...credentialsBio,
      RoleID: selectedOption.value,
    });
  };

  // on change handler for signUp credentials
  const signUpOnchangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let emailRegex = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@hbl([\.])com/g;
    let alphabeticRegex = /[^a-zA-Z ]/g;

    if (name === "Email" && value !== "") {
      console.log(value, "emailemailemail");
      if (value !== "") {
        setCredentialsBio({
          ...credentialsBio,
          Email: {
            value: value.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "Email" && value === "") {
      setCredentialsBio({
        ...credentialsBio,
        Email: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "UserName" && value !== "") {
      let valueCheck = value.replace(/[^a-zA-Z ]/g, "");
      if (valueCheck !== "") {
        setCredentialsBio({
          ...credentialsBio,
          UserName: {
            value: valueCheck.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "UserName" && value === "") {
      setCredentialsBio({
        ...credentialsBio,
        UserName: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "UserName" && value !== "") {
      let valueCheck = value.replace(/[^a-zA-Z ]/g, "");
      if (valueCheck !== "") {
        setCredentialsBio({
          ...credentialsBio,
          UserName: {
            value: valueCheck.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "FirstName" && value === "") {
      setCredentialsBio({
        ...credentialsBio,
        FirstName: { value: "", errorMessage: "", errorStatus: false },
      });
    }

    if (name === "LastName" && value !== "") {
      let valueCheck = value.replace(/[^a-zA-Z ]/g, "");
      if (valueCheck !== "") {
        setCredentialsBio({
          ...credentialsBio,
          LastName: {
            value: valueCheck.trimStart(),
            errorMessage: "",
            errorStatus: false,
          },
        });
      }
    } else if (name === "LastName" && value === "") {
      setCredentialsBio({
        ...credentialsBio,
        LastName: { value: "", errorMessage: "", errorStatus: false },
      });
    }
  };

  const CustomStyle = {
    option: (base, state) => ({
      ...base,
      background: state.isFocused ? "#002650" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      border: "none",
    }),
  };

  const signUpButton = () => {
    let Data = {
      FirstName: credentialsBio.FirstName.value,
      LastName: credentialsBio.LastName.value,
      Email: credentialsBio.Email.value,
      RoleID: credentialsBio.RoleID,
      LoginID: credentialsBio.UserName.value,
    };
    dispatch(signUp(Data));
  };

  useEffect(() => {
    if (Object.keys(auth.UserRoleList).length > 0) {
      let tem = [];
      auth.UserRoleList.map((data, index) => {
        console.log(data, "datadatadatadata");
        tem.push({
          label: data.roleName,
          value: data.roleID,
        });
      });
      setUserRoles(tem);
    }
  }, [auth.UserRoleList]);

  useEffect(() => {
    if (Object.keys(auth.validateResponse).length > 0) {
      let responseData = auth.validateResponse;
      console.log("datatddatd", responseData);
      setCredentialsBio({
        ...credentialsBio,
        Email: {
          value: responseData.Email,
          errorMessage: "",
          errorStatus: false,
        },
        UserName: {
          value: responseData.UserName,
          errorMessage: "",
          errorStatus: false,
        },
        FirstName: {
          value: responseData.FirstName,
          errorMessage: "",
          errorStatus: false,
        },
        LastName: {
          value: responseData.LastName,
          errorMessage: "",
          errorStatus: false,
        },
      });
    }
  }, [auth.validateResponse]);

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
                              name="Email"
                              value={credentialsBio.Email.value}
                              onChange={signUpOnchangeHandler}
                              className="sign-up-field"
                              placeholder="Email ID"
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
                              name="UserName"
                              value={credentialsBio.UserName.value}
                              onChange={signUpOnchangeHandler}
                              className="sign-up-field"
                              placeholder="User Name"
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
                              name="FirstName"
                              value={credentialsBio.FirstName.value}
                              onChange={signUpOnchangeHandler}
                              className="sign-up-field"
                              placeholder="First Name"
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
                              name="LastName"
                              value={credentialsBio.LastName.value}
                              onChange={signUpOnchangeHandler}
                              className="sign-up-field"
                              placeholder="Last Name"
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm={12} md={12} lg={12} className="mt-2">
                      <Row>
                        <span className="fields-label">
                          Role
                          <span className="required-span">*</span>
                        </span>
                        <Col sm={12} md={12} lg={12}>
                          <Select
                            name="roleID"
                            placeholder="Role"
                            options={userRoles}
                            // value={userRoleValue}
                            onChange={rolesChangeHandler}
                            // options={roleOption}
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
                      className="goback-signup-btn-col mt-5"
                    >
                      <Button
                        text="Go Back"
                        className="Goback-Signup-btn"
                        onClick={goBackBtn}
                      />
                      <Button
                        text="Signup"
                        className="Proceed-btn"
                        onClick={signUpButton}
                      />
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
