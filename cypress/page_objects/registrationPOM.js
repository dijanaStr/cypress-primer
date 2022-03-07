export default class RegisterPage {

get registerButton() {
     return cy.get('a[href="/register"]')
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
get passwordConfirmation() {
    return cy.get('#password-confirmation');
}
get checkbox() {
    return cy.get(':checkbox');
}
get submitBtn() {
    return cy.get('button');
}
registerWithoutFirstName(lastName, email, password, passwordConfirmation) {
    this.lastName.type(lastName);
    this.email.type(email);
    this.password.type(password);
    this.passwordConfirmation.type(passwordConfirmation);
    this.checkbox.click();
    this.submitBtn.click();
}

registerWithoutLastName(firstName, email, password, passwordConfirmation) {
    this.firstName.type(firstName);
    this.email.type(email);
    this.password.type(password);
    this.passwordConfirmation.type(passwordConfirmation);
    this.checkbox.click();
    this.submitBtn.click();
}

registerWithouTermsAndConditions(firstName, lastName, email, password, passwordConfirmation) {
    this.firstName.type(firstName);
    this.lastName.type(lastName);
    this.email.type(email);
    this.password.type(password);
    this.passwordConfirmation.type(passwordConfirmation);
    this.submitBtn.click();
}

register(firstName, lastName, email, password, passwordConfirmation) {
    this.firstName.type(firstName);
    this.lastName.type(lastName);
    this.email.type(email);
    this.password.type(password);
    this.passwordConfirmation.type(passwordConfirmation);
    this.checkbox.click();
    this.submitBtn.click();
}

}


export const registerPage = new RegisterPage();