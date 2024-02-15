import Base from './base';

class SideNav extends Base {
  // Navigation information
  get navToggle() { return '#toggle'; }
  get navContainer() { return '.navigation_main'; }
  get ugLogo() { return '.logo-item'; }
  //Common
  get dashboardLink() { return '[data-testid = "Dashboard"]'; }
  get contactsLink() { return '[data-testid = "Contacts"]'; }
  get calendarLink() { return '[data-testid = "Calendar"]'; }
  get tasksLink() { return '[data-testid = "Tasks"]'; }
  get brandingLink() { return '[data-testid = "Branding"]'; }
  //Marketplace
  get marketplaceSection() { return '[data-testid = "Marketplace"]'; }
  get listingLink() { return '[data-testid = "Listing Page"]'; }
  get productsLink() { return '[data-testid = "Products & Services"]'; }
  //Finances
  get financesSection() { return '[data-testid = "Finances"]'; }
  get proposalsLink() { return '[data-testid = "Proposals"]'; }
  get invoicesLink() { return '[data-testid = "Invoices"]'; }
  get paymentsLink() { return '[data-testid = "Payments"]'; }
  //Marketing
  get marketingSection() { return '[data-testid = "Marketing"]'; }
  get emailCampaignsLink() { return '[data-testid = "Email Campaigns"]'; }
  get designStudioLink() { return '[data-testid = "Design Studio"]'; }
  get mediaLibraryLink() { return '[data-testid = "Media Library"]'; }
  get formsLink() { return '[data-testid = "Forms"]'; }
  get landingPagesLink() { return '[data-testid = "Landing Pages"]'; }
  //General
  get generalLink() { return '[data-testid = "General"]'; }
  get communityLink() { return '[data-testid = "Community"]'; }
  get affiliateProgramLink() { return '[data-testid = "Affiliate Program"]'; }
  //Non profit
  get fundraisersLink() { return '[data-testid = "Fundraisers"]'; }
  get servicesLink() { return '[data-testid = "Services"]'; }
  get donationWidgetLink() { return '[data-testid = "Donation Widget"]'; }
  get sweepstakesLink() { return '[data-testid = "Sweepstakes"]'; }
  get donationsLink() { return '[data-testid = "Donations"]'; }
}

export default new SideNav();
