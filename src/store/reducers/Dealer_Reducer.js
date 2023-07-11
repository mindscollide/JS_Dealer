import * as actions from '../action_types'

const initialState = {
  isLoggedIn: false,
  Loader: false,
  ResponseMessage: '',
  SessionExpeireResponseMessage: '',
  Token: '',
  Refresh: '',
  GetRecentQuoteTbillData: [],
  GetRecentQuotePibData: [],
  GetRecentQuotePibFloaterData: [],
  GetRecentQuoteSukukData: [],
  GetAllOutstandingDetailsData: [],
  UpdateVolmeterByDealerData: [],
}

const dealerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REFRESH_TOKEN_SUCCESS: {
      localStorage.setItem('token', JSON.stringify(action.response.token))
      localStorage.setItem(
        'RefreshToken',
        JSON.stringify(action.response.refreshToken),
      )
      return {
        ...state,
        ResponseMessage: action.message,
        Token: action.response.token,
        Refresh: action.response.refreshToken,
      }
    }

    case actions.REFRESH_TOKEN_FAIL: {
      console.log('RefreshToken', action)
      return {
        ...state,
        isLoggedIn: false,
        Loader: false,
        SessionExpireResponseMessage: action.message,
        Token: '',
        Refresh: '',
      }
    }

    case actions.GET_RECENT_QUOTE_TBILL: {
      return {
        ...state,
        Loader: true,
      }
    }

    case actions.GET_RECENT_QUOTE_TBILL_SUCCESS: {
      return {
        ...state,
        Loader: false,
        GetRecentQuoteTbillData: action.response,
        ResponseMessage: action.message,
      }
    }

    case actions.GET_RECENT_QUOTE_TBILL_FAIL: {
      return {
        ...state,
        Loader: false,
        GetRecentQuoteTbillData: [],
        ResponseMessage: action.message,
      }
    }

    case actions.GET_RECENT_QUOTE_PIB: {
      return {
        ...state,
        Loader: true,
      }
    }

    case actions.GET_RECENT_QUOTE_PIB_SUCCESS: {
      return {
        ...state,
        Loader: false,
        GetRecentQuotePibData: action.response,
        ResponseMessage: action.message,
      }
    }

    case actions.GET_RECENT_QUOTE_PIB_FAIL: {
      return {
        ...state,
        Loader: false,
        GetRecentQuotePibData: [],
        ResponseMessage: action.message,
      }
    }

    case actions.GET_RECENT_QUOTE_PIB_FLOATER: {
      return {
        ...state,
        Loader: true,
      }
    }

    case actions.GET_RECENT_QUOTE_PIB_FLOATER_SUCCESS: {
      return {
        ...state,
        Loader: false,
        GetRecentQuotePibFloaterData: action.response,
        ResponseMessage: action.message,
      }
    }

    case actions.GET_RECENT_QUOTE_PIB_FLOATER_FAIL: {
      return {
        ...state,
        Loader: false,
        GetRecentQuotePibFloaterData: [],
        ResponseMessage: action.message,
      }
    }

    case actions.GET_RECENT_QUOTE_SUKUK: {
      return {
        ...state,
        Loader: true,
      }
    }

    case actions.GET_RECENT_QUOTE_SUKUK_SUCCESS: {
      return {
        ...state,
        Loader: false,
        GetRecentQuoteSukukData: action.response,
        ResponseMessage: action.message,
      }
    }

    case actions.GET_RECENT_QUOTE_SUKUK_FAIL: {
      return {
        ...state,
        Loader: false,
        GetRecentQuoteSukukData: [],
        ResponseMessage: action.message,
      }
    }

    case actions.GET_OUTSTANDING_DETAILS: {
      return {
        ...state,
        Loader: true,
      }
    }

    case actions.GET_OUTSTANDING_DETAILS_SUCCESS: {
      return {
        ...state,
        Loader: false,
        GetAllOutstandingDetailsData: action.response,
        ResponseMessage: action.message,
      }
    }

    case actions.GET_OUTSTANDING_DETAILS_FAIL: {
      return {
        ...state,
        Loader: false,
        GetAllOutstandingDetailsData: [],
        ResponseMessage: action.message,
      }
    }

    default:
      return { ...state }
  }
}

export default dealerReducer
