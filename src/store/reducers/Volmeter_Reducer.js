import * as actions from '../action_types'

const initialState = {
  isLoggedIn: false,
  Loader: false,
  ResponseMessage: '',
  SessionExpeireResponseMessage: '',
  Token: '',
  Refresh: '',
  GetVolMetersByBankIDData: [],
  UpdateVolmeterByDealerData: [],
  Severity: '',
}

const volmeterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_VOLMETER: {
      return {
        ...state,
        Loader: true,
      }
    }

    case actions.UPDATE_VOLMETER_SUCCESS: {
      return {
        ...state,
        Loader: false,
        UpdateVolmeterByDealerData: action.response,
        ResponseMessage: action.message,
        Severity: action.severity,
      }
    }

    case actions.UPDATE_VOLMETER_FAIL: {
      return {
        ...state,
        Loader: false,
        UpdateVolmeterByDealerData: [],
        ResponseMessage: action.message,
        Severity: action.severity,
      }
    }

    case actions.GET_VOLMETER_BY_BANKID: {
      return {
        ...state,
        Loader: true,
      }
    }

    case actions.GET_VOLMETER_BY_BANKID_SUCCESS: {
      return {
        ...state,
        Loader: false,
        GetVolMetersByBankIDData: action.response,
        ResponseMessage: action.message,
        Severity: action.severity,
      }
    }

    case actions.GET_VOLMETER_BY_BANKID_FAIL: {
      return {
        ...state,
        Loader: false,
        GetVolMetersByBankIDData: [],
        ResponseMessage: action.message,
        Severity: action.severity,
      }
    }

    default:
      return { ...state }
  }
}

export default volmeterReducer
