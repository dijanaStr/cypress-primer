
import { createGalleryPage } from '../page_objects/createGalleryPOM';
import { loginPage } from '../page_objects/loginPOM';
import { faker } from "@faker-js/faker"

describe("createGallery test POM", () => {
    let galleryData = {
        title : faker.name.title(),
        description : faker.lorem.sentence(),
        url : faker.image.imageUrl('.jpg'),
        urlGif : faker.image.imageUrl('.gif'),
        urlBmp : faker.image.imageUrl('.bmp'),
        urlPdf : faker.image.imageUrl('.pdf'),
        titleOneWord : faker.lorem.word(1),
        title256Words : faker.lorem.words(256)


    }
    beforeEach('visit login page', () => {
        cy.visit('/login');
        loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
        cy.get('a[href="/create"]').should('be.visible')
        cy.visit('/create')
        })
       
it("visit create gallery page", () => {
    createGalleryPage.createGallery(galleryData.title, galleryData.description, galleryData.url)

    });

it("create gallery without title", () => {
    createGalleryPage.createGallery(' ', galleryData.description, galleryData.url)
})

it("create gallery with spaces on fields", () => {
    createGalleryPage.createGallery(' ', ' ', ' ')
})

it("create gallery without image", () => {
    createGalleryPage.createGallery(galleryData.title, galleryData.description, ' ')
})

it("create gallery with 1 character in title", () => {
    createGalleryPage.createGallery(galleryData.titleOneWord, galleryData.title, galleryData.url)
    cy.get('p')
    .should('have.text', 'The title must be at least 2 characters.')
})

it("create gallery with giff image", () => {
    createGalleryPage.createGallery(galleryData.title, galleryData.description, galleryData.urlGif)
    cy.get('p')
    .should('have.text', 'Wrong format of image')
})

it("create gallery with bmp image", () => {
    createGalleryPage.createGallery(galleryData.title, galleryData.description, galleryData.urlBmp)
    cy.get('p')
    .should('have.text', 'Wrong format of image')
})

it("create gallery with pdf image", () => {
    createGalleryPage.createGallery(galleryData.title, galleryData.description, galleryData.urlPdf)
    cy.get('p')
    .should('have.text', 'Wrong format of image')
})

it('create gallery with 256 characters in title', () => {
    createGalleryPage.createGallery(galleryData.title256Words, galleryData.description, galleryData.url)
    cy.get('p')
    .should('have.text', 'The title may not be greater than 255 characters.')
})
})

