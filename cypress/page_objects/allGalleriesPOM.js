export default class AllGalleriesPage {

    get search() {
        return cy.get("input[type='text']");
    }
    get filter() {
        return cy.get("button[type='button']")
    }
   

    allGalleries(search, filter) {
        this.search.type(search);
        this.filter.click();
    }
}

export const allGalleriesPage = new AllGalleriesPage()