Feature: User Login

    Scenario: User can access Uncommongood website.
        Then login components are displayed

    Scenario Outline: Users can login to Uncommongood.
        Given user logs in as <credentials>
        Then user is <loginStatus> logged into OnlineAdaptive
        Examples:
            | credentials | loginStatus      |
            | 'user2'     | 'successfully'   |
            | 'invalid'   | 'unsuccessfully' |
@test
     Scenario: Admins can login to Uncommongood
        Given user logs in as "admin"
        Then project select screen is displayed