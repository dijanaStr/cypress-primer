export default class CreateGalleryPage {

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
        return cy.get("//button[contains(text(),'Submit')]")
    }
    createGallery(title, description, images) {
        this.title.type(title);
        this.description.type(description);
        this.images.type(images);
        this.submitBtn.click();
    }
}

export const createGalleryPage = new CreateGalleryPage();