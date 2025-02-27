import loginElement from "../support/loginElement"


describe('Contoh', () => {
    it('Login menggunakan password yang kosong', () => {

        cy.visit('https://pxdemo.geekgarden.id/')
        cy.get(loginElement.email).type('super_user@gmail.com')
        cy.get(loginElement.pass).type('password')
        cy.get(loginElement.logInButton).click()

    })
})