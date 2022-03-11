import { loginPage } from '../page_objects/loginPOM';

describe("login test POM", () => {

    before("visit app", () => {
        cy.visit("/login");
        cy.url().should("contains", "/login");
    });

    it("login with valid credentials", () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login'
        })
        .as('loginRequest');
        loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
        cy.wait('@loginRequest').then((interceptObj) => {
            console.log(interceptObj);
        })
        
    });

    it('logout', () => {
        loginPage.logoutBtn.should('have.length', 4);
        loginPage.logoutBtn.eq(3).click();
// cy.get(Locators.Header.button).should("have.length", 4)
// cy.get(Locators.Header.button).eq(3).click();
    });
});
