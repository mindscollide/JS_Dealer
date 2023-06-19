const _token = localStorage.getItem("token");

const authenticationLogIn = {
  RequestMethod: "ServiceManager.Login",
};

const authenticationSignUp = {
  RequestMethod: "ServiceManager.SignUp",
};

const authenticationUserRoles = {
  RequestMethod: "ServiceManager.RoleList",
};

const validateEmailPasswordFromAD = {
  RequestMethod: "ServiceManager.ValidateEmailAndPasswordFromAD",
};

// for dealer ports

const getRatestables = {
  RequestMethod: "ServiceManager.GetRates",
};

export {
  authenticationLogIn,
  authenticationSignUp,
  authenticationUserRoles,
  validateEmailPasswordFromAD,
  getRatestables,
};
