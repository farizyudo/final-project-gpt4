import loginElement from "../support/loginElement"


describe('Profile', () => {

    // Login Success | Positive Cases 

    it('Login dengan email dan password valid', () => {
        cy.visit('https://pxdemo.geekgarden.id/')
        cy.get(loginElement.email).type('super_user@gmail.com')
        cy.get(loginElement.pass).type('password')
        cy.get(loginElement.logInButton).click()
        cy.get('.chakra-avatar__img').click()
        cy.contains('Profile').click()
        cy.get('.css-t72zj9 > :nth-child(1) > .chakra-button').click()
    })
})