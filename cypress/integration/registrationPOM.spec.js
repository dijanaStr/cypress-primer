/// <reference types="Cypress" />
const { faker } = require('@faker-js/faker');
import { registerPage } from '../page_objects/registrationPOM.js'
describe("registration test", () => {

  let userData = {
      name: faker.name.findName(),
      userEmail: faker.internet.email(),
      userPassword: faker.internet.password(),
      userFirstName : faker.name.firstName (),
      userLastName : faker.name.lastName (),
    }

  beforeEach('visit register page', () => {
      cy.visit('/register');
      cy.url().should('contain', '/register');
  })
 
   it("register without first name", () => {
     registerPage.registerWithoutFirstName(userData.userLastName, userData.userEmail, userData.userPassword, userData.userPassword)
   });
 
   it("register without last name", () => {
     registerPage.registerWithoutLastName(userData.userFirstName, userData.userEmail, userData.userPassword, userData.userPassword)
   });
 
   it("register with invalid email", () => {
      registerPage.register(userData.userFirstName, userData.userLastName, 'dijana.strbac93@gmail.com', userData.userPassword, userData.userPassword)
   });
 
   it("register with invalid password confirmation", () => {
     registerPage.register(userData.userFirstName, userData.userLastName, userData.userEmail, userData.userPassword, 'dijana123')
   });
 
   it("register withhout checking terms and conditions", () => {
     registerPage.registerWithouTermsAndConditions(userData.userFirstName, userData.userLastName, userData.userEmail, userData.userPassword, userData.userPassword)
   });
 
   it("register with valid data", () => {
      registerPage.register(userData.userFirstName, userData.userLastName, userData.userEmail, userData.userPassword, userData.userPassword)
   });
 });