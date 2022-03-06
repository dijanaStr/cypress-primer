/// <reference types="Cypress" />
const locators = require('../../fixtures/locators.json')
const { faker } = require('@faker-js/faker');

let userData = {
  userEmail : faker.internet.email (),
  userPassword : faker.internet.password ()
}
describe("registration test", () => {

  let userData = {
      name: faker.name.findName(),
      userEmail: faker.internet.email(),
      userPassword: faker.internet.password(),
      userFirstName : faker.name.firstName (),
      userLastName : faker.name.lastName ()
    }

  beforeEach('visit register page', () => {
      cy.visit('/register');
      cy.url().should('contain', '/register');
  })
 
   it("register without first name", () => {
     cy.get(Locators.Register.lastName).type(userData.userLastName);
     cy.get(Locators.CommonElements.emailField).type(userData.userEmail);
     cy.get(Locators.CommonElements.passwordField).type(userData.userPassword);
     cy.get(Locators.Register.passwordConfirmationField).type("dijana123");
     cy.get(Locators.Register.termsCheckboxBtn).check();
     cy.get(Locators.CommonElements.submitBtn).click();
   });
 
   it("register without last name", () => {
     cy.get(Locators.Register.firstName).type(userData.userFirstName);
     cy.get(Locators.CommonElements.emailField).type(userData.userEmail);
     cy.get(Locators.CommonElements.passwordField).type(userData.userPassword);
     cy.get(Locators.Register.passwordConfirmationField).type("dijana123");
     cy.get(Locators.Register.termsCheckboxBtn).check();
     cy.get(Locators.CommonElements.submitBtn).click();
   });
 
   it("register with invalid email", () => {
     cy.get(Locators.Register.firstName).type(userData.userFirstName);
     cy.get(Locators.Register.lastName).type(userData.userLastName);
     cy.get(Locators.CommonElements.emailField).type(userData.userEmail);
     cy.get(Locators.CommonElements.passwordField).type(userData.userPassword);
     cy.get(Locators.Register.passwordConfirmationField).type("dijana123");
     cy.get(Locators.Register.termsCheckboxBtn).check();
     cy.get(Locators.CommonElements.submitBtn).click();
   });
 
   it("register with invalid password confirmation", () => {
     cy.get(Locators.Register.firstName).type(userData.userFirstName);
     cy.get(Locators.Register.lastName).type(userData.userLastName);
     cy.get(Locators.CommonElements.emailField).type(userData.userEmail);
     cy.get(Locators.CommonElements.passwordField).type(userData.userPassword);
     cy.get(Locators.Register.passwordConfirmationField).type("dijana12");
     cy.get(Locators.Register.termsCheckboxBtn).check();
     cy.get(Locators.CommonElements.submitBtn).click();
   });
 
   it("register withhout checking terms and conditions", () => {
     cy.get(Locators.Register.firstName).type(userData.userFirstName);
     cy.get(Locators.Register.lastName).type(userData.userLastName);
     cy.get(Locators.CommonElements.emailField).type(userData.userEmail);
     cy.get(Locators.CommonElements.passwordField).type(userData.userPassword);
     cy.get(Locators.Register.passwordConfirmationField).type("dijana123");
     cy.get(Locators.CommonElements.submitBtn).click();
   });
 
   it("register with valid data", () => {
     cy.get(Locators.Register.firstName).type(userData.userFirstName);
     cy.get(Locators.Register.lastName).type(userData.userLastName);
     cy.get(Locators.CommonElements.emailField).type(userData.userEmail);
     cy.get(Locators.CommonElements.passwordField).type(userData.userPassword);
     cy.get(Locators.Register.passwordConfirmationField).type("dijana123");
     cy.get(Locators.Register.termsCheckboxBtn).check();
     cy.get(Locators.CommonElements.submitBtn).click();
   });
 });