import * as actions from '../action_types'
import axios from 'axios'
import {
  authenticationRefreshToken,
  updateVolmeterByDealer,
  getVolMetersByBankID,
} from '../../assets/common/apis/Api_config'
import {
  authenticationAPI,
  systemAdminApi,
} from '../../assets/common/apis/Api_ends_points'
import { signOut } from './Auth-Actions'

// REFRESH TOKEN
// SUCCESS
const refreshtokenSuccess = (response, message) => {
  return {
    type: actions.REFRESH_TOKEN_SUCCESS,
    response: response,
    message: message,
  }
}

// FAIL
const refreshtokenFail = (response, message) => {
  return {
    type: actions.REFRESH_TOKEN_FAIL,
    response: response,
    message: message,
  }
}

// API
const RefreshToken = (navigate) => {
  let Token = JSON.parse(localStorage.getItem('token'))
  let RefreshToken = JSON.parse(localStorage.getItem('refreshToken'))
  console.log('RefreshToken', Token, RefreshToken)
  let Data = {
    Token: Token,
    RefreshToken: RefreshToken,
  }
  console.log('RefreshToken', Data)
  return async (dispatch) => {
    let form = new FormData()
    form.append('RequestMethod', authenticationRefreshToken.RequestMethod)
    form.append('RequestData', JSON.stringify(Data))
    await axios({
      method: 'post',
      url: authenticationAPI,
      data: form,
    })
      .then(async (response) => {
        console.log('RefreshToken', response)
        if (response.data.responseCode === 200) {
          await dispatch(
            refreshtokenSuccess(
              response.data.responseResult,
              'Refresh Token Update Successfully',
            ),
          )
        } else {
          console.log('RefreshToken', response)
          let message2 = 'Your Session has expired. Please login again'
          dispatch(signOut(navigate, message2))
          await dispatch(
            refreshtokenFail('Your Session has expired. Please login again.'),
          )
        }
      })
      .catch((response) => {
        dispatch(
          refreshtokenFail('Your Session has expired. Please login again.'),
        )
      })
  }
}

const updateVolmeterByDealerInitial = () => {
  return {
    type: actions.UPDATE_VOLMETER,
  }
}

const updateVolmeterByDealerSuccess = (response, message, severity) => {
  return {
    type: actions.UPDATE_VOLMETER_SUCCESS,
    response: response,
    message: message,
    severity: severity,
  }
}

const updateVolmeterByDealerFail = (message, severity) => {
  return {
    type: actions.UPDATE_VOLMETER_FAIL,
    message: message,
    severity: severity,
  }
}

//updateVolmeterByDealer
const UpdateVolmeterByDealer = (Data, navigate) => {
  let token = localStorage.getItem('token')
  let currentBankId = localStorage.getItem('bankID')
  let getVolmeterData = {
    BankId: parseInt(currentBankId),
  }
  return (dispatch) => {
    dispatch(updateVolmeterByDealerInitial())
    let form = new FormData()
    form.append('RequestMethod', updateVolmeterByDealer.RequestMethod)
    form.append('RequestData', JSON.stringify(Data))
    axios({
      method: 'post',
      url: systemAdminApi,
      data: form,
      headers: {
        _token: token,
      },
    })
      .then(async (response) => {
        console.log('UpdateVolmeterByDealer', response)
        if (response.data.responseCode === 417) {
          await dispatch(RefreshToken(navigate))
          dispatch(UpdateVolmeterByDealer(Data, navigate))
        } else if (response.data.responseResult.isExecuted === true) {
          dispatch(GetVolMetersByBankID(getVolmeterData, navigate))
          if (
            response.data.responseResult.responseMessage ===
            'SystemAdmin_SystemAdminManager_UpdateVolmeterByDealer_01'
          ) {
            dispatch(updateVolmeterByDealerFail('Invalid Action Id', 'error'))
          } else if (
            response.data.responseResult.responseMessage ===
            'SystemAdmin_SystemAdminManager_UpdateVolmeterByDealer_02'
          ) {
            dispatch(
              updateVolmeterByDealerSuccess(
                response.data.responseResult,
                'Volmeter status updated',
                'success',
              ),
            )
          } else if (
            response.data.responseResult.responseMessage ===
            'SystemAdmin_SystemAdminManager_UpdateVolmeterByDealer_03'
          ) {
            dispatch(updateVolmeterByDealerFail('Invalid Role', 'error'))
          } else if (
            response.data.responseResult.responseMessage ===
            'SystemAdmin_SystemAdminManager_UpdateVolmeterByDealer_04'
          ) {
            dispatch(updateVolmeterByDealerFail('Exception', 'error'))
          }
        } else {
          dispatch(updateVolmeterByDealerFail('Exception', 'error'))
        }
      })
      .catch((response) => {
        dispatch(updateVolmeterByDealerFail('Exception', 'error'))
      })
  }
}

