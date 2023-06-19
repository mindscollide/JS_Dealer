import * as actions from "../action_types";
import axios from "axios";
import { getRatestables } from "../../assets/common/apis/Api_config";
import { dealerAPI } from "../../assets/common/apis/Api_ends_points";

const getRatesInit = () => {
  return {
    type: actions.GET_RATES_TABLE_INIT,
  };
};

const getRatesSuccess = (response, message) => {
  return {
    type: actions.GET_RATES_TABLE_SUCCESS,
    response: response,
    message: message,
  };
};

const getRatesFail = (message) => {
  return {
    type: actions.GET_RATES_TABLE_FAIL,
    message: message,
  };
};

export {};
