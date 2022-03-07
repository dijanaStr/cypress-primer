import { allGalleriesPage, AllGalleriesPage } from '../page_objects/allGalleriesPOM';

describe("allGalleries test POM", () => {
    before("visit app", () => {
        cy.visit("/");
        cy.url().should("contains", "/");
    });
    it("load more button should work", () => {
        allGalleriesPage.allGalleries
        cy.get('button').last().click();
        cy.get('button')
        .should('be.visible')
        .and('have.css', 'border-color', 'rgb(108, 117, 125)');
    });
    it("should contain gallery", () => {
        allGalleriesPage.allGalleries
        cy.get('div[class="cell"]')
        .should('be.visible')
        .and('have.css', 'border-color', 'rgb(191, 191, 191)');
    })

});