// our base url or machine api
const baseURL = "http://192.168.18.241";

// our service URLs
const authenticationPort = ":12000/ERM_Auth";
const dealerPort = ":45606/Dealer";

//our Final Api
const authenticationAPI = baseURL + authenticationPort;
const dealerAPI = baseURL + dealerPort;

export { authenticationAPI, dealerAPI };
