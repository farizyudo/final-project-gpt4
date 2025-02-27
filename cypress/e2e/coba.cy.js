import loginElement from "../support/loginElement"


describe('Login', () => {
    it('Login menggunakan password yang kosong', () => {                        // password Kosong
        cy.visit('https://pxdemo.geekgarden.id/')
        cy.get(loginElement.email).type('super_user@gmail.com')
        cy.get(loginElement.logInButton).click()
        cy.contains('password required').should('be.visible')
    })
})