const _token = localStorage.getItem("token");

const authenticationLogIn = {
  _token: null,
  RequestMethod: "ServiceManager.Login",
};

const authenticationSignUp = {
  _token: null,
  RequestMethod: "ServiceManager.SignUp",
};

const authenticationUserRoles = {
  _token: null,
  RequestMethod: "ServiceManager.GetAllUserRoles",
};
export { authenticationLogIn, authenticationSignUp, authenticationUserRoles };
