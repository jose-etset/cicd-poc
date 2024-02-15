import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import { afterEach, beforeEach } from 'mocha';
import sideNav from '../e2e/pages/sideNav';

// Hooks
beforeEach(() => {
  cy.openHomePage()
});

afterEach(() => {
});

//Actions
When('user presses key {string}', (key) => {
  cy.get('body').trigger('keydown', { keyCode: key});
})

When('user waits for {float} minute(s)', (minutes) => {
  cy.wait(minutes * 1000) // convert to milliseconds
})

When('user refreshes page', () => {
  cy.reload()
})

//Verifications
Then('{string} is displayed', (text) => {
  cy.contains(text).should('be.visible')
})

Then('{string} is not displayed', (text) => {
  cy.contains(text).should('not.exist')
})

Then ('side navigation components are displayed', () => {
  sideNav.validateComponents()
})