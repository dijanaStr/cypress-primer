
import { createGalleryPage } from '../page_objects/createGalleryPOM';
import { loginPage } from '../page_objects/loginPOM';

describe("createGallery test POM", () => {
    beforeEach('visit login page', () => {
        cy.visit('/login');
        cy.url().should('contain', '/login');
     
        })
       
       
it("visit create gallery page", () => {
    cy.visit('/create')
    loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
    cy.wait(1000);
    cy.get('.nav-link').eq(2).click();
    createGalleryPage.createGallery('title', 'description', 'https://tinypng.com/images/social/website.jpg')

    });

it("create gallery without title", () => {
    cy.visit('/create')
    loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
    cy.wait(1000);
    cy.get('.nav-link').eq(2).click();
    createGalleryPage.createGallery(' ', 'description', 'https://tinypng.com/images/social/website.jpg')
    cy.get('p')
    .should('have.text', 'The title field is required.')
})

it("create gallery with spaces on fields", () => {
    cy.visit('/create')
    loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
    cy.wait(1000);
    cy.get('.nav-link').eq(2).click();
    createGalleryPage.createGallery(' ', ' ', ' ')
})

it("create gallery without image", () => {
    cy.visit('/create')
    loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
    cy.wait(1000);
    cy.get('.nav-link').eq(2).click();
    createGalleryPage.createGallery('title', 'description', ' ')
})

it("create gallery with 1 character in title", () => {
    cy.visit('/create')
    loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
    cy.wait(1000);
    cy.get('.nav-link').eq(2).click();
    createGalleryPage.createGallery('t', 'description', 'https://tinypng.com/images/social/website.jpg')
    cy.get('p')
    .should('have.text', 'The title must be at least 2 characters.')
})

it("create gallery with giff image", () => {
    cy.visit('/create')
    loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
    cy.wait(1000);
    cy.get('.nav-link').eq(2).click();
    createGalleryPage.createGallery('title', 'description', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif')
    cy.get('p')
    .should('have.text', 'Wrong format of image')
})

it("create gallery with bmp image", () => {
    cy.visit('/create')
    loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
    cy.wait(1000);
    cy.get('.nav-link').eq(2).click();
    createGalleryPage.createGallery('title', 'description', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.bmp')
    cy.get('p')
    .should('have.text', 'Wrong format of image')
})

it("create gallery with pdf image", () => {
    cy.visit('/create')
    loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
    cy.wait(1000);
    cy.get('.nav-link').eq(2).click();
    createGalleryPage.createGallery('title', 'description', 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.pdf')
    cy.get('p')
    .should('have.text', 'Wrong format of image')
})
})

