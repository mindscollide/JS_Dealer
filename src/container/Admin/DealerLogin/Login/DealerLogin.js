import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Button, TextField, Loader } from "../../../../components/elements";
import jsLogo from "../../../../assets/images/js-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../../store/actions/Auth-Actions";
import { authReducer } from "../../../../store/reducers";
import { validationEmail } from "../../../../assets/common/functions/validations";
import { useNavigate } from "react-router-dom";
import "./DealerLogin.css";
const DealerLogin = () => {
  const { auth } = useSelector((state) => state);
  console.log(auth, "authReducerauthReducerauthReducer");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { auth } = state;
  const [email, setEmail] = useState("");
  const [errorBar, setErrorBar] = useState("");

  const [open, setOpen] = useState({
    open: false,
    message: "",
  });

  //state for login credentials
  const [loginCredentials, setLoginCredentials] = useState({
    UserName: "",
    Password: "",
    fakePassword: "",
  });
  console.log("loginCredentialsloginCredentials", loginCredentials);

  // credentials for email and password
  const setCredentialHandler = (e) => {
    if (e.target.name === "Password") {
      let numChars = e.target.value;
      let showText = "";
      for (let i = 0; i < numChars.length; i++) {
        showText += "•";
      }
      setLoginCredentials({
        ...loginCredentials,
        [e.target.name]: e.target.value,
        ["fakePassword"]: showText,
      });
    } else {
      setLoginCredentials({
        ...loginCredentials,
        [e.target.name]: e.target.value,
      });
    }
  };

  // handler for email field
  const emailChangeHandler = (e) => {
    if (email.trim() > 0 && validationEmail(email)) {
      setErrorBar(true);
    } else {
      setErrorBar(false);
      let RememberEmailLocal = JSON.parse(
        localStorage.getItem("rememberEmail")
      );
      if (RememberEmailLocal === true) {
        setEmail(e.target.value);
        localStorage.setItem("rememberEmailValue", e.target.value);
      } else {
        setEmail(e.target.value);
      }
    }
  };

  // handler for submit login
  const loginValidateHandler = (e) => {
    e.preventDefault();
    if (loginCredentials.UserName !== "" && loginCredentials.Password !== "") {
      setErrorBar(false);
      dispatch(logIn(loginCredentials, navigate));
    } else {
      setErrorBar(true);
      setOpen({
        ...open,
        open: true,
        message: "Please Fill All Credentials Fields",
      });
    }
  };

  // navigate to signup
  const navigateToSignup = () => {
    navigate("SignUpRequest");
  };

  return (
    <Fragment>
      <Col sm={12} lg={12} md={12} className="sign-in">
        <Col lg={12} md={12} sm={12} className="js-logo-image">
          <img src={jsLogo} width="150px" />
        </Col>
        <Container>
          <Row className="">
            <Col sm={12} md={12} lg={12} className="login-container">
              <Form onSubmit={loginValidateHandler}>
                <Row>
                  <Col sm={5} md={5} lg={5} className="center-div flex-column">
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <span className="Heading-js">JS Login Portal</span>
                      </Col>
                      <Col sm={12} md={12} lg={12} className="mt-3">
                        <InputGroup className="mb-2">
                          <InputGroup.Text
                            id="basic-addon1"
                            className="Icon-Field-class"
                          >
                            <i className="icon-user"></i>
                          </InputGroup.Text>
                          <Form.Control
                            name="UserName"
                            value={loginCredentials.UserName}
                            className="form-comtrol-textfield"
                            placeholder="Email ID"
                            aria-label="Username"
                            onChange={setCredentialHandler}
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                        <Row>
                          <Col className="d-flex justify-content-start">
                            <p
                              className={
                                errorBar && loginCredentials.UserName === ""
                                  ? "errorMessageLogin"
                                  : "errorMessageLogin_hidden"
                              }
                            >
                              Email is required
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={12} md={12} lg={12} className="mb-1">
                        <InputGroup>
                          <InputGroup.Text
                            id="basic-addon1"
                            className="Icon-Field-class"
                          >
                            <i className="icon-lock"></i>
                          </InputGroup.Text>
                          <Form.Control
                            name="Password"
                            className="form-comtrol-textfield-password"
                            placeholder="Password"
                            onChange={setCredentialHandler}
                            value={loginCredentials.Password}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                        <Row>
                          <Col className="d-flex justify-content-start">
                            <p
                              className={
                                errorBar && loginCredentials.Password === ""
                                  ? "errorPasswordSignInMessage"
                                  : "errorPasswordSignInMessage_hidden"
                              }
                            >
                              Password is required
                            </p>
                          </Col>
                        </Row>
                        {/* <TextField
                        placeholder="User Password"
                        className="Text-field"
                      /> */}
                      </Col>
                      <Col
                        sm={12}
                        md={12}
                        lg={12}
                        className="signIn-Signup-btn-col"
                      >
                        <Button
                          text="Login"
                          className="login-btn"
                          onClick={loginValidateHandler}
                        />
                        <Button
                          text="Signup"
                          className="signup-btn"
                          onClick={navigateToSignup}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Col>
      {auth.Loading ? <Loader /> : null}
    </Fragment>
  );
};

export default DealerLogin;
