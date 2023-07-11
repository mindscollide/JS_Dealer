const authenticationLogIn = {
  RequestMethod: 'ServiceManager.Login',
}

const authenticationRefreshToken = {
  RequestMethod: 'ServiceManager.RefreshToken',
}

const authenticationSignUp = {
  RequestMethod: 'ServiceManager.SignUp',
}

const authenticationUserRoles = {
  RequestMethod: 'ServiceManager.RoleList',
}

const validateEmailPasswordFromAD = {
  RequestMethod: 'ServiceManager.ValidateEmailAndPasswordFromAD',
}

// for dealer ports

const getRatestables = {
  RequestMethod: 'ServiceManager.GetRates',
}

const getRecentQuoteTbill = {
  RequestMethod: 'ServiceManager.GetRecentQuoteTbill',
}

const getRecentQuotePib = {
  RequestMethod: 'ServiceManager.GetRecentQuotePib',
}

const getRecentQuotePibFloater = {
  RequestMethod: 'ServiceManager.GetRecentQuotePibFloater',
}

const getRecentQuoteSukuk = {
  RequestMethod: 'ServiceManager.GetRecentQuoteSukuk',
}

const getAllOutstandingDetails = {
  RequestMethod: 'ServiceManager.GetAllOutstandingDetails',
}

const updateVolmeterByDealer = {
  RequestMethod: 'ServiceManager.UpdateVolmeterByDealer',
}

const getVolMetersByBankID = {
  RequestMethod: 'ServiceManager.GetVolMetersByBankID',
}

export {
  authenticationRefreshToken,
  authenticationLogIn,
  authenticationSignUp,
  authenticationUserRoles,
  validateEmailPasswordFromAD,
  getRatestables,
  getRecentQuoteTbill,
  getRecentQuotePib,
  getRecentQuotePibFloater,
  getRecentQuoteSukuk,
  getAllOutstandingDetails,
  updateVolmeterByDealer,
  getVolMetersByBankID,
}
