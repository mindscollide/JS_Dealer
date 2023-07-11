import React, { Fragment, useEffect, useState } from 'react'
import { Container, Col, Row, InputGroup, Form } from 'react-bootstrap'
import {
  Button,
  Loader,
  TextField,
  Notification,
} from '../../../../components/elements'
import jsLogo from '../../../../assets/images/js-logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { validateEmail } from '../../../../assets/common/functions/validations'
import { validateEmailPassword } from '../../../../store/actions/Auth-Actions'
import './SignupRequest.css'
const SignUpRequest = () => {
  const { auth } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //For Error text state in signUp request
  const [errorRequest, setErrorRequest] = useState(false)

  //Notification States
  const [open, setOpen] = useState({
    flag: false,
    message: '',
    severity: '',
  })

  // state for request signup fields
  const [requestSignup, setRequestSignup] = useState({
    email: {
      content: '',
      isError: false,
      errorMessage: '',
      isSuccess: false,
    },
    password: {
      content: '',
      isError: false,
      errorMessage: '',
      isSuccess: false,
    },
  })

  const handeEmailvlidate = (e) => {
    let value = e.target.value.trimStart()
    console.log('emailErrorr', value)

    if (value !== '') {
      if (validateEmail(value)) {
        //  need to dispatch email validate
        setRequestSignup({
          ...requestSignup,
          email: {
            content: value,
            isError: false,
            errorMessage: '',
            isSuccess: false,
          },
        })
      } else {
        // setEmailUnique(false);
        console.log('emailErrorr', requestSignup.email.content)

        setRequestSignup({
          ...requestSignup,
          email: {
            content: value,
            isError: true,
            errorMessage: '',
            isSuccess: true,
          },
        })
      }
    } else {
      // setEmailUnique(false);
      setRequestSignup({
        ...requestSignup,
        email: {
          content: '',
          isError: true,
          errorMessage: '',
          isSuccess: true,
        },
      })
    }
  }

  // state for validation
  const setCredentialHandler = (e) => {
    let value = e.target.value.trimStart()
    console.log('emailErrorr', value)

    if (value !== '') {
      setRequestSignup({
        ...requestSignup,
        password: {
          content: value,
          isError: false,
          errorMessage: '',
          isSuccess: false,
        },
      })
    } else {
      setRequestSignup({
        ...requestSignup,
        email: {
          content: value,
          isError: true,
          errorMessage: '',
          isSuccess: true,
        },
      })
    }
  }

  // Proceed Handler
  const proceedDataHandler = async (e) => {
    if (
      requestSignup.email.content !== '' &&
      requestSignup.password.content !== ''
    ) {
      setErrorRequest(false)
      console.log('fields empty', requestSignup)

      await dispatch(
        validateEmailPassword(
          requestSignup.email.content,
          requestSignup.password.content,
          navigate,
        ),
      )
    } else {
      setErrorRequest(true)
      console.log('fields empty')
    }
  }

  useEffect(() => {
    if (
      auth.ResponseMessage !== undefined &&
      auth.ResponseMessage !== null &&
      auth.ResponseMessage !== ''
    ) {
      setOpen({
        ...open,
        flag: true,
        message: auth.ResponseMessage,
        severity: auth.Severity,
      })
    }
  }, [auth])

  console.log('Auth Global State', auth)

  return (
    <Fragment>
      <Col sm={12} lg={12} md={12} className="sign-up-request">
        <Col lg={12} md={12} sm={12}>
          <img src={jsLogo} width="150px" />
        </Col>
        <Container>
          <Row className="">
            <Col sm={12} md={12} lg={12} className="sign-up-request-container">
              <Row>
                <Col
                  sm={5}
                  md={5}
                  lg={5}
                  className="sign-up-request-div flex-column"
                >
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <span className="Heading-js">JS Login Portal</span>
                      <span className="signup-request-heading">
                        Signup Request
                      </span>
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
                          name="email"
                          value={requestSignup.email.content}
                          onChange={handeEmailvlidate}
                          className="sign-up-request-field"
                          placeholder="Email ID"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      <Row>
                        <Col className="d-flex justify-content-start">
                          <p
                            className={
                              errorRequest && requestSignup.email.content === ''
                                ? 'errorMessage'
                                : 'errorMessage_hidden'
                            }
                          >
                            Email is required
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={12} md={12} lg={12} className="mb-2">
                      <InputGroup>
                        <InputGroup.Text
                          id="basic-addon1"
                          className="Icon-Field-class"
                        >
                          <i className="icon-lock"></i>
                        </InputGroup.Text>
                        <Form.Control
                          name="password"
                          type="password"
                          value={requestSignup.password.content}
                          onChange={setCredentialHandler}
                          className="sign-up-request-field"
                          placeholder="Password"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      <Row>
                        <Col className="d-flex justify-content-start">
                          <p
                            className={
                              errorRequest &&
                              requestSignup.password.content === ''
                                ? 'errorPasswordMessage'
                                : 'errorPasswordMessage_hidden'
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
                      className="signIn-Proceed-btn-col"
                    >
                      <Button
                        text="Go Back"
                        className="goBack-btn"
                        onClick={() => navigate('/')}
                      />
                      <Button
                        text="Proceed"
                        className="Proceed-btn"
                        onClick={proceedDataHandler}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>

      {auth.Loading ? <Loader /> : null}
      <Notification
        setOpen={setOpen}
        open={open.flag}
        message={open.message}
        severity={open.severity}
      />
    </Fragment>
  )
}

export default SignUpRequest
