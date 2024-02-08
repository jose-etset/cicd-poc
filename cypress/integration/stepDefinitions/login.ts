import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../e2e/pages/login'

Given("user logs in as {string}", (role) => {
  loginPage.enterCredentials(role)
  loginPage.submitLogin()
});

When("user enters {string} credentials", (role) => {
  loginPage.enterCredentials(role)
});

When("user submits credentials", () => {
  loginPage.submitLogin()
});

When("navigates to {string} panel", (endpoint) => {
  loginPage.goToWebPage(endpoint)
});

Then("user is {string} logged into Uncommongood", (loginStatus) => {
  loginPage.validateSuccessfulLogin(loginStatus)
});

Then ('login components are displayed', () => {
  loginPage.validateComponents()
})

Then ('project select screen is displayed', () => {
  loginPage.validateProjectSelectComponents()
})
