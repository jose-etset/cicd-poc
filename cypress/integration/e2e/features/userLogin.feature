Feature: User Login

    Scenario: User can access Uncommongood website.
        Then login components are displayed

    Scenario Outline: Users can login to Uncommongood.
        Given user logs in as <credentials>
        Then user is <loginStatus> logged into Uncommongood
        Examples:
            | credentials | loginStatus      |
            | 'user'     | 'successfully'   |
            | 'invalid'   | 'unsuccessfully' |

     Scenario: Admins can login to Uncommongood
        Given user logs in as "admin"
        Then project select screen is displayed