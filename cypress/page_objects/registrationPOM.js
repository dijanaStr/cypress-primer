class RegisterPage {

get registerButton() {
     return cy.get('a[href="/register"]')
}
get registerHeading() {
    return cy.get('h1');
}

get firstName() {
    return cy.get('#first-name');
}
get lastName() {
    return cy.get('#last-name');
}
get email () {
    return cy.get('#email');
}
get password() {
    return cy.get('#password');
}
get password_confirmation() {
    return cy.get('#password-confirmation');
}
get checkbox() {
    return cy.get(':checkbox');
}
get submitBtn() {
    return cy.get('button');
}
registerWithoutFirstName(lastName, email, password, password_confirmation) {
    this.lastName.type(lastName);
    this.email.type(email);
    this.password.type(password);
    this.password_confirmation.type(password_confirmation);
    this.checkbox.click();
    this.submitBtn.click();
}

registerWithoutLastName(firstName, email, password, password_confirmation) {
    this.firstName.type(firstName);
    this.email.type(email);
    this.password.type(password);
    this.password_confirmation.type(password_confirmation);
    this.checkbox.click();
    this.submitBtn.click();
}

registerWithouTermsAndConditions(firstName, lastName, email, password, password_confirmation) {
    this.firstName.type(firstName);
    this.lastName.type(lastName);
    this.email.type(email);
    this.password.type(password);
    this.password_confirmation.type(password_confirmation);
    this.submitBtn.click();
}

register(firstName, lastName, email, password, password_confirmation) {
    this.firstName.type(firstName);
    this.lastName.type(lastName);
    this.email.type(email);
    this.password.type(password);
    this.password_confirmation.type(password);
    this.checkbox.check();
    this.submitBtn.click();
}

}


export const registerPage = new RegisterPage();