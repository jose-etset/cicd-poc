import BasePage from './base';
import locators from '../locators/dashboard';

class Dashboard extends BasePage {
  // *** Getters *** //
  // Header
  getTimeHeader() {return cy.get(locators.timeHeader)}
  getSectionSubtitle() {return cy.get(locators.sectionSubtitle)}
  // Calendar
  getPaginationButtons() {return cy.get(locators.paginationButtons)}
  getAddEventButton() {return cy.get(locators.addEventButton)}
  getViewAllEventsButton() {return cy.get(locators.viewAllEventsButton)}
  getEventsCarousel() {return cy.get(locators.eventsCarousel)}
  // Analytics
  getInformationCard() {return cy.get(locators.informationCard)}
  // Notifications
  getNotificationCount() {return cy.get(locators.notificationCount)}
  getMarkAllAsReadButton() {return cy.get(locators.markAllAsReadButton)}
  getViewAllButton() {return cy.get(locators.viewAllButton)}
  getNotificationItem() {return cy.get(locators.notificationItem)}
  // To-do list
  getAddTaskButton() {return cy.get(locators.addTaskButton)}
  getViewAllTasksButton() {return cy.get(locators.viewAllTasksButton)}
  getTodoListItem() {return cy.get(locators.todoListItem)}

  // *** Actions *** //

  /**
   * this function validates the presence of the Dashboard elements
   */
  validateComponents() {
    // Header
    this.getTimeHeader().should('be.visible')
    this.getTimeHeader().invoke('text').should('contain', 'Welcome back,')
    this.getTimeHeader().invoke('text').should('contain', "Today is")
    // Calendar
    // this.getSectionSubtitle().eq(1).should('have.text', "Calendar")
    // this.getPaginationButtons().should('be.visible')
    // this.getAddEventButton().should('be.visible')
    // this.getViewAllEventsButton().should('be.visible')
    // this.getEventsCarousel().should('be.visible')
    // Analytics
    this.getSectionSubtitle().eq(0).should('have.text', "analytics")
    this.getInformationCard().should('have.length', 3)
    this.getInformationCard().eq(0).invoke('text').should('contain', "Contact Growth")
    this.getInformationCard().eq(1).invoke('text').should('contain', "Recent Invoices")
    this.getInformationCard().eq(2).invoke('text').should('contain', "Total Invoices")
    // Notifications
    this.getSectionSubtitle().eq(1).should('contain', "notifications")
    this.getNotificationCount().should('be.visible')
    this.getMarkAllAsReadButton().should('be.visible')
    this.getViewAllButton().should('be.visible')
  }
}

export default new Dashboard();
