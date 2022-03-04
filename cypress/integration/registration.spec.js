/// <reference types="Cypress" />

describe("registration test", () => {

   beforeEach('visit register page', () => {
       cy.visit('/register');
       cy.url().should('contain', '/register');
   })
  
    it("register without first name", () => {
      cy.get(Locators.Register.lastName).type("Strbac");
      cy.get(Locators.CommonElements.emailField).type("dijana.strbac93+1@gmail.com");
      cy.get(Locators.CommonElements.passwordField).type("dijana123");
      cy.get(Locators.Register.passwordConfirmationField).type("dijana123");
      cy.get(Locators.Register.termsCheckboxBtn).check();
      cy.get(Locators.CommonElements.submitBtn).click();
    });
  
    it("register without last name", () => {
      cy.get(Locators.Register.firstName).type("Dijana");
      cy.get(Locators.CommonElements.emailField).type("dijana.strbac93+1@gmail.com");
      cy.get("#password").type("dijana123");
      cy.get("#password-confirmation").type("dijana123");
      cy.get(":checkbox").check();
      cy.get("button").click();
    });
  
    it("register with invalid email", () => {
      cy.get(Locators.Register.firstName).type("Dijana");
      cy.get(Locators.Register.lastName).type("Strbac");
      cy.get(Locators.CommonElements.emailField).type("dijana.strbac93+1gmail.com");
      cy.get("#password").type("dijana123");
      cy.get("#password-confirmation").type("dijana123");
      cy.get(":checkbox").check();
      cy.get("button").click();
    });
  
    it("register with invalid password confirmation", () => {
      cy.get(Locators.Register.firstName).type("Dijana");
      cy.get(Locators.Register.lastName).type("Strbac");
      cy.get(Locators.CommonElements.emailField).type("dijana.strbac93+1@gmail.com");
      cy.get("#password").type("dijana123");
      cy.get("#password-confirmation").type("dijana12");
      cy.get(":checkbox").check();
      cy.get("button").click();
    });
  
    it("register withhout checking terms and conditions", () => {
      cy.get(Locators.Register.firstName).type("Dijana");
      cy.get(Locators.Register.lastName).type("Strbac");
      cy.get(Locators.CommonElements.emailField).type("dijana.strbac93+1@gmail.com");
      cy.get("#password").type("dijana123");
      cy.get("#password-confirmation").type("dijana123");
      cy.get("button").click();
    });
  
    it("register with valid data", () => {
      cy.get(Locators.Register.firstName).type("Dijana");
      cy.get(Locators.Register.lastName).type("Strbac");
      cy.get(Locators.CommonElements.emailField).type("dijana.strbac93+1@gmail.com");
      cy.get("#password").type("dijana123");
      cy.get("#password-confirmation").type("dijana123");
      cy.get(":checkbox").check();
      cy.get("button").click();
    });
  });