Hi, here you can find test suite: Sign-In Functionality Tests.

Assignment Instructions:

1. Visit the URL. https://magento.softwaretestingboard.com/
2. Navigate to Create an Account.
3. Manually Create an account using fake emails (no authentication needed) and Signout.
4. Navigate to Sign In.
5. Write an automation test for the sign-in functionality under "Registered
   Customers" in the screen shot above. Include only the test cases which you
   think should be tested. Be prepared to justify why you included these test cases
   and excluded others in the team interview.
6. There should be results of test execution with reporting.
7. There should be instructions on how to execute the tests so that we can run it.
8. Make sure you upload your assignment to GitHub and send us the GitHub link
   and be prepared to run it in the next round.

**Prerequisites**

Before you begin, ensure you have met the following requirements:

You have installed Node.js and npm.
You have a <Windows/Linux/Mac> machine. State if there are any operating system (OS) dependencies.

**Install**

To install, follow these steps:

git clone https://github.com/vlad-savchuk95/automation-coding-test-PathFactory.git

Install project dependencies:
npm install

**Run**

To run tests, follow these steps:

npx cypress open

or silent mode - npx cypress run

**Reporting**

The test suite generates comprehensive HTML reports of the test runs. These reports can be found in the assignment_test_suite_login/mochawesome-report/mochawesome.html directory.
