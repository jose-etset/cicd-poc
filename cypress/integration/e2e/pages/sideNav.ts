import BasePage from './base';
import locators from '../locators/sideNav';

class SideNav extends BasePage {
  // *** Getters *** //
  getNavToggle() {return cy.get(locators.navToggle)}
  getNavContainer() {return cy.get(locators.navContainer)}
  getUgLogo() {return cy.get(locators.navContainer)}
  //Common features
  getDashboardLink() {return cy.get(locators.dashboardLink)}
  getContactsLink() {return cy.get(locators.contactsLink)}
  getCalendarLink() {return cy.get(locators.calendarLink)}
  getTasksLink() {return cy.get(locators.tasksLink)}
  getBrandingLink() {return cy.get(locators.brandingLink)}
  //Marketplace
  getMarketplaceSection() {return cy.get(locators.marketplaceSection)}
  getListingLink() {return cy.get(locators.listingLink)}
  getProductsLink() {return cy.get(locators.productsLink)}
  //Finances
  getFinancesSection() {return cy.get(locators.financesSection)}
  getProposalsLink() {return cy.get(locators.proposalsLink)}
  getInvoicesLink() {return cy.get(locators.invoicesLink)}
  getPaymentsLink() {return cy.get(locators.paymentsLink)}
  //Markteing
  getMarketingSection() {return cy.get(locators.marketingSection)}
  getEmailCampaignsLink() {return cy.get(locators.emailCampaignsLink)}
  getDesignStudioLink() {return cy.get(locators.designStudioLink)}
  getMediaLibraryLink() {return cy.get(locators.mediaLibraryLink)}
  getFormsLink() {return cy.get(locators.formsLink)}
  getLandingPagesLink() {return cy.get(locators.landingPagesLink)}
  //General
  getGeneralSection() {return cy.get(locators.generalLink)}
  getCommunityLink() {return cy.get(locators.communityLink)}
  getAffiliateProgramLink() {return cy.get(locators.affiliateProgramLink)}

  // *** Actions *** //

  /**
   * this function validates the presence of the Side Navigation elements
   */
  validateComponents(fullAccess = true) {
    this.getUgLogo().should('be.visible', {force: true})
    this.getDashboardLink().should('be.visible', {force: true})
    this.getContactsLink().should('be.visible', {force: true})
    this.getCalendarLink().should('be.visible', {force: true})
    this.getTasksLink().should('be.visible', {force: true})
    this.getBrandingLink().should('be.visible', {force: true})
    if(fullAccess){
      this.getMarketplaceSection().should('be.visible', {force: true})
      this.getListingLink().should('be.visible', {force: true})
      this.getProductsLink().should('be.visible', {force: true})
      this.getFinancesSection().should('be.visible', {force: true})
      this.getProposalsLink().should('be.visible', {force: true})
      this.getInvoicesLink().should('be.visible', {force: true})
      this.getPaymentsLink().should('be.visible', {force: true})
      this.getMarketingSection().should('be.visible', {force: true})
      this.getEmailCampaignsLink().should('be.visible', {force: true})
      this.getDesignStudioLink().should('be.visible', {force: true})
      this.getMediaLibraryLink().should('be.visible', {force: true})
      this.getFormsLink().should('be.visible', {force: true})
      this.getLandingPagesLink().should('be.visible', {force: true})
      this.getGeneralSection().should('be.visible', {force: true})
      this.getCommunityLink().should('be.visible', {force: true})
      this.getAffiliateProgramLink().should('be.visible', {force: true})
    }
  }

}

export default new SideNav();
