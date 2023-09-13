class loginPage {
    get emailInput() { return cy.get('#email'); }
    get passwordInput() { return cy.get('[name="login[password]"]'); }
    get signInButton() { return cy.get('.action.login.primary'); }
    get userMenuDropdown() { return cy.get('.page-header [data-toggle="dropdown"]'); }
    get signOutButton() { return cy.contains("Sign Out"); }
    get errorMessageText() { return cy.get('.message-error'); }
    get errorEmailText() { return cy.get('#email-error'); }
    get errorPasswordText() { return cy.get('#pass-error'); }
    get forgotPasswordButton() {return cy.get('[class="action remind"]')}
    get resetEmailInput() { return cy.get('#email_address'); }
    get resetPasswordButton() {return cy.get('[class*="action submit"]')}
    get successMessageText() { return cy.get('.message-success'); }
    
    login(email, password) {
      this.emailInput.type(email);
      this.passwordInput.type(password);
      this.signInButton.click();
    }
 
    logout() {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 })
    this.userMenuDropdown.click() 
    this.signOutButton.click()
    }
  }

  export default new loginPage();