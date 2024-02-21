import Base from './base';

class Dashboard extends Base {
  // Header
  get timeHeader() { return '.time-header'; }
  get sectionSubtitle() { return '.page-subtitle'; }
  // Calendar
  get paginationButtons() { return '[data-testid = "calendar-pagination"]'; }
  get addEventButton() { return '[data-testid = "calendar-add-event"]'; }
  get viewAllEventsButton() { return '[data-testid = "calendar-view-all"]'; }
  get eventsCarousel() { return '[data-testid = "events-carousel"]'; }
  // Analytics
  get informationCard() { return '.information-card'; }
  // Notifications
  get notificationCount() { return '.notifications__count'; }
  get markAllAsReadButton() { return '[data-testid = "notifications-mark-all-as-read"]'; }
  get viewAllButton() { return '[data-testid = "notifications-view-all"]'; }
  get notificationItem() { return '.notification__item'; }
  // To-do list
  get addTaskButton() { return '[data-testid = "todo-add-task"]'; }
  get viewAllTasksButton() { return '[data-testid = "todo-view-all-tasks"]'; }
  get todoListItem() { return '.to-do-list__item'; }
}

export default new Dashboard();
