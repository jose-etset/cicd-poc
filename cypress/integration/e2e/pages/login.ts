import BasePage from './base';
import locators from '../locators/login';
// import eyes from '../helpers/eyes';

class Login extends BasePage {
  // *** Getters *** //
  getLoginParent() {return cy.get(locators.loginParent)}
  getUGLogo() {return cy.get(locators.ugLogo)}
  getUserInput() {return cy.get(locators.usernameInput)}
  getPasswordInput() {return cy.get(locators.passwordInput)}
  getLoginButton() {return cy.get('.btn').contains('Login')}
  getLoginErrorBox() {return cy.get(locators.loginErrorMessageBox)}
  getSelectProjectDropdown() {return cy.get(locators.selectProjectDropdown)}
  getReturnToLoginButton() {return cy.get('.btn').contains('Return to login')}
  getContinueButton() {return cy.get('.btn').contains('Continue')}

  // *** Actions *** //

  /**
   * this function receive a role parameter and search to the credentials to write it on the login page
   * @param role 
   */
  enterCredentials(role) {
    switch(role) { 
      case 'admin': { 
        this.enterUsername(Cypress.env('ADMIN_USER'));
        this.enterPassword(Cypress.env('ADMIN_PASS'));
        break; 
      } 
      case '': {
        break;
      }
      case 'invalid': { 
        this.enterUsername('testUser@ugtest.com');
        this.enterPassword('testpass123');
        break; 
      } 
      case 'user': { 
        this.enterUsername(Cypress.env('USER_USER'));
        this.enterPassword(Cypress.env('USER_PASS'));
        break; 
      } 
      default: {
        throw 'Please provide a valid role'
      }
   } 
  }

  /**
   * receives an user parameter and write it on the username field
   * @param user 
   */
  enterUsername(user) {
    this.getUserInput().type(user)
  }

  /**
   * receives a password parameter and enters it in the password field
   * @param pass 
   */
  enterPassword(pass) {
    this.getPasswordInput().type(pass)
  }
  
  /**
   * this function clicks on login button in the shall login page
   */
  submitLogin() {
    this.getLoginButton().click({force:true}).wait(5000)
  }

  /**
   * this function validates the components for the login page
   */
  validateComponents() {
    this.getUGLogo().should('be.visible')
    this.getUserInput().should('be.visible')
    this.getPasswordInput().should('be.visible')
    this.getLoginButton().parent().should('be.disabled')
  }

  /**
   * This function validates the project select screen shown to admins
   */
  validateProjectSelectComponents() {
    cy.contains('Please Select an Account').should('be.visible')
    cy.contains('Select an account*').should('be.visible')
    this.getSelectProjectDropdown().should('be.visible')
    this.getReturnToLoginButton().should('be.visible')
    this.getContinueButton().should('be.visible')
  }

  /**
   * this function receives receives and enters two parameters then it clicks on login button
   * @param user
   * @param pass 
   */
  submitCredentials(user, pass) {
    this.enterUsername(user)
    this.enterPassword(pass)
    this.submitLogin()
  }

  /**
   * This function receives a login status expectation and validate once the user tries to login on the OA page
   * @param loginStatus
   */
  validateSuccessfulLogin(loginStatus) {
    if(loginStatus=='successfully'){
      cy.contains('Welcome back, ').should('be.visible')
    }else if(loginStatus=='unsuccessfully'){
      cy.contains('Attention your access credentials are wrong.').should('be.visible')
    }    
  }

  /**
   * this function goes to differents webpages specifying the endpoint
   * @param endpoint 
   */
  goToWebPage(endpoint){
    cy.openHomePage(endpoint)
  }

}

export default new Login();
