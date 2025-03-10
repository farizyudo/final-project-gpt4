class loginElement {
    email = ':nth-child(2) > .chakra-input'
    pass = ':nth-child(3) > .chakra-input'
    logInButton = '.chakra-button'

    inputUsername(userEmail) {
        cy.get(this.email)
            .clear()
            .type(userEmail)
    }

    inputPassword(userPass) {
        cy.get(this.pass)
            .clear()
            .type(userPass)
    }

    BTNlogin() {
        cy.get(this.logInButton).click()
    }
}
export default new loginElement()