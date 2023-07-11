import * as actions from '../action_types'
import axios from 'axios'
import {
  authenticationLogIn,
  authenticationSignUp,
  authenticationUserRoles,
  validateEmailPasswordFromAD,
} from '../../assets/common/apis/Api_config'
import { authenticationAPI } from '../../assets/common/apis/Api_ends_points'

const setClient = (response) => {
  return {
    type: actions.SET_MQTT_CLIENT,
    response: response,
  }
}

const logininit = () => {
  return {
    type: actions.LOG_IN_INIT,
  }
}

const loginsuccess = (response, message) => {
  return {
    type: actions.LOG_IN_SUCCESS,
    response: response,
    message: message,
  }
}

const loginfail = (message) => {
  return {
    type: actions.LOG_IN_FAIL,
    message: message,
  }
}

const signupInit = () => {
  return {
    type: actions.SIGN_UP_INIT,
  }
}

const signupSuccess = (response, message, severity) => {
  return {
    type: actions.SIGN_UP_SUCCESS,
    response: response,
    message: message,
    severity: severity,
  }
}

const signupFail = (message, severity) => {
  return {
    type: actions.SIGN_UP_FAIL,
    message: message,
    severity: severity,
  }
}

const signOut = (navigate, message) => {
  localStorage.clear()
  navigate('/')
  if (message !== '') {
    return {
      type: actions.SIGN_OUT,
      message: message,
    }
  } else {
    return {
      type: actions.SIGN_OUT,
    }
  }
}

//signIn API Function
const logIn = (UserData, navigate) => {
  console.log('logincredentials', UserData)
  var min = 10000
  var max = 90000
  var id = min + Math.random() * (max - min)
  let Data = {
    UserName: UserData.UserName,
    Password: UserData.Password,
    DeviceID: id.toString(),
    Device: 'browser',
  }
  console.log('logincredentials', Data)
  return (dispatch) => {
    dispatch(logininit())
    let form = new FormData()
    form.append('RequestMethod', authenticationLogIn.RequestMethod)
    form.append('RequestData', JSON.stringify(Data))
    axios({
      method: 'post',
      url: authenticationAPI,
      data: form,
    })
      .then(async (response) => {
        if (response.data.responseCode === 200) {
          if (response.data.responseResult.isExecuted === true) {
            if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_01'
            ) {
              dispatch(loginfail('Device does not exists'))
            } else if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_02'
            ) {
              dispatch(loginfail('Device ID does not exists'))
            } else if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_03'
            ) {
              if (response.data.responseResult.roleID === 1) {
                localStorage.setItem(
                  'userID',
                  response.data.responseResult.userID,
                )
                localStorage.setItem(
                  'firstName',
                  response.data.responseResult.firstName,
                )
                localStorage.setItem(
                  'lastName',
                  response.data.responseResult.lastName,
                )
                localStorage.setItem(
                  'userName',
                  response.data.responseResult.userName,
                )
                localStorage.setItem(
                  'roleID',
                  response.data.responseResult.roleID,
                )
                localStorage.setItem(
                  'token',
                  response.data.responseResult.token,
                )
                localStorage.setItem(
                  'refreshToken',
                  response.data.responseResult.refreshToken,
                )
                localStorage.setItem(
                  'bankID',
                  response.data.responseResult.bankID,
                )
                navigate('/Js/')
                dispatch(loginsuccess('Successfully Logged In'))
              } else if (response.data.responseResult.roleID === 4) {
                localStorage.setItem(
                  'userID',
                  response.data.responseResult.userID,
                )
                localStorage.setItem(
                  'firstName',
                  response.data.responseResult.firstName,
                )
                localStorage.setItem(
                  'lastName',
                  response.data.responseResult.lastName,
                )
                localStorage.setItem(
                  'userName',
                  response.data.responseResult.userName,
                )
                localStorage.setItem(
                  'roleID',
                  response.data.responseResult.roleID,
                )
                localStorage.setItem(
                  'token',
                  response.data.responseResult.token,
                )
                localStorage.setItem(
                  'refreshToken',
                  response.data.responseResult.refreshToken,
                )
                navigate('/AdminDashboard/')
                dispatch(loginsuccess('Successfully Logged In'))
              } else {
                dispatch(
                  loginfail('This user is not authorise for this domain'),
                )
              }
            } else if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_04'
            ) {
              dispatch(
                loginfail('Invalid Credentials. Please enter correct password'),
              )
            } else if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_05'
            ) {
              dispatch(
                loginfail(
                  'Your account has been Locked. Please contact Data Strategy - BST',
                ),
              )
            } else if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_06'
            ) {
              dispatch(
                loginfail(
                  'Your account has been Disabled. Please contact Data Strategy - BST',
                ),
              )
            } else if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_07'
            ) {
              dispatch(
                loginfail(
                  'Your account has been Closed. Please contact Data Strategy - BST',
                ),
              )
            } else if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_08'
            ) {
              dispatch(
                loginfail(
                  'Account set to Dormant due to InActivity. Please contact Data Strategy - BST',
                ),
              )
            } else if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_09'
            ) {
              dispatch(loginfail('User could not be Verified'))
            } else if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_10'
            ) {
              dispatch(
                loginfail('Not a valid user. Please login with valid user'),
              )
            } else if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_AuthManager_Login_011'
            ) {
              dispatch(loginfail('something went wrong'))
            }
          } else {
            dispatch(loginfail('something went wrong'))
            console.log('something went wrong')
          }
        } else {
          dispatch(loginfail('something went wrong'))
          console.log('something went wrong')
        }
      })
      .catch((response) => {
        dispatch(loginfail('something went wrong'))
      })
  }
}

