import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import { afterEach, beforeEach } from 'mocha';
import dashboard from '../e2e/pages/dashboard';

// Hooks

//Actions

Then ('dashboard components are displayed', () => {
  dashboard.validateComponents()
})