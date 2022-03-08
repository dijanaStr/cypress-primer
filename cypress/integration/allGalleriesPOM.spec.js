
import { allGalleriesPage } from '../page_objects/allGalleriesPOM';

describe("allGalleries test POM", () => {
    before("visit app", () => {
        cy.visit("/");
        cy.url().should("contains", "/")
        allGalleriesPage.allGalleriesTitle.should('have.text', 'All Galleries')
    });
    it("load more button should work", () => {
        allGalleriesPage.allGalleries
        cy.get('button').last().click();
        cy.get('button')
        .should('be.visible')
        .and('have.css', 'border-color', 'rgb(108, 117, 125)');
    });
    it("all galleries should contain gallery", () => {
        allGalleriesPage.allGalleries
        cy.get('div[class="cell"]')
        .should('be.visible')
        .and('have.css', 'border-color', 'rgb(191, 191, 191)');
    });
    it("search button should exist", () => {
        allGalleriesPage.allGalleries
        cy.get('input[type="text"]')
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(255, 255, 255)')
    });

    it('filter button should exist', () => {
        allGalleriesPage.allGalleries
        cy.get('button[type="button"]')
        .should('be.visible')
        .and('have.css', 'border-color', 'rgb(108, 117, 125)')
    })

    it('Gallery App button should exist', () => {
        allGalleriesPage.allGalleries
        cy.get('a[class="navbar-brand router-link-exact-active router-link-active"]')
        .should('be.visible')
        .and('have.text', 'Gallery App')
    })

    it('All Galleries button should exist', () => {
        allGalleriesPage.allGalleries
        cy.get('.nav-link.nav-buttons.router-link-exact-active.router-link-active')
        .should('be.visible')
    })



    it('Login button should exist', () => {
        allGalleriesPage.allGalleries
        cy.get('a[href="/login"]')
        .should('be.visible')
    })

    it('Register button should exist', () => {
        allGalleriesPage.allGalleries
        cy.get('a[href="/register"]')
        .should('be.visible')
    })


});