 @login @regression
Feature: Verify Login scenarios of 'practice automation.com' website
  JIRA_ID: DemoProj_1234
  Description: This feature verifies that login use cases of the applcation

  Background:
    Given User navigates to 'https://practicetestautomation.com/practice-test-login/'
   
  @login_happy 
  Scenario Outline: As a Authenticated Users I login to applcation with valid username and password
    When User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on the Submit button
    Then Verify new page URL contains "https://practicetestautomation.com/logged-in-successfully/"
    And I Verify new page contains expected text "Logged In Successfully"
    And I also verify "Congratulations student. You successfully logged in!" message
    And I verify "Log out" button is displayed on the new page
    When I logout user
    Then I verify user is successfully logged out
    Examples:
      | username                | password      |
      | student                 | Password123   |
      #| student1               | Password123   |
      #| student2               | Password123   |

  @login_negative
  Scenario Outline: As a Locked out user I try to login to applcation
    When User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on the Submit button
    And I verify error message "<errorMsg>" is displayed
      Examples:
        | usecase                       | username                                                                                  | password                                                                | errorMsg                  |
        | incorect username test        | incorrectUser                                                                             | Password123                                                             | Your username is invalid! |
        #| incorrect password test       | student                                                                                   | incorrectPassword                                                      | Your password is invalid! |
        #| Blank username and password   |                                                                                           |                                                                         | Your username is invalid! |
        #| Blank username with password  |                                                                                           | Password123                                                             | Your username is invalid! |
        #| Username with blank password  |  student                                                                                  |                                                                         | Your password is invalid! |
        #| input lengthy username        |   fdafdfadsfdasfd532523523523@#%@#%@#%#@%@#%@#%@#%@#%@#%#@%@#%@#%@#%#@FADSf               |                                                                         | Your username is invalid! |
        #| input lengthy password        |                                                                                           | fdafdfadsfdasfd532523523523@#%@#%@#%#@%@#%@#%@#%@#%@#%#@%@#%@#%@#%#@FADS| Your username is invalid! |
        #| lengthy username and pwd      |   fdafdfadsfdasfd532523523523@#%@#%@#%#@%@#%@#%@#%@#%@#%#@%@#%@#%@#%#@FADSf               | fdafdfadsfdasfd532523523523@#%@#%@#%#@%@#%@#%@#%@#%@#%#@%@#%@#%@#%#@FAD | Your username is invalid! |

  @login_other 
  Scenario Outline: I refresh the page after login and verify that user still logged in
    When User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on the Submit button
    Then Verify new page URL contains "https://practicetestautomation.com/logged-in-successfully/"
    And I Verify new page contains expected text "Logged In Successfully"
    And I also verify "Congratulations student. You successfully logged in!" message
    And I verify "Log out" button is displayed on the new page
    When I refresh the page
    And I Verify new page contains expected text "Logged In Successfully"
    Then I verify user is successfully logged out
    Examples:
      | username                | password      |
      | student                 | Password123   |

  @login_other 
  Scenario Outline: I refresh the page after login and verify that user still logged in
    When User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on the Submit button
    Then Verify new page URL contains "https://practicetestautomation.com/logged-in-successfully/"
    And I Verify new page contains expected text "Logged In Successfully"
    And I also verify "Congratulations student. You successfully logged in!" message
    And I verify "Log out" button is displayed on the new page
    When I navigate to previous page
    And I Verify new page contains expected text "Logged In Successfully"
      | username                | password      |
      | student                 | Password123   |