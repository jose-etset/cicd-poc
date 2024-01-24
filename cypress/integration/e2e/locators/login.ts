import Base from './base';

class Login extends Base {
  // Site information
  get loginParent() { return '.login-component'; }
  get ugLogo() { return '.logo'; }
  get usernameInput() { return '[placeholder = "Email"]'; }
  get passwordInput() { return '[placeholder = "Password"]'; }
  get loginErrorMessageBox() { return '.error'; }
  get selectProjectDropdown() { return '.selection'; }
}

export default new Login();
