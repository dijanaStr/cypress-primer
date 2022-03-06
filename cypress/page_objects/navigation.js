class Navigation{
    get search() {
        return cy.get("input[type='text']")
    }
    get filter() {
        return cy.get("button[type='button']")
    }
    get loadMore() {
        return cy.get("button[class='btn btn-custom']")
    }
    clickSearch() {
        this.search.click()
    }
    clickFilter() {
        this.filter.click()
    }
    clickLoadMore() {
        this.loadMore.click()
    }
}

export const navigation = new Navigation()