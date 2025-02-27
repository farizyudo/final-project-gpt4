import loginElement from "../support/loginElement"


describe('Login', () => {

    // Login Success | Positive Cases 

    it('Login dengan email dan password valid', () => {
        cy.visit('https://pxdemo.geekgarden.id/')
        cy.get(loginElement.email).type('super_user@gmail.com')
        cy.get(loginElement.pass).type('password')
        cy.get(loginElement.logInButton).click()
        cy.contains('PERFORMATRIX').should('be.visible')
    })
})