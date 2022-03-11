
import { createGalleryPage } from '../page_objects/createGalleryPOM';
import { loginPage } from '../page_objects/loginPOM';
import { faker } from "@faker-js/faker"

describe("createGallery test", () => {
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
    beforeEach('log into the application', () => {
        cy.loginViaBackend()
       // cy.visit('/create');
       // cy.url().should("contain", "/create");
        //cy.visit('/create')
        //cy.visit('/login');
        //loginPage.login('dijana.strbac93@gmail.com', 'dijana123');
       // cy.get('a[href="/create"]').should('be.visible')
       // cy.visit('/create')
      
      // cy.visit('/') 
    })
    it.only('test create gallery', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('galleryCreation');

        cy.visit('/create');
        cy.contains('Logout').should('be.visible');
    
        createGalleryPage.createGallery('test galerija', 'moja galerija', galleryData.url);
        cy.wait('@gallerycreation').then((interception) => {
            console.log('ID', interception.response.body.id);
            expect(interception.response.statusCode).eq(201);
            galleryId = interception.response.body.id;
    
            cy.visit('/galleries/${galleryId}');
            cy.get('h1').should('have.text', 'test galerija');
    })
   
    })

    })
    it('test backend register', () => {
        cy.visit('/create');
        cy.contains('Logout').should('be.visible');
    })
       //cy.visit('/create')
       
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