// signUp API Function
const signUp = (Data, navigate) => {
  return (dispatch) => {
    dispatch(signupInit(Data))
    let form = new FormData()
    form.append('RequestMethod', authenticationSignUp.RequestMethod)
    form.append('RequestData', JSON.stringify(Data))
    axios({
      method: 'POST',
      url: authenticationAPI,
      data: form,
    })
      .then(async (response) => {
        if (response.data.responseCode === 200) {
          if (response.data.responseResult.isExecuted === true) {
            if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_SignUpManager_SignUp_01'
            ) {
              dispatch(
                signupFail(
                  'Invalid Role for Signup. Please select a role from the given options',
                ),
                'warning',
              )
            }
            if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_SignUpManager_SignUp_02'
            ) {
              dispatch(
                signupFail(
                  'Signup request for the Login ID is in pending state. Please use a different ID',
                  'info',
                ),
              )
            }
            if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_SignUpManager_SignUp_03'
            ) {
              if (response.data.responseResult.roleID === 1) {
                localStorage.setItem(
                  'userID',
                  response.data.responseResult.userID,
                )
                localStorage.setItem(
                  'firstName',
                  response.data.responseResult.firstName,
                )
                localStorage.setItem(
                  'lastName',
                  response.data.responseResult.lastName,
                )
                localStorage.setItem(
                  'userName',
                  response.data.responseResult.userName,
                )
                localStorage.setItem(
                  'roleID',
                  response.data.responseResult.roleID,
                )
                navigate('/')
                dispatch(signupSuccess('Successfully signup In'), 'success')
              } else if (response.data.responseResult.roleID === 4) {
                localStorage.setItem(
                  'userID',
                  response.data.responseResult.userID,
                )
                localStorage.setItem(
                  'firstName',
                  response.data.responseResult.firstName,
                )
                localStorage.setItem(
                  'lastName',
                  response.data.responseResult.lastName,
                )
                localStorage.setItem(
                  'userName',
                  response.data.responseResult.userName,
                )
                localStorage.setItem(
                  'roleID',
                  response.data.responseResult.roleID,
                )
                navigate('/')
                dispatch(signupSuccess('Successfully Signup In'), 'success')
              } else {
                dispatch(
                  signupFail('This user is not authorise for this domain'),
                  'warning',
                )
              }
            }
            if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_SignUpManager_SignUp_04'
            ) {
              dispatch(
                signupFail(
                  'Unable to submit signup request. Please try after some time',
                  'error',
                ),
              )
            }
            if (
              response.data.responseResult.responseMessage ===
              'ERM_AuthService_SignUpManager_SignUp_05'
            ) {
              dispatch(signupFail('Something went wrong', 'error'))
            }
          } else {
            dispatch(signupFail('Something went wrong', 'error'))
            console.log('Something went wrong in signup')
          }
        } else {
          dispatch(signupFail('Something went wrong', 'error'))
          console.log('Something went wrong in signup')
        }
      })

      .catch((response) => {
        dispatch(signupFail('Something went wrong', 'error'))
      })
  }
}

const rolesInit = () => {
  return {
    type: actions.USER_ROLES_INIT,
  }
}

const rolesSuccess = (response, message) => {
  return {
    type: actions.USER_ROLES_SUCCESS,
    response: response,
    message: message,
  }
}