const getVolMetersByBankIDInitial = () => {
  return {
    type: actions.GET_VOLMETER_BY_BANKID,
  }
}

const getVolMetersByBankIDSuccess = (response, message, severity) => {
  return {
    type: actions.GET_VOLMETER_BY_BANKID_SUCCESS,
    response: response,
    message: message,
    severity: severity,
  }
}

const getVolMetersByBankIDFail = (message, severity) => {
  return {
    type: actions.GET_VOLMETER_BY_BANKID_FAIL,
    message: message,
    severity: severity,
  }
}

//GetVolMetersByBankID
const GetVolMetersByBankID = (Data, navigate) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch(getVolMetersByBankIDInitial())
    let form = new FormData()
    form.append('RequestMethod', getVolMetersByBankID.RequestMethod)
    form.append('RequestData', JSON.stringify(Data))
    axios({
      method: 'post',
      url: systemAdminApi,
      data: form,
      headers: {
        _token: token,
      },
    })
      .then(async (response) => {
        console.log('GetVolMetersByBankID', response)
        if (response.data.responseCode === 417) {
          await dispatch(RefreshToken(navigate))
          dispatch(GetVolMetersByBankID(Data, navigate))
        } else if (response.data.responseResult.isExecuted === true) {
          if (
            response.data.responseResult.responseMessage ===
            'SystemAdmin_SystemAdminManager_GetVolMetersByBankID_01'
          ) {
            await dispatch(
              getVolMetersByBankIDSuccess(
                response.data.responseResult,
                'Record Found',
                'success',
              ),
            )
          } else if (
            response.data.responseResult.responseMessage ===
            'SystemAdmin_SystemAdminManager_GetVolMetersByBankID_02'
          ) {
            await dispatch(
              getVolMetersByBankIDSuccess(
                response.data.responseResult,
                'Record Found',
                'success',
              ),
            )
          } else if (
            response.data.responseResult.responseMessage ===
            'SystemAdmin_SystemAdminManager_GetVolMetersByBankID_03'
          ) {
            dispatch(getVolMetersByBankIDFail('No Record Found', 'info'))
          } else if (
            response.data.responseResult.responseMessage ===
            'SystemAdmin_SystemAdminManager_GetVolMetersByBankID_04'
          ) {
            dispatch(getVolMetersByBankIDFail('Not a valid role', 'info'))
          } else if (
            response.data.responseResult.responseMessage ===
            'SystemAdmin_SystemAdminManager_GetVolMetersByBankID_05'
          ) {
            dispatch(getVolMetersByBankIDFail('Exception', 'error'))
          }
        } else {
          dispatch(updateVolmeterByDealerFail('Exception', 'error'))
        }
      })
      .catch((response) => {
        dispatch(updateVolmeterByDealerFail('Exception', 'error'))
      })
  }
}

export { UpdateVolmeterByDealer, GetVolMetersByBankID }
