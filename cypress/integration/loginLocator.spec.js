/// <reference types="cypress" />
const Locators = require('../fixtures/Locators.json');
const { faker } = require('@faker-js/faker');

describe("login test", () => {
   
let userData = {
  name: faker.name.findName(),
  randomEmail: faker.internet.email(),
  randomPassword: faker.internet.password(),
  userFirstName : faker.name.firstName (),
  userLastName : faker.name.lastName ()
}

  before("visit app", () => {
      cy.visit("/");
    });
  
    it("login with valid credentials", () => {
      console.log(userData.randomName);
      cy.get(Locators.Header.button).eq(1).click();
     cy.get(Locators.CommonElements.emailField).type(userData.randomEmail);
      cy.get(Locators.CommonElements.passwordField).type(userData.randomPassword)
      cy.get(Locators.CommonElements.submitBtn).click();
    });
  
    it("logout", () => {
      cy.get(Locators.Header.button).should("have.length", 4);
      cy.get(Locators.Header.button).eq(3).click();
    });
  });