const rolesFail = (response, message) => {
  return {
    type: actions.USER_ROLES_FAIL,
    response: response,
    message: message,
  }
}

// getAllUserRoles API Function
const allUserRoles = () => {
  return (dispatch) => {
    dispatch(rolesInit())
    let form = new FormData()
    form.append('RequestMethod', authenticationUserRoles.RequestMethod)
    axios({
      method: 'POST',
      url: authenticationAPI,
      data: form,
    })
      .then(async (response) => {
        console.log('UserRoleListUserRoleList', response)
        if (response.data.responseCode === 200) {
          if (response.data.responseResult.isExecuted === true) {
            if (
              response.data.responseResult.responseMessage.toLowerCase() ===
              'ERM_AuthService_CommonManager_RoleList_01'.toLowerCase()
            ) {
              console.log('UserRoleListUserRoleList', response)
              dispatch(rolesSuccess(response.data.responseResult.roles, ''))
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  'ERM_AuthService_CommonManager_RoleList_02'.toLowerCase(),
                )
            ) {
              dispatch(rolesFail(''))
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  'ERM_AuthService_CommonManager_RoleList_03'.toLowerCase(),
                )
            ) {
              dispatch(rolesFail('Exception No roles available'))
            }
          } else {
            dispatch(rolesFail('Something went wrong'))
            console.log("There's no User Role")
          }
        } else {
          dispatch(rolesFail('Something went wrong'))
          console.log("There's no User Role")
        }
      })
      .catch((response) => {
        dispatch(rolesFail('something went wrong'))
      })
  }
}

// FOR VALIDATE EMAIL API
const validateInit = () => {
  return {
    type: actions.VALIDATE_EMAIL_PASSWORD_INIT,
  }
}

const validateSuccess = (response, message, severity) => {
  return {
    type: actions.VALIDATE_EMAIL_PASSWORD_SUCCESS,
    response: response,
    message: message,
    severity: severity,
  }
}

const validateFail = (message, severity) => {
  return {
    type: actions.VALIDATE_EMAIL_PASSWORD_FAIL,
    message: message,
    severity: severity,
  }
}

const validateEmailPassword = (email, password, navigate) => {
  let Data = {
    UserName: email,
    Password: password,
  }
  return async (dispatch) => {
    dispatch(validateInit(Data))
    let form = new FormData()
    form.append('RequestMethod', validateEmailPasswordFromAD.RequestMethod)
    form.append('RequestData', JSON.stringify(Data))
    await axios({
      method: 'POST',
      url: authenticationAPI,
      data: form,
    })
      .then(async (response) => {
        console.log('validateEmailvalidateEmail', response)
        if (response.data.responseCode === 200) {
          if (response.data.responseResult.isExecuted === true) {
            if (
              response.data.responseResult.responseMessage.toLowerCase() ===
              'ERM_AuthService_AuthManager_ValidateEmailAndPasswordFromAD_01'.toLowerCase()
            ) {
              console.log('validateEmailvalidateEmail', response)
              dispatch(
                validateFail('User / Password must not be empty'),
                'warning',
              )
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  'ERM_AuthService_AuthManager_ValidateEmailAndPasswordFromAD_02'.toLowerCase(),
                )
            ) {
              dispatch(
                validateFail(
                  'User already exists in JS System. Please use other credentials',
                  'warning',
                ),
              )
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  'ERM_AuthService_AuthManager_ValidateEmailAndPasswordFromAD_03'.toLowerCase(),
                )
            ) {
              let data = {
                Email: response.data.responseResult.email,
                FirstName: response.data.responseResult.firstName,
                LastName: response.data.responseResult.lastName,
                UserName: response.data.responseResult.userName,
              }

              await dispatch(
                validateSuccess(
                  data,
                  'Credentials has been verified',
                  'success',
                ),
              )
              navigate('/SignUp')
            } else if (
              response.data.responseResult.responseMessage
                .toLowerCase()
                .includes(
                  'ERM_AuthService_AuthManager_ValidateEmailAndPasswordFromAD_04'.toLowerCase(),
                )
            ) {
              dispatch(validateFail('Exception No Validation Found'), 'error')
            }
          } else {
            dispatch(validateFail('Something went wrong'), 'error')
            console.log("There's no User Role")
          }
        } else {
          dispatch(validateFail('Something went wrong'), 'error')
          console.log("There's no User Role")
        }
      })
      .catch((response) => {
        dispatch(validateFail('something went wrong'))
      })
  }
}

export {
  setClient,
  logIn,
  signUp,
  signOut,
  allUserRoles,
  validateEmailPassword,
}
