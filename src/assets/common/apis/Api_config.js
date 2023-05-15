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
export { authenticationLogIn, authenticationSignUp, authenticationUserRoles };
