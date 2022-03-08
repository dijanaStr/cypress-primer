class AllGalleriesPage {

    get allGalleriesHeading() {
        return cy.get('h1');
    }
    get search() {
        return cy.get("input[type='text']");
    }
    get filterBtn() {
        return cy.get('button').first();
    }
    get loadMoreBtn() {
        return cy.get('button').last();
    }
    get allGalleriesTitle() {
        return cy.get('h1')
    }
   

    allGalleries(search, filterBtn) {
        this.search.type(search);
        this.filter.click();
    }
}

export const allGalleriesPage = new AllGalleriesPage()