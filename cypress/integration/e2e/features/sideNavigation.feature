Feature: Side navigation
@test
    Scenario: On user login, side navigation is available.
        Given user logs in as "user"
        Then side navigation components are displayed