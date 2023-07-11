import * as actions from '../action_types'
import axios from 'axios'
import {
  authenticationRefreshToken,
  getRecentQuoteTbill,
  getRecentQuotePib,
  getRecentQuotePibFloater,
  getRecentQuoteSukuk,
  getAllOutstandingDetails,
  updateVolmeterByDealer,
} from '../../assets/common/apis/Api_config'
import {
  dealerAPI,
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

const getRecentQuoteTbillInitial = () => {
  return {
    type: actions.GET_RECENT_QUOTE_TBILL,
  }
}

const getRecentQuoteTbillSuccess = (response, message) => {
  return {
    type: actions.GET_RECENT_QUOTE_TBILL_SUCCESS,
    response: response,
    message: message,
  }
}

const getRecentQuoteTbillFail = (message) => {
  return {
    type: actions.GET_RECENT_QUOTE_TBILL_FAIL,
    message: message,
  }
}

//getRecentQuoteTbill
const GetRecentQuoteTbill = (navigate) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch(getRecentQuoteTbillInitial())
    let form = new FormData()
    form.append('RequestMethod', getRecentQuoteTbill.RequestMethod)

    axios({
      method: 'post',
      url: dealerAPI,
      data: form,
      headers: {
        _token: token,
      },
    })
      .then(async (response) => {
        console.log('GetRecentQuoteTbill', response)
        if (response.data.responseCode === 417) {
          await dispatch(RefreshToken(navigate))
          dispatch(GetRecentQuoteTbill())
        } else if (response.data.responseResult.isExecuted === true) {
          if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuoteTbill_01'
          ) {
            await dispatch(
              getRecentQuoteTbillSuccess(
                response.data.responseResult,
                'Rates available',
              ),
            )
          } else if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuoteTbill_02'
          ) {
            dispatch(getRecentQuoteTbillFail('No Rates Available'))
          } else if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuoteTbill_03'
          ) {
            dispatch(getRecentQuoteTbillFail('Exception'))
          }
        } else {
          dispatch(getRecentQuoteTbillFail('Exception'))
        }
      })
      .catch((response) => {
        dispatch(getRecentQuoteTbillFail('Exception'))
      })
  }
}

const getRecentQuotePibInitial = () => {
  return {
    type: actions.GET_RECENT_QUOTE_PIB,
  }
}

const getRecentQuotePibSuccess = (response, message) => {
  return {
    type: actions.GET_RECENT_QUOTE_PIB_SUCCESS,
    response: response,
    message: message,
  }
}

const getRecentQuotePibFail = (message) => {
  return {
    type: actions.GET_RECENT_QUOTE_PIB_FAIL,
    message: message,
  }
}

//GetRecentQuotePib
const GetRecentQuotePib = (navigate) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch(getRecentQuotePibInitial())
    let form = new FormData()
    form.append('RequestMethod', getRecentQuotePib.RequestMethod)

    axios({
      method: 'post',
      url: dealerAPI,
      data: form,
      headers: {
        _token: token,
      },
    })
      .then(async (response) => {
        console.log('GetRecentQuotePib', response)
        if (response.data.responseCode === 417) {
          await dispatch(RefreshToken(navigate))
          dispatch(GetRecentQuotePib())
        } else if (response.data.responseResult.isExecuted === true) {
          if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuotePib_01'
          ) {
            await dispatch(
              getRecentQuotePibSuccess(
                response.data.responseResult,
                'Rates available',
              ),
            )
          } else if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuotePib_02'
          ) {
            dispatch(getRecentQuotePibFail('No Rates Available'))
          } else if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuotePib_03'
          ) {
            dispatch(getRecentQuotePibFail('Exception'))
          }
        } else {
          dispatch(getRecentQuotePibFail('Exception'))
        }
      })
      .catch((response) => {
        dispatch(getRecentQuotePibFail('Exception'))
      })
  }
}

const getRecentQuotePibFloaterInitial = () => {
  return {
    type: actions.GET_RECENT_QUOTE_PIB_FLOATER,
  }
}

const getRecentQuotePibFloaterSuccess = (response, message) => {
  return {
    type: actions.GET_RECENT_QUOTE_PIB_FLOATER_SUCCESS,
    response: response,
    message: message,
  }
}

const getRecentQuotePibFloaterFail = (message) => {
  return {
    type: actions.GET_RECENT_QUOTE_PIB_FLOATER_FAIL,
    message: message,
  }
}

