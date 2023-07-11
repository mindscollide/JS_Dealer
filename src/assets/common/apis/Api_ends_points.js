// our base url or machine api
const baseURL = 'http://192.168.18.241'

// our service URLs
const authenticationPort = ':12000/ERM_Auth'
const dealerPort = ':12005/Dealer'
const systemAdminUrl = ':12003/SystemAdmin'

//our Final Api
const authenticationAPI = baseURL + authenticationPort
const dealerAPI = baseURL + dealerPort
const systemAdminApi = baseURL + systemAdminUrl

export { authenticationAPI, dealerAPI, systemAdminApi }
