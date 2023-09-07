import loginPage from "../../fixtures/page_objects/login.page";
const validUserEmail = Cypress.env("userEmail");
const validUserPassword = Cypress.env("userPassword");

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/customer/account/login/");
  });

  it("Should login/logout with existing account", () => {
    loginPage.login(validUserEmail, validUserPassword);
    loginPage.logout();
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
    cy.contains("You are signed out").should("be.visible");
  });

  it("Should not log in with invalid email", () => {
    loginPage.login("wrongemail@gmail.com", validUserPassword);
    loginPage.errorMessageText.should(
      "have.text",
      "\nThe account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\n"
    );
  });

  it("Should not log in with invalid password", () => {
    loginPage.login(validUserEmail, "wrongpassword");
    loginPage.errorMessageText.should(
      "have.text",
      "\nThe account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\n"
    );
  });

  it("Should not log in withot @ sign", () => {
    loginPage.login("fakeEmail123456gmail.com", validUserPassword);
    loginPage.errorEmailText.should(
      "have.text",
      "Please enter a valid email address (Ex: johndoe@domain.com)."
    );
  });

  it("Should not login without email and password", () => {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
    loginPage.signInButton.click();
    loginPage.errorEmailText.should("have.text", "This is a required field.");
    loginPage.errorPasswordText.should(
      "have.text",
      "This is a required field."
    );
  });
});