//GetRecentQuotePibFloater
const GetRecentQuotePibFloater = (navigate) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch(getRecentQuotePibFloaterInitial())
    let form = new FormData()
    form.append('RequestMethod', getRecentQuotePibFloater.RequestMethod)

    axios({
      method: 'post',
      url: dealerAPI,
      data: form,
      headers: {
        _token: token,
      },
    })
      .then(async (response) => {
        console.log('GetRecentQuotePibFloater', response)
        if (response.data.responseCode === 417) {
          await dispatch(RefreshToken(navigate))
          dispatch(GetRecentQuotePibFloater())
        } else if (response.data.responseResult.isExecuted === true) {
          if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuotePibFloater_01'
          ) {
            await dispatch(
              getRecentQuotePibFloaterSuccess(
                response.data.responseResult,
                'Rates available',
              ),
            )
          } else if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuotePibFloater_02'
          ) {
            dispatch(getRecentQuotePibFloaterFail('No Rates Available'))
          } else if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuotePibFloater_03'
          ) {
            dispatch(getRecentQuotePibFloaterFail('Exception'))
          }
        } else {
          dispatch(getRecentQuotePibFloaterFail('Exception'))
        }
      })
      .catch((response) => {
        dispatch(getRecentQuotePibFloaterFail('Exception'))
      })
  }
}

const getRecentQuoteSukukInitial = () => {
  return {
    type: actions.GET_RECENT_QUOTE_SUKUK,
  }
}

const getRecentQuoteSukukSuccess = (response, message) => {
  return {
    type: actions.GET_RECENT_QUOTE_SUKUK_SUCCESS,
    response: response,
    message: message,
  }
}

const getRecentQuoteSukukFail = (message) => {
  return {
    type: actions.GET_RECENT_QUOTE_SUKUK_FAIL,
    message: message,
  }
}

//GetRecentQuoteSukuk
const GetRecentQuoteSukuk = (navigate) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch(getRecentQuoteSukukInitial())
    let form = new FormData()
    form.append('RequestMethod', getRecentQuoteSukuk.RequestMethod)

    axios({
      method: 'post',
      url: dealerAPI,
      data: form,
      headers: {
        _token: token,
      },
    })
      .then(async (response) => {
        console.log('GetRecentQuoteSukuk', response)
        if (response.data.responseCode === 417) {
          await dispatch(RefreshToken(navigate))
          dispatch(GetRecentQuoteSukuk())
        } else if (response.data.responseResult.isExecuted === true) {
          if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuoteSukuk_01'
          ) {
            await dispatch(
              getRecentQuoteSukukSuccess(
                response.data.responseResult,
                'Rates available',
              ),
            )
          } else if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuoteSukuk_02'
          ) {
            dispatch(getRecentQuoteSukukFail('No Rates Available'))
          } else if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetRecentQuoteSukuk_03'
          ) {
            dispatch(getRecentQuoteSukukFail('Exception'))
          }
        } else {
          dispatch(getRecentQuoteSukukFail('Exception'))
        }
      })
      .catch((response) => {
        dispatch(getRecentQuoteSukukFail('Exception'))
      })
  }
}

const getAllOutstandingDetailsInitial = () => {
  return {
    type: actions.GET_OUTSTANDING_DETAILS,
  }
}

const getAllOutstandingDetailsSuccess = (response, message) => {
  return {
    type: actions.GET_OUTSTANDING_DETAILS_SUCCESS,
    response: response,
    message: message,
  }
}

const getAllOutstandingDetailsFail = (message) => {
  return {
    type: actions.GET_OUTSTANDING_DETAILS_FAIL,
    message: message,
  }
}

//GetAllOutstandingDetails
const GetAllOutstandingDetails = (navigate) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch(getAllOutstandingDetailsInitial())
    let form = new FormData()
    form.append('RequestMethod', getAllOutstandingDetails.RequestMethod)

    axios({
      method: 'post',
      url: dealerAPI,
      data: form,
      headers: {
        _token: token,
      },
    })
      .then(async (response) => {
        console.log('GetRecentQuoteSukuk', response)
        if (response.data.responseCode === 417) {
          await dispatch(RefreshToken(navigate))
          dispatch(GetAllOutstandingDetails())
        } else if (response.data.responseResult.isExecuted === true) {
          if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetAllOutstandingDetails_01'
          ) {
            await dispatch(
              getAllOutstandingDetailsSuccess(
                response.data.responseResult,
                'Data available',
              ),
            )
          } else if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetAllOutstandingDetails_02'
          ) {
            dispatch(getAllOutstandingDetailsFail('No Data available'))
          } else if (
            response.data.responseResult.responseMessage ===
            'Dealer_DealerServiceManager_GetAllOutstandingDetails_03'
          ) {
            dispatch(getAllOutstandingDetailsFail('Exception'))
          }
        } else {
          dispatch(getAllOutstandingDetailsFail('Exception'))
        }
      })
      .catch((response) => {
        dispatch(getAllOutstandingDetailsFail('Exception'))
      })
  }
}

export {
  GetRecentQuoteTbill,
  GetRecentQuotePib,
  GetRecentQuotePibFloater,
  GetRecentQuoteSukuk,
  GetAllOutstandingDetails,
}
