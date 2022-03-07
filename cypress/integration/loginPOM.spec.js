import { loginPage } from '../page_objects/loginPOM';

describe("login test POM", () => {

    before("visit app", () => {
        cy.visit("/login");
        cy.url().should("contains", "/login");
    });

    it("login with valid credentials", () => {
        loginPage.login('dijana.strbac93@gmail.com', 'dijana12')
        cy.get('p')
        .should('be.visible')
        .and('have.text', 'Bad Credentials')
        .and('have.css', 'border-color', 'rgb(245, 198, 203)');
        
    });

    xit('logout', () => {
        loginPage.logoutBtn.should('have.length', 4);
        loginPage.logoutBtn.eq(3).click();
// cy.get(Locators.Header.button).should("have.length", 4)
// cy.get(Locators.Header.button).eq(3).click();
    });
});
