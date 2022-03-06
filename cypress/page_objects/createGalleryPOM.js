export default class CreateGalleryPage {

    get email() {
        return cy.get('#email');
    }

    get password() {
        return cy.get('#password');
    }

    get submitBtn() {
        return cy.get('button');
    }
    
   login(email, password) {
        this.email.type(email);
        this.password.type(password);
        this.submitBtn.click();
    }


    get title() {
    return cy.get("input[id='title']");
    }
    get description () {
        return cy.get("input[id='description']");
    }
    get images() {
        return cy.get("input[type='url']");
    }
    get submitBtn() {
        return cy.get("button[css='1']")
    }
    createGallery(title, description, images) {
        this.title.type(title);
        this.description.type(description);
        this.images.type(images);
        this.submitBtn.click();
    }
}

export const createGalleryPage = new CreateGalleryPage();