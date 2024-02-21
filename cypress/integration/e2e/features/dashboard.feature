Feature: Side navigation
@test
    Scenario: On user login, dashboard is available.
        Given user logs in as "user"
        Then dashboard components are displayed